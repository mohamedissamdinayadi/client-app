import { Component, OnInit } from '@angular/core';
import { ClientService} from '../../services/client.service';
import { Client } from '../../models/client';
import { Router , ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id:string;
  client:Client;
  hasBalance:boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    public  clientService: ClientService,
    public router :Router,
    public route: ActivatedRoute,
    public   flashMessagesService: FlashMessagesService
    
  ) { 

  }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client =>{
      if(client.balance>0)
      { 
        this.hasBalance=true;
      }
      this.client=client;
      console.log(this.client);
    })
  }
updateBalance(id:string){
  this.clientService.updateClient(this.id, this.client);
  this.flashMessagesService.show('balance updated' , {cssClass:'alert-success' , timout:4000});
  this.router.navigate(['/client/'+ this.id]);
}
onDeleteClick(id:string){
  if(confirm("are you sure to delete?")){
    this.clientService.deleteClient(this.id);
    this.flashMessagesService.show('client deleted' , {cssClass:'alert-success' , timout:4000});
    this.router.navigate(['/']);
  }

}

}
