import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[ `
.online{color:white;}
`]
})


export class ServerComponent {
  serverId = 10;
  serverStatus = 'Offline';
  constructor() {
    this.serverStatus = Math.random()> 0.5 ?'Online':'Óffline';
}
  getstatus() {
    return this.serverStatus;
  }
  getcolor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
