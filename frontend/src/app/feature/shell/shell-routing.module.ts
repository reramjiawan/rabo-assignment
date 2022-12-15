import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellViewComponent } from './shell-view/shell-view.component';

const routes: Routes = [
  {
    path: '',
    component: ShellViewComponent,
    children: [
      {
        path: 'transaction',
        loadChildren: () => import('../transaction/transaction.module').then((m) => m.TransactionModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ShellRoutingModule {}
