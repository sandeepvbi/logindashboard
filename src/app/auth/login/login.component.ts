import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/share/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData:any;
    constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private accountService: ServiceService
  ) {}
  ngOnInit() {
    this.accountService.currentUserData.subscribe((userData: any) => (this.userData = userData));
  }

  changeData(event:any) {
    let msg = event.target.value;
    this.accountService.changeData(msg);
  }
  login() {
    // this.router.navigateByUrl('https://coreui.io/demos/angular/4.2/free/#/dashboard');
    window.location.href='https://coreui.io/demos/angular/4.2/free/#/dashboard'

  }
}
