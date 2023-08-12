import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Brand } from '../shared/models/brand';
import { Type } from "../shared/models/type";
import { map } from 'rxjs';
import { ShopParams } from '../shared/models/shopParams';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseApi = "http://localhost:5019/api/";

  constructor(private httpClient:HttpClient) { }

  getProduct(id:number){
    return this.httpClient.get<Product>(this.baseApi+"products/"+id);
  }

  getProducts(){
    return this.httpClient.get<Product[]>(this.baseApi+"products")
  }

  /*getProducts(shopParams:ShopParams){
    let params = new HttpParams();

    if(shopParams.brandId){
        params = params.append("brandId",shopParams.brandId.toString());
    }

    if(shopParams.typeId){
      params = params.append("typeId",shopParams.typeId.toString());
    }

    if(shopParams.sort){
      params = params.append("sort",shopParams.sort.toString())
    }

    params = params.append("sort",shopParams.sort);
    params = params.append("pageIndex",shopParams.pageNumber?.toString());
    params = params.append("pageSize",shopParams.pageSize?.toString());

    return this.httpClient.get<Pagination>(this.baseApi+"products",{observe:"response",params})
      .pipe(map(res => {
      return res.body;
    }))
  }*/

  getBrands(){
    return this.httpClient.get<Brand[]>(this.baseApi +"products/brands")
  }

  getTypes(){
    return this.httpClient.get<Type[]>(this.baseApi+"products/types")
  }
}
