import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-severs',
  templateUrl: './severs.component.html',
  styleUrls: ['./severs.component.css'],
})
export class SeversComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testServer';
  serverCreated = false;
  servers = ['testServer ', 'testServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Server Name is ${this.serverName}`;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
