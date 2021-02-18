import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './foo/lista/lista.component';
import { DetailComponent } from './foo/detail/detail.component';
import { CreateComponent } from './foo/create/create.component';
import { UpdateComponent } from './foo/update/update.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RoleListComponent } from './admin/role-list/role-list.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { CreateRoleComponent } from './admin/create-role/create-role.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListaComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
    SignupComponent,
    UserListComponent,
    AdminComponent,
    RoleListComponent,
    CreateUserComponent,
    CreateRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:9090/foo'],
          sendAccessToken: true
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
