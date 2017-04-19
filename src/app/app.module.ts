import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { AngmaterialComponent } from './angmaterial/angmaterial.component';
import { ModalpracticeComponent, DialogOverviewExampleDialog } from './modalpractice/modalpractice.component';
import { ProgressbarpracticeComponent } from './progressbarpractice/progressbarpractice.component';
import { InputformComponent } from './inputform/inputform.component';
import { CounterComponent } from './counter/counter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    AngmaterialComponent,
    ModalpracticeComponent,
    DialogOverviewExampleDialog,
    ProgressbarpracticeComponent,
    InputformComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({counter: counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
       DialogOverviewExampleDialog
   ]
})
export class AppModule { }
