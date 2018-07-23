import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError:boolean=false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(userName,password){
  	if (userName=="elencontreras" && password=="123") {
  		this.router.navigate(['/home']);
  		console.log(userName);
  	}
  	// this.authService.userAuthentication(userName,password).subscribe((data:any)=>{
  	// 	localStorage.setItem('userToken',data.access_token);
  	// 	this.router.navigate(['/home']);
  	// 	console.log(userName);
  	// },
  	// (err:HttpErrorResponse)=>{
  	// 	this.isLoginError=true;
  	// });
  		
 

}
}
