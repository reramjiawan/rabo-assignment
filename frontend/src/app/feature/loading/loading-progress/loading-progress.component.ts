import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontend-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.scss'],
})
export class LoadingProgressComponent {
  @Input()
  progress = 0;
}
