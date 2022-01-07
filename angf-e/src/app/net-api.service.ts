import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  readonly netapiUrl="https://localhost:44375";
  constructor(private http:HttpClient) {}
    getHome():Observable<home[]>{
      return this.http.get<any>(this.netapiUrl+ `/LobCategories`);
    }
    getbyid(id:number):Observable<any>{
      return this.http.get(this.netapiUrl+`/LobCategories/${id}`)
    }
  // addHome(data:any){
     //return this.http.post(this.netapiUrl+`/values`,data);
   //}
   addHome(data:home) {

    return this.http.post(this.netapiUrl + `/LobCategories`, JSON.stringify(data), this.httpOptions)

    
    
  }  
   updateHome(data:any,id:number){
    return this.http.put(this.netapiUrl +`/LobCategories/${id}`,data);
   }
   deleteHome(id:number){
     return this.http.delete(this.netapiUrl+`/LobCategories/${id}`)
   }
   
}
interface home {
  lobCategoryName: string;
  createdBy: string;
  updatedBy: string;
  
}
