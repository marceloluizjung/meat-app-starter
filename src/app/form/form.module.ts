import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormComponent } from './form.component';
import { ROUTES } from './form.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [ReactiveFormsModule],
  exports: [RouterModule]
})
export class FormModule { }
