import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
social:{};
  constructor(private config : ConfigService) { 
this.social=this.getIcons();
  }
  ngOnInit() {
  }
getIcons()
{
  return this.config.getConfig().social;
}
}
