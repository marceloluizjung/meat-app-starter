import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      email: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
    });
  }

  public subscribe() {
    console.log(this.formGroup);
    debugger;
  }

}
