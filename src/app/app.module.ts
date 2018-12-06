import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PropertyComponent } from './components/property/property.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { SearchComponent } from './components/search/search.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { OwnerPropertyListComponent } from './components/owner-property-list/owner-property-list.component';
import { PropertyService } from './services/property.service';
<<<<<<< HEAD
=======
import { AngularFireStorageModule } from '@angular/fire/storage';
>>>>>>> c8417688928ee2b81fd7532beb24f26fc9e16434
import { SearchListComponent } from './components/search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyComponent,
    RegisterComponent,
    AccountComponent,
    SearchComponent,
    AddPropertyComponent,
    OwnerPropertyListComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AccountService, AuthService, PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
