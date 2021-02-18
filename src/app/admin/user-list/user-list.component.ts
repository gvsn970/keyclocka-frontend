import { Component, OnInit } from '@angular/core';
import { Foo } from 'src/app/models/foo';
import { FooService } from 'src/app/services/foo.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private fooService: FooService, private loginService: LoginService) { }
  isAdmin: boolean;
  ngOnInit(): void {
    this.loaduserFromAdmin();
    this.isAdmin = this.loginService.getIsAdmin();
  }

  userFlag:boolean=false;
  userList:any=[];
  loaduserFromAdmin(){
    this.fooService.listFromAdminUsers().subscribe(
      (res)=>{
        this.userFlag=true;
        this.userList=res;
        console.log(this.userList)
      },(error)=>{
        console.log(error)
      }
    );

    
  }
}
