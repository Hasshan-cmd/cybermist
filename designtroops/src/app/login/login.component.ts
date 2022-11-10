import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm =new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100),
      Validators.pattern("^[a-zA-Z ]{3,}$")
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(10),
      Validators.pattern("^[a-zA-Z ]{3,}$")
    ])
  });

  get usernameField(): FormControl {
    return this.loginForm.controls.username as FormControl;
  }

  get passwordField(): FormControl {
    return this.loginForm.controls.password as FormControl;
  }

  async submit() : Promise<void> {
    if (!this.loginForm.invalid) {
      try {
        if (this.usernameField.value == "hassan" && this.passwordField.value == "mwmhassan") {
          this.navigate();
        }else {
          alert("Incorrect username or password");
        }
      }catch (e) {
        // @ts-ignore
        alert(e.error.text);
      }
    }
  }

  navigate(){
    this.router.navigate(['/home']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
}
