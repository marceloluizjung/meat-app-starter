import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public formGroup: FormGroup;
  public formGroupDynamic: FormGroup;


  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      email: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
    });

    // this.formGroupDynamic = this.formBuilder.group({
    //   namedynamic: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
    //   emaildynamic: this.formBuilder.control(''),
    //   numberdynamic: this.formBuilder.control(''),
    // });
  }

  public subscribe() {
    this.formGroup.controls['name'].setValue('Este valor foi setado de forma dinâmica');
  }

}
