import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { map,retry, catchError  } from "rxjs/operators"; 
import { Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class RetailserviceService {

  constructor(private http: HttpClient) {
    
   }
   handleError(error) {

    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
 
      // client-side error
 
      errorMessage = `Error: ${error.error.message}`;
 
    } else {
 
      // server-side error
 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
    }
 
    window.alert(errorMessage);
 
    return throwError(errorMessage);
 
  }
 
 
 


  getResponse(retailer_id){
    const params = new HttpParams()
    
  .set('retailer_id',retailer_id)
    
    
  
   
  

    var obj ={};

    return this.http.get("http://13.233.28.190/data",{params}).pipe(map(res => { 
    
      retry(1),

      catchError(this.handleError)
 
    return res
    }
     )
    )
     

  }
}
