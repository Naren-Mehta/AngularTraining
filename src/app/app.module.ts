import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CalendarDirective } from './directives/calendar.directive';
import { DynamicFormsComponent } from './components/forms/dynamic-forms/dynamic-forms.component';
import { UserDataService } from './services/user-data.service';

import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { CartService } from './services/cart.service';
import { CurrencyService } from './services/currency.service';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';



const routes: Routes = [
  {path:'', redirectTo:'/products', pathMatch:'full'},
  { path: 'products', component: ProductListComponent },
  { path: 'cart',      component: CartComponent },
  {path:'forms', canActivate:[AuthGuard],children:[
    {path:'template',component:TemplateDrivenComponent},
    {path:'model/:name',component:ModelDrivenComponent},
    {path:'dynamic',component:DynamicFormsComponent}
  ]}

  // {path:'**', component: ErrorCompo}
]


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
    CalendarDirective,
    DynamicFormsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CartService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
