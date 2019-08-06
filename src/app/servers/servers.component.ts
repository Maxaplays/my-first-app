import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',
  templateUrl: './servers.component.html',
/*  template: `
    <app-server></app-server>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatorStatus = 'no server created';
  serverName = 'Test';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatorStatus = 'server ' + this.serverName + ' was created';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
