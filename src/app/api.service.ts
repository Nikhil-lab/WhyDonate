import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


let API_URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(){ 
   return this.http.get(API_URL);
   }

   getDataByParamater(parameter:string){
     let param1= new HttpParams().set('State',parameter);
    return this.http.get(API_URL,{params:param1});
   }

   postData(data){
     return this.http.post( API_URL,data);
  }

}
