import { Component } from '@angular/core';
import { ServiceService } from 'src/app/share/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  userData: any;
  value = "";
  constructor(private accountService: ServiceService) { }

  ngOnInit() {
    this.accountService.currentUserData.subscribe((userData: any) => this.userData = userData)
  }
  signUp(data:any){
   this.accountService.changeData(data);
  }
}
