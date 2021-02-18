import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  constructor(private route: Router) { }

  
  ngOnInit(): void {
  }
  onCreate() {

  }
  cancel() {
    this.route.navigate(['/list-roles'])
  }

}
