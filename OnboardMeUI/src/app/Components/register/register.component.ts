import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/model';
import { AppservicesService } from 'src/app/services/appservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public fb: FormBuilder, private service: AppservicesService) { }

  RegisterForm!: FormGroup;

  ngOnInit(): void {

    this.RegisterForm = this.fb.group({

      firstName: ['',[Validators.required]],

      lastName: ['',[Validators.required]],

      email: ['',[Validators.email]],

      mobileNo: ['',[Validators.required]],

    })

  }

  onSubmitDetail() {

    console.log(this.RegisterForm.value);

    const obj: user = {

      firstName: this.RegisterForm.value.firstName,

      lastName: this.RegisterForm.value.lastName,

      email: this.RegisterForm.value.email,

      mobileNo: this.RegisterForm.value.mobileNo

    }

    this.service.RegisterNewUser(obj).subscribe({

      next: (res) => { 
        console.log(res);
        this.RegisterForm.reset();
      },

      error: (error: any) => { console.log(error.error.text) }

    })
  }
}
