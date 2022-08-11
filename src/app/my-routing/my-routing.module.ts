import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from '../compose-message/compose-message.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((module) => module.AdminModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'crisis-center',
    loadChildren: () =>
      import('../crisis/crisis.module').then((m) => m.CrisisModule),
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', redirectTo: '/heroes' },
  { path: 'compose', outlet: 'popup', component: ComposeMessageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // faccio il preload di tutti i moduli
  ],
  exports: [RouterModule],
})
export class MyRoutingModule {}
