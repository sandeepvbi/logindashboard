import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/share/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  public loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }

  login(){
    this.http.post('http://localhost:5000/api/v1/user',this.loginForm.value).subscribe((res:any)=>{
       if(res){
        console.log("login",res);
        window.location.href = 'https://coreui.io/demos/angular/4.2/free/#/dashboard'
       }
    })
  }

  AWSlogin(){
    window.location.href = 'https://cognitserver.auth.us-east-1.amazoncognito.com/login?client_id=42h5av3a5lcdc828eucss13cq8&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fcoreui.io%2Fdemos%2Fbootstrap%2F4.2%2Ffree%2F'
  }
}

