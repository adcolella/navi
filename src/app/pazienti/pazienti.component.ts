import {Component, ElementRef, OnInit, ViewChild, AfterViewChecked, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {initializeApp, database} from 'firebase';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {any} from 'codelyzer/util/function';

interface Paziente {
  nome: string,
  sesso: string,
  id: string,
  malattia: string,
  nota: string,
  endDate: string,
  terapia: [
    {
      data: string,
      nota: string
    }
    ]

};

@Component({
  selector: 'app-pazienti',
  templateUrl: './pazienti.component.html',
  styles: [`

    .box {
      margin-top: 20px;
      width: 80%;
      margin-left: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    }

    .example-container {
      width: 60%;
      margin: 20px;
      padding: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .mat-form-field {
      display: block;
    }

  `]
})


export class PazientiComponent implements OnInit {

  public pazienti: Observable<any[]>;
  public pazientiArray: AngularFireList<any[]>;
  displayedColumns = ['nome', 'malattia', 'fine', 'nota'];

  public newPaziente: any = {};

  constructor(public db: AngularFireDatabase) {

    this.pazienti = db.list('/pazienti').valueChanges();
    this.pazientiArray = db.list('/pazienti');
  }


  ngOnInit() {


  }

  salva(nome, sesso, malattia, data, nota) {

    this.newPaziente.nome = nome;
    this.newPaziente.nome = nome;
    this.newPaziente.sesso = sesso;
    this.newPaziente.malattia = malattia;
    this.newPaziente.endDate = data;
    this.newPaziente.nota = nota;
    this.newPaziente.terapia = [
      {
        data: '11-03-2018',
        nota: 'pillola blu'
      },
      {
        data: '10-03-2018',
        nota: 'pillola blu'
      },
      {
        data: '09-03-2018',
        nota: 'pillola rossa'
      }
    ];


    this.pazientiArray.push(this.newPaziente);
    console.log(this.newPaziente);
    //console.log(this.pazientiArray);
  }

}




