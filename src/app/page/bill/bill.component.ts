import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as OrdersCvt, Orders } from 'src/app/model/orders.model';
import { Convert as ListownerCvt, Listowner} from 'src/app/model/listowner.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {
  orderbill = Array<Orders>();
  bill1 = Array<Listowner>();
  sprice:any;
  constructor(private dataService : DataService, private http : HttpClient,private dialog : MatDialog,private dialogref : MatDialogRef<BillComponent>){
    http.get(dataService.apiEndpoint+"/orders/bill/"+this.dataService.oidbill).subscribe((data : any) =>{
      this.orderbill = OrdersCvt.toOrders(JSON.stringify(data))
      console.log(this.orderbill)
    });
    this.http.get(this.dataService.apiEndpoint+"/listmenu/menu/"+this.dataService.oidbill).subscribe((data : any) =>{
      this.bill1 = ListownerCvt.toListowner(JSON.stringify(data))
      console.log(this.bill1)
    });
  }
  close(){
    this.dialogref.close();
    }

}
