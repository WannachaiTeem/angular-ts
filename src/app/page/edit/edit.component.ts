import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Convert as basketCvt, Basket } from 'src/app/model/basket.model'
import { DataService } from 'src/app/service/data.service';
import { ConeditComponent } from '../conedit/conedit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  i=1;
  menu : any;
  basket1 = Array<Basket>();
  bt = Array<Basket>();
  price=0;
  constructor(private dataService : DataService,private router : Router,private http : HttpClient,private dialog : MatDialog,private dialogref : MatDialogRef<EditComponent>){
    this.menu = this.dataService.listm;
    console.log(this.dataService.listm);
    this.i=this.menu.amount;
 }
 edit(amount :any){
  if(Number.isNaN(Number(amount))){

  }
  else if (amount <= 0){

  }
  else{
  // for(let ind=this.data.baskets.length-1; ind>=0;ind--){
  //   if(this.data.baskets[ind].mid==this.menu.mid){
  //     this.menu.amount=amount
  //     this.menu.sprice=this.menu.price*this.menu.amount;
  //     this.data.baskets.push(this.menu);
  //     delete this.data.baskets[ind];
  //     this.dialogref.close();
  //     break;
  //   }else{
  //     this.menu.amount=amount;
  //     this.menu.sprice=this.menu.price*amount;
  //     this.data.baskets.push(this.menu);
  //     this.dialogref.close();
  //     break;
  //     }
  //   }

  this.price=this.menu.price*amount
  this.dataService.sumprice=this.price
  let jsonObj = {
    loid : this.dataService.oid,
    lmid : this.menu.lmid,
    price : this.price,
    amount : amount
  }
  console.log(jsonObj);
  let jsonString = JSON.stringify(jsonObj);
  this.http.put(this.dataService.apiEndpoint + "/listmenu", jsonString,
  {observe: 'response'} ).subscribe((response)=>{
    console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
  });
  this.dialogref.close();
    console.log(this.dataService.sumprice);

    this.dialog.open(ConeditComponent,{
      minWidth : '300px',
    });

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
