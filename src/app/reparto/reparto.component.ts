import {Component, ElementRef, OnInit, ViewChild, AfterViewChecked, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { initializeApp, database } from 'firebase';

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
  selector: 'app-reparto',
  templateUrl: './reparto.component.html'
})
export class RepartoComponent implements OnInit {
  baseRoot = 'https://adcolella.github.io/navi/';
  public pazienti: Paziente[] = [];
  public root: any;

  constructor(public dialog: MatDialog) {

    // Initialize Firebase
 /*   var config = {
      apiKey: "AIzaSyAzceSb_Y932ZVgvn7dBJ1t-N2x4fuo8So",
      authDomain: "navi-e7fdb.firebaseapp.com",
      databaseURL: "https://navi-e7fdb.firebaseio.com",
      projectId: "navi-e7fdb",
      storageBucket: "navi-e7fdb.appspot.com",
      messagingSenderId: "511520597969"
    };
    initializeApp(config);

    this.root = database().ref();
*/


  }


  ngOnInit() {
    /*
    this.root.on( 'value', function(snap){

      console.log(snap.val());
    });
*/


    /*   let pippo: Paziente;
       pippo = {

         nome: 'Pippo Verdi',
         sesso: 'M',
         id: '001',
         malattia: 'cirrosi',
         nota: 'scalmanato',
         endDate: '12-03-2018',
         terapia: [
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
         ]
       }
       let pippa: Paziente;
       pippa = {
         nome: 'Pippa Bianchi',
         sesso: 'F',
         id: '002',
         malattia: 'Diabete',
         nota: 'cessa',
         endDate: '20-03-2018',
         terapia: [
           {
             data: '10-03-2018',
             nota: 'pillola blu'
           },
           {
             data: '15-03-2018',
             nota: 'pillola blu'
           },
           {
             data: '19-03-2018',
             nota: 'pillola rossa'
           }
         ]
       }

       this.pazienti.push(pippo);
       this.pazienti.push(pippa);*/

  }

  openDialog(paziente): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',

      data: { paziente: paziente}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}


@Component({
  selector: 'app-dialog',
  template: `
    <div> <strong>Paziente</strong> </div>
    <div><p>{{data.paziente.nome}}</p></div>
    <div><p>{{data.paziente.malattia}}</p></div>
    <button (click)="close()">close</button>`,
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close(): void {
    this.dialogRef.close();
  }

}

