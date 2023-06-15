import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-onboarding',
  templateUrl: './post-onboarding.component.html',
  styleUrls: ['./post-onboarding.component.css']
})
export class PostOnboardingComponent implements OnInit{
 formData=new FormData();
 selectedPhotoFile:File|null=null;
 photoImageUrl:string|null=null;
 selectedAadharFile:File|null=null;
 adharImageUrl:string|null=null;
 selectedPassportFile:File|null=null;
 passportImageUrl:string|null=null;
 upPhoto:boolean=false;
 upAadhar:boolean=false;
 upPassport:boolean=false;
 constructor(private fb:FormBuilder){}
 documentForm!:FormGroup;
 ngOnInit(): void {
    this.documentForm=this.fb.group({
      personalPhoto:[''],
      adharCard:[''],
      pasport:['']     
    })
 }
 
 onPhotoFileSelected(event: any){
  this.selectedPhotoFile=event.target.files[0] as File;
  this.photoImageUrl=URL.createObjectURL(this.selectedPhotoFile);
 }
 onAadharFileSelected(event: any){
  this.selectedAadharFile=event.target.files[0] as File;
  this.adharImageUrl=URL.createObjectURL(this.selectedAadharFile);
 }
 onPassportFileSelected(event: any){
  this.selectedPassportFile=event.target.files[0] as File;
  this.passportImageUrl=URL.createObjectURL(this.selectedPassportFile);
 }
 uploadPhoto(){ 
  this.formData.append('photo',this.selectedPhotoFile as File);
  this.upPhoto=true;
  console.log(this.formData.get('photo'));  
 }
 uploadAadhar(){ 
  this.formData.append('aadhar',this.selectedAadharFile as File);
  this.upAadhar=true;
  console.log(this.formData.get('aadhar'));  
 }
 uploadPassport(){ 
  this.formData.append('passport',this.selectedPassportFile as File);
  this.upPassport=true;
  console.log(this.formData.get('passport'));  
 }

}
