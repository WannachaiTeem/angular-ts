import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as userCvt, User} from 'src/app/model/user.model';
import { Convert as uidoidCvt, Uidoid} from 'src/app/model/uidoid.model';
import { AddmemberComponent } from '../addmember/addmember.component';
import { ListorderComponent } from '../listorder/listorder.component';
import { LoginfailedComponent } from '../loginfailed/loginfailed.component';
import { LoginsesComponent } from '../loginses/loginses.component';
import { Convert as OrdersCvt, Orders } from 'src/app/model/orders.model';
import { Convert as ListownerCvt, Listowner} from 'src/app/model/listowner.model';
import { lastValueFrom } from 'rxjs';
import { ConaddComponent } from '../conadd/conadd.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  members = Array<User>();
  userlog : any;
  uid : any;
  sumprice=0;
  declare:any;
  adddata = false;
  kasng = 15;
  sum = 0;
  constructor(private dataService : DataService,private http : HttpClient,
    private dialogref : MatDialogRef<AddressComponent>,private dialog : MatDialog){
   this.members = dataService.members;
   this.sumprice=this.dataService.sumprice+this.kasng;
   this.sum=this.dataService.sumprice+this.kasng;

  }
  buy(name : string,phone : string,address :string,status : string){
    let numphone = phone.length
    let checknullphone ;
    console.log(numphone + "55555555555555");
    if(name == "" || address == "" || numphone != 10 || Number.isNaN(Number(phone))){
      this.adddata = true;
    }else{
    let jsonObj = {
      oname : name,
      phone : phone,
      address : address,
      sumprice : this.sumprice,
      status : status
    }
       let jsonstring = JSON.stringify(jsonObj);
       this.http.put(this.dataService.apiEndpoint + "/orders/"+this.dataService.oid,jsonstring,
        {observe: 'response'}).subscribe((data : any)=>{
          console.log("...............................................")
      console.log(this.dataService.uid.uid)
      this.http.get(this.dataService.apiEndpoint + "/orders/oid/"+this.dataService.uid.uid).subscribe((data : any)=>{
        this.uid=uidoidCvt.toUidoid(JSON.stringify(data))
        console.log( this.uid)
        this.dataService.oid = this.uid.oid;
        console.log(this.dataService.oid)
      });
        });
        this.dialog.open(ConaddComponent,{
        minWidth : '300px',
      });
      this.dialogref.close();
    // let jsonObj = {
    //   oname : name,
    //   phone : phone,
    //   address : address,
    //   sumprice : this.sumprice,
    //   status : status
    // }
      // let jsonstring = JSON.stringify(jsonObj);
      // this.getuser(name,phone,address,status)
      // this.dialog.open(ConaddComponent,{
      //   minWidth : '300px',
      // });
      // console.log("...............................................")
      // console.log(this.dataService.uid.uid)
      // this.http.get(this.dataService.apiEndpoint + "/orders/oid/"+this.dataService.uid.uid).subscribe((data : any)=>{
      //   this.uid=uidoidCvt.toUidoid(JSON.stringify(data))
      //   console.log( this.uid)
      //   this.dataService.oid = this.uid.oid;
      //   console.log(this.dataService.oid)
      // });
      // this.dialogref.close();
      // this.http.put(this.dataService.apiEndpoint + "/orders/"+this.dataService.oid,jsonstring,
      // {observe: 'response'}).subscribe((response) =>{
      //   console.log(JSON.stringify(response.status));
      //   console.log(JSON.stringify(response.body));
      //   this.dialogref.close();
      //   });

  }
  // async getuser( name : string,phone : string,address :string,status : string){
  //   let jsonObj = {
  //     oname : name,
  //     phone : phone,
  //     address : address,
  //     sumprice : this.sumprice,
  //     status : status
  //   }
  //     let jsonstring = JSON.stringify(jsonObj);
  //   let data : any = await lastValueFrom(this.http.put(this.dataService.apiEndpoint + "/orders/"+this.dataService.oid,jsonstring,
  //   {observe: 'response'}));

  // }
}
  close(){
   this.dialogref.close();
  }
}

