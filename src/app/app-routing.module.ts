import { SignupGuard } from './guards/signup.guard';
import { FooGuard } from './guards/foo.guard';
import { SignupComponent } from './signup/signup.component';
import { CreateComponent } from './foo/create/create.component';
import { UpdateComponent } from './foo/update/update.component';
import { DetailComponent } from './foo/detail/detail.component';
import { ListaComponent } from './foo/lista/lista.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RoleListComponent } from './admin/role-list/role-list.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { CreateRoleComponent } from './admin/create-role/create-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin', 'user']}},
  {path: 'admin', component: AdminComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin', 'user']}},
  {path: 'list-users', component: UserListComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin']}},
  {path: 'list-roles', component: RoleListComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin']}},
  {path: 'detail/:id', component: DetailComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin', 'user']}},
  {path: 'update/:id', component: UpdateComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin']}},
  {path: 'create', component: CreateComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin']}},
  {path: 'create-role', component: CreateRoleComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin']}},
  {path: 'create-user', component: CreateUserComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin']}},
  {path: 'signup', component: SignupComponent, canActivate: [SignupGuard]},
  {path: 'update-user', component: UpdateUserComponent, canActivate: [FooGuard], data: {requiredRoles: ['admin']}},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
