import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: any;
  @Input() errorMessage: string;
  input: any;

  @ContentChild(NgModel) model: NgModel;


  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit(){
    this.input = this.model;
    if(this.input === undefined) { 
      debugger;
      console.log("Precisa da diretiva ngModel");
    }
  }

}
