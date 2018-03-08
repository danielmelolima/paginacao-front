import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import 'rxjs/add/operator/map'
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import {PaginatorModule} from 'primeng/paginator';
import { PaginationComponent } from './pagination/paginacao.component';


registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    PaginatorModule
  ],
  providers: [ProductService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
