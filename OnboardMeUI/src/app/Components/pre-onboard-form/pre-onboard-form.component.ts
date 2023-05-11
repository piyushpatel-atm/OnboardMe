import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pre-onboard-form',
  templateUrl: './pre-onboard-form.component.html',
  styleUrls: ['./pre-onboard-form.component.css']
})
export class PreOnboardFormComponent implements OnInit{
   constructor(private fb: FormBuilder) {}
   personalDetailForm!:FormGroup;
   addressFormGroup!:FormGroup;
   experienceFormGroup!:FormGroup;
   ackFormGroup!:FormGroup;
  ngOnInit(): void {
    this.personalDetailForm=this.fb.group({
      firstname:[''],
      lastname:[''],
      emailid:[''],
      altemailid:[''],
      phone:[''],
      altphone:[''],
      dob:[''],
      location:[''],
      });
      this.addressFormGroup=this.fb.group({
        streetadd:[''],
        streetadd2:[''],
        city:[''],
        state:[''],
        zip:[''],
        pstreetadd:[''],
        pstreetadd2:[''],
        pcity:[''],
        pstate:[''],
        pzip:[''],
      });
      this.experienceFormGroup=this.fb.group({
        cName:[''],
        jobtitle:[''],
        Edate:[''],
        location:[''],
        startdate:[''],
        enddate:['']
      });
      this.ackFormGroup=this.fb.group({
        check1:[''],
        check2:[''],
        check3:[''],
        check4:[''],
        check5:[''],
        check6:[''],
        check7:[''],
      });
  }
  onsubmit(){
    console.log(this.personalDetailForm.value);
    console.log(this.addressFormGroup.value);
    console.log(this.ackFormGroup.value);
    console.log(this.experienceFormGroup.value);
  }
  
}
