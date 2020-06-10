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

  constructor(private retailService:RetailserviceService) {

   }
   getRetailData(){
     this.retailService.getResponse(this.retailer_id).subscribe((data)=>{
       console.log(data);
       this.apiData=data;
     })
}}
