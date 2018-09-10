import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DeltaComponent } from './delta/delta.component';
import { SolveComponent } from './solve/solve.component';
export const routes: Routes =
[{path:'delta/:a/:b/:c',component:DeltaComponent},
{path:'solve/:a/:b/:d/:z',component:SolveComponent},]

@NgModule({
  declarations: [
    AppComponent,
    DeltaComponent,
    SolveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
