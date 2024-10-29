import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as OrdersCvt, Orders } from 'src/app/model/orders.model';
import { Convert as UserCvt, User} from 'src/app/model/user.model';
import { Convert as ListownerCvt, Listowner} from 'src/app/model/listowner.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  orders1 = Array<Orders>();
  users = Array<User>();
  listowner1 =Array<Listowner>();
  constructor(private dataService : DataService,private http : HttpClient,
    private dialogref : MatDialogRef<ConfirmComponent>){
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
  close(){
    this.dialogref.close();
   }


}
