import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { SearchComponent } from './components/search/search.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { OwnerPropertyListComponent } from './components/owner-property-list/owner-property-list.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'view-owner-property-list', component: OwnerPropertyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
