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
import {AppComponent, DialogComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {TerapieComponent} from './terapie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogComponent,
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
    DialogComponent,],
  bootstrap: [
    AppComponent,
    TerapieComponent,
    LoginComponent,]
})
export class AppModule {
}
