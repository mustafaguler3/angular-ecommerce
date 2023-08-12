import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title!: "Musty Shop;"
  products!: Product[];

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get("https://localhost:7211/api/products?pageSize=50").subscribe(
      (res:any) => {
        this.products = res.data;
      },err => {
        console.log(err)
      }
    )
  }
  
}
