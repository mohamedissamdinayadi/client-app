import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

 
//import firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';



import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
 
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
 //service import
import {ClientService} from './services/client.service';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';


  const appRoutes: Routes = [
    {path:'', component:DashboardComponent},
    {path:'register', component:RegisterComponent}, 
    {path:'login', component:LoginComponent},
    {path:'add-client', component:AddClientComponent},
    {path:'client/:id', component:ClientDetailsComponent }
  ];
  export const firebaseConfig = {
    apiKey: "AIzaSyC4620MLk7z-q8EwPik0Mclp_iarzneDjM",
    authDomain: "clientpanel-28224.firebaseapp.com",
    databaseURL: "https://clientpanel-28224.firebaseio.com",
     storageBucket: "clientpanel-28224.appspot.com",
    messagingSenderId: "944597211392"
    }
    
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    ClientsComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    FlashMessagesModule
 
     
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }