import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatExpansionModule,
  MatDialogModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatNativeDateModule,

} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {TerapieComponent} from './terapie/terapie.component';
import {RepartoComponent, DialogComponent} from './reparto/reparto.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorage, AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {PazientiComponent} from './pazienti/pazienti.component';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MomentModule } from 'angular2-moment';
import {CalendarComponent} from 'ap-angular2-fullcalendar/src/calendar/calendar';
import {MyCalendarComponent} from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogComponent,
    RepartoComponent,
    PazientiComponent,
    CalendarComponent,
    MyCalendarComponent,
    TerapieComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MomentModule,
    MatNativeDateModule,
    MatTableModule,
    MatFormFieldModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule,
  ],
  entryComponents: [DialogComponent, ],
  providers: [AngularFirestore,
    AngularFireDatabase,
    AngularFireStorage],
  exports: [
    DialogComponent,
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule {
}
