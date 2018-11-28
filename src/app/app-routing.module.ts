import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './components/inicial/inicial.component';
import { ReservasComponent } from './components/reservas/reservas.component';

const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];



export const ROUTES = RouterModule.forRoot(routes);