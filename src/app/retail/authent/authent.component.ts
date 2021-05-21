import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authent',
  templateUrl: './authent.component.html',
  styleUrls: ['./authent.component.css'],
})
export class AuthentComponent implements OnInit {
  hide = true;

  authenForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onConnnectClick(): void {
    const result = {
      email: this.authenForm.controls.email.value,
      password: this.authenForm.controls.password.value,
    };

    this.router.navigateByUrl('list');
    console.log(result);
  }
}
