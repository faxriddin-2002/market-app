import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HeaderComponent } from './header/header.component';
import { RenderComponent } from './render/render.component';
import { RightComponent } from './right/right.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {FormsModule } from '@angular/forms';


const firs =[
  {path:"render", component: RenderComponent},
  {path:"right", component: RightComponent},
  {path: "order-status", component: OrderStatusComponent},
  {path: "add-order", component: AddOrderComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HeaderComponent,
    RenderComponent,
    RightComponent,
    OrderStatusComponent,
    AddOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(firs),
    NgModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
