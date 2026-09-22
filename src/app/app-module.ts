import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEvent } from './bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './bai13/service-product-image-event-detail/service-product-image-event-detail';
import { Catalog } from './bai14/catalog/catalog';
import { Customer } from './bai18/customer/customer';

@NgModule({
  declarations: [App, ServiceProductImageEvent, ServiceProductImageEventDetail, Catalog, Customer],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()
  ],
  bootstrap: [App],
})
export class AppModule { }
