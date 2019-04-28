import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footer={ };
  constructor(private config: ConfigService) {
  this.footer=this.getFooter();
   }

  ngOnInit() {
  }
 getFooter()
 {
   return this.config.getConfig().footer;
 }
}
