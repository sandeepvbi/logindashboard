import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/share/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)  { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username:[""],
      email: [""],
      password: [""]
    })
  }
  Register(){
    this.http.post('http://localhost:5000/api/v1/user',this.signupForm.value).subscribe((res:any)=>{
      if(res){
        console.log("regiter",res);
       window.location.href = 'https://coreui.io/demos/angular/4.2/free/#/dashboard'
      }
   })
// this.router.navigateByUrl('https://coreui.io/demos/angular/4.2/free/#/dashboard');
  //  window.location.href='https://coreui.io/demos/angular/4.2/free/#/dashboard'
  }


}
