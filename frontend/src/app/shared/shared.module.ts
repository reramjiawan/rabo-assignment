import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  exports: [CommonModule, IonicModule, PipeModule, RouterModule, HttpClientModule],
})
export class SharedModule {}
