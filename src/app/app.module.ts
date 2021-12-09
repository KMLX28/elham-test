import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchInputComponent} from './components/search-input/search-input.component';
import {SortToggleComponent} from './components/sort-toggle/sort-toggle.component';
import {HeroesTableComponent} from './components/heroes-table/heroes-table.component';
import {HttpClientModule} from "@angular/common/http";
import {StarsPipe} from './pipes/stars.pipe';
import {FormsModule} from "@angular/forms";
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../environments/environment';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SortToggleComponent,
    HeroesTableComponent,
    StarsPipe,
    HeroComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
