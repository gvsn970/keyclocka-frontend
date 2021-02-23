import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  wid =0;
  data: any;
  resultData: any;
  name: any;
  email: any;
  
  constructor(   public fb: FormBuilder,public apiService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
    
      name:['',Validators.required],
      email:['',Validators.required]
      
      })
   

      //debugger
    this.route.queryParams.subscribe(params => {
      console.log(params.id)
      this.wid = params.id;
      this.apiService.getuserbyId(this.wid).subscribe((data: any = {}) => {
        this.resultData=data;

        console.log(this.resultData);
        this.name=this.resultData.name
        this.email=this.resultData.email
        console.log(this.name);
        this.userForm = this.fb.group({
          name: [this.name, [Validators.required,Validators.minLength(3),Validators.maxLength(25), ]],   
          email: [this.email, [Validators.required]],
          })
   
  
})
})




}
get myForm() {
  return this.userForm.controls;
}
onSubmit() {
  this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      console.log(this.userForm.value)
      var data = {
        "id": this.wid,
        "name": this.userForm.value.name,
        "email": this.userForm.value.email,
        
        }
        console.log(data);
        this.apiService.updateUser(this.wid, data).subscribe(
          data => {
            console.log(data)
         
          },
          error => {
            console.log(data)
          });



    }}

  }