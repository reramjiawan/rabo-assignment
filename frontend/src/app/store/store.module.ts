import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule as NgStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityStoreModule } from './entity/entity-store.module';

@NgModule({
  imports: [
    NgStoreModule.forRoot({
      router: routerReducer,
    }),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    EntityStoreModule,
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class StoreModule {}
