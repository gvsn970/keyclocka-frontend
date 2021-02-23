import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  constructor(
    public fb: FormBuilder,
    private apiService: UserService

  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25), ]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25),]],
      username: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25),]],
      })
  }
  


  get myForm(){
    return this. userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this. userForm.valid) {
      return false;
    } else {
      this.apiService.addUser(this.
        userForm.value).subscribe(
        (res) => {    
           this.submitted = false;
           
        }, (error) => {
          console.log(error);
        });
    }
  }




}

