import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-loginses',
  templateUrl: './loginses.component.html',
  styleUrls: ['./loginses.component.scss']
})
export class LoginsesComponent {
  status = 1;
  constructor(private dialog : MatDialog,private dataService : DataService,private dialogref : MatDialogRef<LoginsesComponent>){
    this.status=this.dataService.ustatus;
    this.dataService.log=true;

  }
  close(){
    this.dialogref.close();
   }
}
