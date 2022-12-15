import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '../ionic/ionic.module';
import { StoreModule } from '../store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, StoreModule, IonicModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
