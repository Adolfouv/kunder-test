import { Injectable } from '@angular/core';
/*=============================================
Import HttpClient
=============================================*/
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  /*=============================================
  Create instance inside constructor
  =============================================*/
  constructor(private _obj:HttpClient) { }

  /*=============================================
  Create GET method
  =============================================*/
  getProductData(){

    /*=============================================
     Calling the API Service
     =============================================*/
    return this._obj.get("https://hack.kunderlabs.com/exam/telecom/api/products/new") 
  }
}
