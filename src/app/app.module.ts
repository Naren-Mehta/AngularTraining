import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConverterPipe } from './pipes/converter.pipe';
import { CartComponent } from './components/cart/cart.component';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './components/forms/model-driven/model-driven.component';
import { ShowErrorComponent } from './components/forms/show-error/show-error.component';
import { CalendarDirective } from './drectives/calendar.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    CurrencyComponent,
    ConverterPipe,
    CartComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ShowErrorComponent,
    CalendarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
