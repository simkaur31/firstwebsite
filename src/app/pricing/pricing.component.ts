import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  pricing={};

  constructor(private config:ConfigService) { 
    this.pricing=this.getPricing();
  }

  ngOnInit() {
  }
getPricing()
{
  return this.config.getConfig().pricing;
}
}
