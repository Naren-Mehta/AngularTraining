import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { TemplateDrivenComponent } from 'src/app/components/forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from 'src/app/components/forms/model-driven/model-driven.component';
import { DynamicFormsComponent } from 'src/app/components/forms/dynamic-forms/dynamic-forms.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class NppRoutingModule { }
