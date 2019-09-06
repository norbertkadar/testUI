import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import {UserService} from './shared/services/user.service';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './shared/services/auth.service';
import {TokenInterceptor} from './components/interceptors/token.interceptor';
import {AuthGuardService} from './components/guards/auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { LoggedUserComponent } from './components/logged-user/logged-user.component';
import { PackagesCmpComponent } from './components/packages-cmp/packages-cmp.component';
import { PackagesAddComponent } from './components/packages-cmp/packages-add/packages-add.component';
import { PackagesListComponent } from './components/packages-cmp/packages-list/packages-list.component';
import {PackageService} from './shared/services/package.service';
import { PackagesUpdateComponent } from './components/packages-cmp/packages-update/packages-update.component';
import { DestinatariListComponent } from './components/packages-cmp/destinatari-list/destinatari-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UsersListComponent,
    LoginComponent,
    RegisterComponent,
    LoggedUserComponent,
    PackagesCmpComponent,
    PackagesAddComponent,
    PackagesListComponent,
    PackagesUpdateComponent,
    DestinatariListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    UserService, AuthService, AuthGuardService, PackageService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
