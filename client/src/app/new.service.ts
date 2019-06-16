import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private httpClient : HttpClient) { }

   getFile():Observable<any>{
    return this.httpClient.get("http://localhost:4800/users")
  }

  downloadFile(data):Observable<any>{
    return this.httpClient.post("http://localhost:4800/users/downloadfile",data,
    {
     responseType: 'blob',
     headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
