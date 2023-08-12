import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent {
  baseUrl = environment.apiUrl;
  validationErrors: string[] = [];

  constructor(private httpClient:HttpClient){}

  get404Error(){
    this.httpClient.get(this.baseUrl+"products/42").subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    })
  }

  get500Error(){
    this.httpClient.get(this.baseUrl+"buggy/serverError").subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    })
  }

  get400Error(){
    this.httpClient.get(this.baseUrl+"buggy/badrequest").subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    })
  }

  get401Error(){
    this.httpClient.get(this.baseUrl+"buggy/notauthorized").subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    })
  }

  get400ValidationError(){
    this.httpClient.get(this.baseUrl+"products/fortytwo").subscribe({
      next: response => console.log(response),
      error: err => {
        console.log(err);
        this.validationErrors = err.errors;
      }
    })
  }
}
