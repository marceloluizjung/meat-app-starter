import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public paymentOptions: any[] = [{label:"Dinheiro", value:"MON"},{label:"Débito", value:"DEB"}];

  constructor() { }

  ngOnInit() {
  }

}
