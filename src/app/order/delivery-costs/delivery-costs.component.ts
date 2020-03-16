import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() public delivery: number;
  @Input() public itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  public total(): Number {
    return this.delivery + this.itemsValue;
  }

}
