import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url:string = "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }
  // service to get list of data and also data of particular id.
  getData(url:string){
    return this.http.get(`${this.base_url}/${url}`);
  }
  // service to send data to server. creating new data
  postData(url:string,data:object){
    return this.http.post(`${this.base_url}/${url}`,data);
  }
  // service to update the existing data
  updateData(url:string,data:object){
    return this.http.put(`${this.base_url}/${url}`,data);
  }
  // service to delete the data
  deleteData(url:string){
    return this.http.delete(`${this.base_url}/${url}`);
  }
}
