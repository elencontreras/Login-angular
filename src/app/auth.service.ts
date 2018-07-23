import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	readonly rootUrl='https://my-json-server.typicode.com/elencontreras/users'

  	constructor(private http:HttpClient) { }

  	userAuthentication(userName, password){
  		
	  	// var data="userName="+userName+"&password="+password+"&grant_type=password";
	  	// var reqHeader= new HttpHeaders({'Content-Type':'application/x-www-urlenconded'});
	  	// return this.http.post(this.rootUrl,data,{headers:reqHeader})
  	}
}
