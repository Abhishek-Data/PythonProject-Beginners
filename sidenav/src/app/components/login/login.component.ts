import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userLoggedIn: boolean = true;
  loginForm!: FormGroup;
  submitted = false;
  post: any = '';
  hide = true;
  durationInSeconds = 5;
  loading = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.fun();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(emailregex)]],
      password: [null, [Validators.required, this.checkPassword]],
    });
  }
  getErrorEmail() {
    return this.loginForm.get('email')?.hasError('required')
      ? 'Field is required'
      : this.loginForm?.get('email')?.hasError('pattern')
      ? 'Not a valid emailaddress'
      : this.loginForm?.get('email')?.hasError('alreadyInUse')
      ? 'This emailaddress is already in use'
      : '';
  }
  checkPassword(control: any) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }
  getErrorPassword() {
    return this.loginForm.get('password')?.hasError('required')
      ? 'Field is required'
      : this.loginForm.get('password')?.hasError('requirements')
      ? 'Password needs to be at least eight characters, one uppercase letter and one number'
      : '';
  }

  onSubmit() {
    //   this.loading = true;
    //   let email: string = this.loginForm.get('email')?.value;
    //   let password: string = this.loginForm.get('password')?.value;
    //   this.authService
    //     .SignIn(email, password)
    //     .then((user) => {
    //       this.ngZone.run(() => {
    //         this.router.navigate(['home']);
    //       });
    //     })
    //     .catch((error: { message: any }) => {
    //       // window.alert(error.message);
    //       this.loading = false;
    //       this.openSnackBar(error.message, this.action);
    //     });
    // }
    // action = 'close';
    // openSnackBar(message: string, action: string) {
    //   this._snackBar.open(message, action, {
    //     duration: 2000,
    //   });
  }

  fun() {
    let newTitleElem: any;
    let shiftId = 'shift';
    let square = 'square';
    let htmlStr = 'Plain Text Example &amp; <strong>Bold Text Example</strong>';
    (<HTMLInputElement>document.getElementById(shiftId)).style.borderBottom =
      '4px solid blue';

    for (let i = 0; i < 5; i++) {
      newTitleElem.innerHTML = `<span class="red">Kira</span>`;
      (<HTMLInputElement>document.getElementById(shiftId)).append(htmlStr);

      // $('.wrapper').append('<div class="square"></div>');
    }

    let degrees = -10;
    // (<HTMLInputElement>document.getElementById(square)).each(function () {
    //   (<HTMLInputElement>document.getElementById(square)).style
    //     .$(this)
    //     .css('transform', `rotate(${degrees}deg)`);
    //   degrees += 3;
    // });
  }
}
