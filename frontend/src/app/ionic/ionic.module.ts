import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule as NgIonic, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  imports: [NgIonic.forRoot({ mode: 'md' })],
  exports: [NgIonic],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class IonicModule {}
