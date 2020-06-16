import { Component } from '@angular/core';
import {RetailserviceService} from './retailservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Details';
  apiData: any;
  retailer_id: string
  newArr: Array<object>=[]
  retailIdArr: number[]=[]
  errFlag: boolean =false;
  constructor(private retailService:RetailserviceService) {

   }

   


   
   getRetailData(){
     if(this.retailer_id){
     // this.retailIdArr.push(parseInt(this.retailer_id))
        if(this.retailIdArr.indexOf(parseInt(this.retailer_id))==-1){
          this.retailIdArr.push(parseInt(this.retailer_id))
            
            this.retailService.getResponse(this.retailer_id).subscribe((data)=>{
            this.apiData=data;
            this.newArr.push(this.apiData.payload[0])
            console.log(this.newArr)
          })
          
        }else alert("This ID already Exist");
    }else {
      alert('Enter Retailer ID');
    }
    
}
resetdata(){
  
  
}



}