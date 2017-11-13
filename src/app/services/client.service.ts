
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated' ; 
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

 
 

constructor(
  public af:AngularFireDatabase
) { 
  this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
}

getClients(){
  return this.clients;
}
newClient(client:Client ){
  this.clients.push(client);
}

getClient(id:String){
  this.client =this.af.object('/clients/'+id)as FirebaseObjectObservable<Client> ;
  return this.client ;  

   
}
}