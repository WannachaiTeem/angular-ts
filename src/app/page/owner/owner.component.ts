import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as ListownerCvt, Listowner} from 'src/app/model/listowner.model';
import { Convert as UserCvt, User} from 'src/app/model/user.model';
import { ListorderComponent } from '../listorder/listorder.component';
import { Convert as OrdersCvt, Orders } from 'src/app/model/orders.model';
import { BillComponent } from '../bill/bill.component';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
  users = Array<User>();
  orders1 = Array<Orders>();
  listowner1 =Array<Listowner>();
  bill:any;
  kasong = 15;
  sum = 0;
  constructor(private dataService : DataService, private http : HttpClient,private dialog : MatDialog){
    http.get(dataService.apiEndpoint+"/user/status/0").subscribe((data : any) =>{
      this.users = UserCvt.toUser(JSON.stringify(data))
      console.log(this.users);
    });
    http.get(dataService.apiEndpoint+"/orders/owner").subscribe((data : any) =>{
      this.orders1 = OrdersCvt.toOrders(JSON.stringify(data))
      console.log(this.orders1);
    });
    this.http.get(this.dataService.apiEndpoint+"/listmenu/menu").subscribe((data : any) =>{
      this.listowner1 = ListownerCvt.toListowner(JSON.stringify(data))
  });
  }
  listorder(){
    this.dialog.open(ListorderComponent,{minWidth:'300px',
    });
  }
  listmenu(oid :any){
    this.http.get(this.dataService.apiEndpoint+"/listmenu/menu/"+ oid ).subscribe((data : any) =>{
      this.listowner1 = ListownerCvt.toListowner(JSON.stringify(data))
  });
  }

  updatestatus(oid :number,status : string){
    let jsonObj = {
      oid : oid,
      status : status,
     }
     let jsonstring = JSON.stringify(jsonObj);
     this.http.put(this.dataService.apiEndpoint + "/orders/status/"+oid,jsonstring,
     {observe: 'response'}).subscribe((response) =>{
       console.log(JSON.stringify(response.status));
       console.log(JSON.stringify(response.body));
       this.http.get(this.dataService.apiEndpoint+"/orders/owner").subscribe((data : any) =>{
        this.orders1 = OrdersCvt.toOrders(JSON.stringify(data))
        console.log(this.orders1);
      });
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
  //หน้าเพิ่มconfirm
  confirm(){
    this.dialog.open(ConfirmComponent,{
      minWidth : '300px',
    });
  }
}
