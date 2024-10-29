import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Convert as uidoidCvt, Uidoid} from 'src/app/model/uidoid.model';
import { Convert as OrdersCvt, Orders } from 'src/app/model/orders.model';
import { Convert as ListownerCvt, Listowner} from 'src/app/model/listowner.model';

@Component({
  selector: 'app-conadd',
  templateUrl: './conadd.component.html',
  styleUrls: ['./conadd.component.scss']
})
export class ConaddComponent {

  constructor(private dataService : DataService,private http : HttpClient,private dialogref : MatDialogRef<ConaddComponent>){



  }
  close(){
   this.dialogref.close();
  }

}
