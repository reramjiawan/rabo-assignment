import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoadingProgressComponent } from './loading-progress/loading-progress.component';
import { LoadingRoutingModule } from './loading-routing.module';
import { LoadingViewComponent } from './loading-view/loading-view.component';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [LoadingProgressComponent, LoadingViewComponent],
  imports: [LoadingRoutingModule, SharedModule],
  providers: [LoadingService],
})
export class LoadingModule {}
