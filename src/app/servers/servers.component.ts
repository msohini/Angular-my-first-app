import { Component, OnInit } from '@angular/core';

import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isEmpty = true;
  allownewserver = false;
  servercreationstatus = 'No server was created!';
  servername = 'Hello';
  servercreated = false;
  servers = ['testserver','testserver 2']
  username = '';
  constructor() {
    setTimeout(() => {
      this.allownewserver = true;
    }, 2000);
   
  }
  
  ngOnInit() {
    
  }
  onCreateServer() {
    this.servercreated = true;
    this.servers.push(this.servername);
      this.servercreationstatus = 'Server was created! Nme is ' + this.servername;
  }
  onupdateservername(event: any) {
    //console.log(event);
    this.servername = event.target.value;

  }
  onClick() {
    this.username = '';
  }
}
