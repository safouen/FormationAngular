import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login(formulaire: NgForm) {
    this.auth.login(formulaire.value).subscribe(data => {
      localStorage.setItem('token', data['id']);
      this.router.navigate(['']);
      },
      error => { console.log(error); });
  }

}
