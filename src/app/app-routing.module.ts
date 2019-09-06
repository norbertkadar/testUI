import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './components/users/users-list/users-list.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuardService} from './components/guards/auth-guard.service';
import {RegisterComponent} from './components/register/register.component';
import {PackagesListComponent} from './components/packages-cmp/packages-list/packages-list.component';
import {PackagesAddComponent} from './components/packages-cmp/packages-add/packages-add.component';
import {PackagesCmpComponent} from './components/packages-cmp/packages-cmp.component';
import {PackagesUpdateComponent} from './components/packages-cmp/packages-update/packages-update.component';
import {DestinatariListComponent} from './components/packages-cmp/destinatari-list/destinatari-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/#', pathMatch: 'full'},
  {path: 'users', canActivate: [AuthGuardService], component: UsersListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'packages', canActivate: [AuthGuardService], component: PackagesCmpComponent},
  {path: 'packages/add', canActivate: [AuthGuardService], component: PackagesAddComponent},
  {path: 'package/update/:id', canActivate: [AuthGuardService], component: PackagesUpdateComponent},
  {path: 'package/destinatari', canActivate: [AuthGuardService], component: DestinatariListComponent},
];

@NgModule({

  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
