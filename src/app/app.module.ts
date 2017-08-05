import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule,Routes }   from '@angular/router';

import {HeroService} from './hero.service';

import { AppRoutingModule }     from './app-routing.module';


import { AppComponent} from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent} from './hero-list.component';
import { DashboardComponent} from './dashboard.component';
import { D3DemoComponent} from './d3-demo.component';
import { BarGraph } from './bar-graph';





@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent,
    D3DemoComponent,
    BarGraph,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],

})
export class AppModule { }
