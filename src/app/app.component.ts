import { Component } from '@angular/core';
//Importing/Injecting the service to this app.component.ts 
import {ProductService} from './services/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*=============================================
  Create an instance of the product service
  =============================================*/
  constructor(private _obj:ProductService){
  _obj.getProductData().subscribe(data=>{ //Calling method inside the service
    console.log(data);
  })
  }
}
