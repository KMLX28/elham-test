import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {HeroesComponent} from "./pages/heroes/heroes.component";

const routes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'hero/:name', component: HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
