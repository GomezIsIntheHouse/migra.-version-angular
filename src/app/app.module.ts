import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms' //paso 1

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app-routing.module'



import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule //complemento paso 1


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
