import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as ListownerCvt, Listowner} from 'src/app/model/listowner.model';
import { Convert as UserCvt, User} from 'src/app/model/user.model';
import { ListorderComponent } from '../listorder/listorder.component';
import { Convert as OrdersCvt, Orders } from 'src/app/model/orders.model';
import { BillComponent } from '../bill/bill.component';

@Component({
  selector: 'app-showorder',
  templateUrl: './showorder.component.html',
  styleUrls: ['./showorder.component.scss']
})
export class ShoworderComponent {
  orders1 = Array<Orders>();
  listowner1 =Array<Listowner>();
  bill : any;
  constructor(private dataService : DataService, private http : HttpClient,private dialog : MatDialog){
    console.log("ooooooooooooooooooooooooooooooooooooo")
    this.orders1=this.dataService.orders1;
    this.listowner1=this.dataService.listowner1;
    if(this.dataService.uid!=undefined){
      http.get(dataService.apiEndpoint+"/orders/showorder/"+this.dataService.uid.uid).subscribe((data : any) =>{
      this.orders1 = OrdersCvt.toOrders(JSON.stringify(data))
      console.log(this.orders1);
    });
    }
    this.http.get(this.dataService.apiEndpoint+"/listmenu/menu").subscribe((data : any) =>{
      this.listowner1 = ListownerCvt.toListowner(JSON.stringify(data))
    });
  }
  showbill(oid : number){
    this.bill=oid;
    this.dataService.oidbill=this.bill;
    this.dialog.open(BillComponent,{
      minWidth : '500px',
      minHeight: '500px',
    });


  }
}

