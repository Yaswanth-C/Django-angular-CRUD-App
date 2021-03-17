import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewDataComponent } from './view-data/view-data.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    ViewDataComponent,
    ManageDataComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
