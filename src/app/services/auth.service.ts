import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  constructor(public afAuth :AngularFireAuth ) { }
  login(email:string, password:string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email, password).
      then( userData=> resolve(userData), err=>reject(err));
    });
  }

  //check user status
  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  register(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(userData=> resolve(userData),
    err=>reject(err));
    });
  }

}
