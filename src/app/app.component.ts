import {Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  public pazienti: Paziente[] = [];

  panelOpenState: boolean = false;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    let pippo: Paziente;
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
    this.pazienti.push(pippa);

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
