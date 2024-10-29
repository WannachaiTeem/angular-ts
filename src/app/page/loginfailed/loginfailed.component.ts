import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-loginfailed',
  templateUrl: './loginfailed.component.html',
  styleUrls: ['./loginfailed.component.scss']
})
export class LoginfailedComponent {
  constructor(private dialog : MatDialog,private dialogref : MatDialogRef<LoginfailedComponent>){
  }
  login(){
    this.dialog.open(LoginComponent,{
      minWidth : '300px',
      maxHeight : '400px',
    });
    this.dialogref.close();
  }
  close(){
    this.dialogref.close();
   }
}
