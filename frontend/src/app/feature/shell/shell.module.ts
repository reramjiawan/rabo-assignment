import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellViewComponent } from './shell-view/shell-view.component';
import { ShellToolbarComponent } from './shell-toolbar/shell-toolbar.component';

@NgModule({
  declarations: [ShellViewComponent, ShellToolbarComponent],
  imports: [SharedModule, ShellRoutingModule],
})
export class ShellModule {}
