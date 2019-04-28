import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  services={};

  constructor(private config:ConfigService) { 

  this.services=this.getServices();
  }
  ngOnInit() {
  }
 getServices()
 {
   return this.config.getConfig().services;
 }
}
