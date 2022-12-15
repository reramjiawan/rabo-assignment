import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loading',
    loadChildren: () => import('../feature/loading/loading.module').then((m) => m.LoadingModule),
  },
  {
    path: '',
    loadChildren: () => import('../feature/shell/shell.module').then((m) => m.ShellModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
})
export class AppRoutingModule {}
