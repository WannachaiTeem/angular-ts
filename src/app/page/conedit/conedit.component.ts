import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-conedit',
  templateUrl: './conedit.component.html',
  styleUrls: ['./conedit.component.scss']
})
export class ConeditComponent {
  constructor(private dataService : DataService,private dialog : MatDialog,private dialogref : MatDialogRef<ConeditComponent>){

 }
 close(){
  this.dialogref.close();
 }
}
