import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatExpansionModule,
  MatDialogModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {TerapieComponent} from './terapie/terapie.component';
import {RepartoComponent, DialogComponent} from './reparto/reparto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogComponent,
    RepartoComponent,
    TerapieComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  entryComponents: [DialogComponent,],
  providers: [],
  exports: [
    DialogComponent,
  ],
  bootstrap: [
    AppComponent,
    TerapieComponent,
    LoginComponent,]
})
export class AppModule {
}
