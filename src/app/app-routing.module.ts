import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, //Cuando la ruta se encuentra vacia nos manda al componente principal
  { path: 'resultado', component: ResultadoComponent }, //una vez poniendo el path de la ruta, definimos el seugndo componente que se rendizaera
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
