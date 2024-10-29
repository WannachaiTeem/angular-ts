import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as menuCvt, Menu} from 'src/app/model/menu.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Convert as basketCvt, Basket } from 'src/app/model/basket.model'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  i=1;
  ind=0;
  menu : any;
  basket1 = Array<Basket>();
  bt = Array<Basket>();
  price=0;
  addmenu = false;
  constructor(private dataService : DataService,private http : HttpClient,private dialogref : MatDialogRef<OrderComponent>){
    this.menu = this.dataService.menus;
    console.log(this.dataService.menus);
 }
 addbasket(amount :any){
  if(Number.isNaN(Number(amount))){

  }
  else if (amount <= 0){

  }
  else{
  console.log(this.dataService.oid + "99999999");
  console.log(this.addmenu);
  if(this.dataService.oid == undefined){
    this.addmenu = true;
  }
  else{
    this.menu = this.dataService.menus;
  this.price =this.menu.price*amount;
  let jsonObj = {
    loid : this.dataService.oid,
    lmid : this.menu.mid,
    price : this.price,
    amount : amount
  }
  console.log(jsonObj);
  let jsonString = JSON.stringify(jsonObj);
  this.http.put(this.dataService.apiEndpoint + "/listmenu/add", jsonString,
  {observe: 'response'} ).subscribe((response)=>{
    console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
  });
  this.dialogref.close();
  // if(this.data.baskets.length== 0 ){
  //   this.menu.amount=0;
  //   this.menu.sprice=0;
  //   this.data.baskets.push(this.menu);
  //   this.dialogref.close();
  // }


  // for(this.ind=this.data.baskets.length-1; this.ind>0;this.ind--){
  //   console.log(this.data.baskets[this.ind])
  //   console.log(this.menu.mid)
  //   if(this.data.baskets[this.ind]!=undefined){
  //     if(this.data.baskets[this.ind].mid == this.menu.mid){
  //       this.menu.amount=this.data.baskets[this.ind].amount+amount
  //       this.menu.sprice=this.menu.price*this.menu.amount;
  //       this.data.baskets.push(this.menu);
  //       delete this.data.baskets[this.ind];
  //       this.dialogref.close();
  //       break;
  //     }
  //   }
  // }
  //   // if(this.data.baskets[this.ind].mid == this.menu.mid){
  //   //     this.menu.amount=this.data.baskets[this.ind].amount+amount
  //   //     this.menu.sprice=this.menu.price*this.menu.amount;
  //   //     this.data.baskets.push(this.menu);
  //   //     delete this.data.baskets[this.ind];
  //   //     this.dialogref.close();
  //   //   }
  //   if(this.ind==0){
  //     this.menu.amount=amount;
  //     this.menu.sprice=this.menu.price*amount;
  //     this.data.baskets.push(this.menu);
  //     this.dialogref.close();
  //   }
  //   if(this.data.baskets.length== 2 ){
  //     delete this.data.baskets[0];
  //   }

  // console.log(this.data.baskets);



  // this.bt = this.data.baskets
  // console.log(this.bt);
  // this.bt = this.data.baskets
  // console.log(this.bt);


 }
  }
  }

 addn(i :number){
  this.i=i+1;
 }
 addd(i :number){
  if(i>1){
    this.i=i-1;
  }
 }
 close(){
  this.dialogref.close();
 }
}
