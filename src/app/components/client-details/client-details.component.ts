import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router , ActivatedRoute , Params}from '@angular/router';
import {  Client } from '../../models/client';
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id:string;
  client:Client;
  balance:boolean=false;
  showBalaceUpdateInput:boolean=false;

  constructor(
    public clientService:ClientService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService
  )
   { }

  ngOnInit() {
    //get id :D 
      this.id=this.route.snapshot.params['id'];
        //get client
        this.clientService.getClient(this.id).subscribe(client =>{
          if(client.balance >0){
            this.balance=true; 
          }
          this.client = client;
          console.log(this.client);
          
        });
        
  }

}
