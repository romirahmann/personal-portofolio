import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Login Auth
import { AuthenticationService } from '../../core/services/auth.service';
import { ToastService } from './toast-service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  // Login Form
  loginForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router,
    private route: ActivatedRoute, public toastService: ToastService, private formBuilder: FormBuilder, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
   this.getDataForm()
  }

  getDataForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      const data = this.loginForm.value
      console.log(data)

      this.authenticationService.login(data).subscribe(
        (res: any) => {
          this.tokenStorageService.saveToken(res.token, res.userData[0].username)
          // Simpan token setelah berhasil login
          this.router.navigate(['/admin']);
        }
      )
      
    } else {
      console.log("Error");
    }
  }

}
