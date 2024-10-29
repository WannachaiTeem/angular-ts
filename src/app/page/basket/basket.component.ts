import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Convert as ordersCvt, Orders} from 'src/app/model/orders.model';
import { Convert as basketCvt, Basket} from 'src/app/model/basket.model';
import { NgFor } from '@angular/common';
import { EditComponent } from '../edit/edit.component';
import { Convert as menuCvt, Menu} from 'src/app/model/menu.model';
import { Convert as basCvt, Bas} from 'src/app/model/bas.model';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  basket=Array<Basket>();
  sumprice = 0;
  listm = Array<Bas>();
  sprice = Array<number>();
  oid =null;
  kasong = 15;
  sum = 0;
  j = 0;

  constructor(private dataService : DataService,private http : HttpClient,
    private dialog : MatDialog,private router : Router){
      // this.sumprice= this.dataService.sumprice
      this.basket=this.dataService.baskets;
      // console.log(this.dataService.oid.oid);
      if(this.dataService.oid !=undefined){
        this.oid=this.dataService.oid;
        console.log(this.dataService.oid);
      }


      //แสดงข้อมูลในตะกร้าของคนนั้น
      console.log(this.oid);
      http.get(dataService.apiEndpoint + "/listmenu/menubas/"+this.oid).subscribe((data : any)=>{
        this.listm = basCvt.toBas(JSON.stringify(data));
        this.dataService.listm = this.listm;
        console.log(this.listm);
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");

      for(let i=0;i<this.listm.length;i++){
        if(this.listm[i] != undefined){
          this.sumprice = this.sumprice+this.listm[i].sprice;
          console.log(this.sumprice);
        }
      }
      this.sum = this.sumprice+this.kasong;
      this.dataService.sumprice=this.sumprice;
      });


      // for(let i=1;i<this.dataService.listm;i++){
      //   if(this.dataService.listm[i] != undefined){
      //     this.sprice[i] = this.dataService.listm[i].amount * this.dataService.listm[i].price;
      //     this.dataService.sumprice =this.dataService.sumprice+this.dataService.listm[i];
      //     this.sumprice[0]= this.dataService.sumprice;
      //     console.log(this.sprice[i]);
      //   }
      // }
      // this.http.get(this.dataService.apiEndpoint + "/listmenu/"+ CID).subscribe((data : any)=>{
      //   this.InCart = CartCvt.toCart(JSON.stringify(data));
      //   console.log(this.InCart);
      // });


  }
  edit(ed:number,index :number){
    // for(let ind=this.dataService.baskets.length-1; ind>=0;ind--){
    //   if(this.dataService.listm[ind].mid==mid){
    //     this.dataService.menus = this.dataService.listm[ind] ;
    //   }
    // }

    this.dataService.listm = this.dataService.listm[index]
    this.dataService.edits=ed;
    console.log(ed);
    this.dialog.open(EditComponent,{
      minWidth : '400px',
      minHeight : '500px'
    });

  }
  del(lmid : number,i :number){
    // this.dataService.sumprice =this.dataService.sumprice-this.dataService.baskets[de].sprice;
    // this.sumprice[0]= this.dataService.sumprice
    // delete this.dataService.listm[de];
    //ลบข้อมูลในตะกร้าของคนนั้น
    this.sumprice = this.sumprice-this.listm[i].sprice;
    this.dataService.sumprice=this.sumprice
    let jsonObj = {
        loid : this.dataService.oid,
        lmid : lmid
      }
      console.log(jsonObj);
      let jsonString = JSON.stringify(jsonObj);
      this.http.post(this.dataService.apiEndpoint + "/listmenu/delete", jsonString,
      {observe: 'response'} ).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.http.get(this.dataService.apiEndpoint + "/listmenu/menubas/"+this.oid).subscribe((data : any)=>{
      this.listm = basCvt.toBas(JSON.stringify(data));
      });
        // this.http.get(this.dataService.apiEndpoint + "/listmenuBasket/1").subscribe((data : any)=>{
        //   this.listm = basCvt.toBas(JSON.stringify(data));
        //   this.dataService.listm = this.listm;
        //   console.log(this.listm);
        //   console.log(this.listm[0].mname);
        // });

    });

  }
  pay(){
     this.dialog.open(AddressComponent,{
      minWidth : '300px',
    });
  }
}
