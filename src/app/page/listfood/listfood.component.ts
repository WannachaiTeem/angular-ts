import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as menuCvt, Menu} from 'src/app/model/menu.model';
import { Convert as typeCvt, Type} from 'src/app/model/type.model';
import { OrderComponent } from '../order/order.component';
import { Router } from '@angular/router';
import { InsertmenuComponent } from '../insertmenu/insertmenu.component';



@Component({
  selector: 'app-listfood',
  templateUrl: './listfood.component.html',
  styleUrls: ['./listfood.component.scss']
})
export class ListfoodComponent {
    menus = Array<Menu>();
    types = Array<Type>();
    ustatus = 3;
    constructor(public dataService : DataService,private http : HttpClient,
                private dialog : MatDialog,private router : Router){
                this.ustatus = this.dataService.ustatus;
      http.get(dataService.apiEndpoint + "/menu").subscribe((data : any)=>{
        this.menus = menuCvt.toMenu(JSON.stringify(data));
        console.log(this.menus);
      });

      http.get(dataService.apiEndpoint + "/type").subscribe((data : any)=>{
        this.types = typeCvt.toType(JSON.stringify(data));
        console.log(this.types);
      });
      console.log(this.dataService.uid)
    }
    //เพิ่มเมนู
    addmenu(){
      this.dialog.open(InsertmenuComponent,{
        minWidth : '500px',
        minHeight : '500px',
      });
    }
    //หน้าตะกร้า
    addNewOrder(menu : any){
      this.dataService.menus = menu;
      this.dialog.open(OrderComponent,{
        minWidth : '400px',
        minHeight : '480px',
      });
    }
    //อาหารทั้งหมด
    findTypeAll(){
      this.http.get(this.dataService.apiEndpoint + "/menu")
      .subscribe(data => {
        this.menus = menuCvt.toMenu(JSON.stringify(data));
      });
    }
    //อาหารแต่ละประเภท
    findByType(type : string){
      this.http.get(this.dataService.apiEndpoint + "/menu/type/" + type)
      .subscribe(data => {
        this.menus = menuCvt.toMenu(JSON.stringify(data));
      });
    }
    //ค้นหาอาหาร
    SearchMenu(name : any){
      this.http.get(this.dataService.apiEndpoint + "/menu/menus/" + name)
      .subscribe(data => {
        this.menus = menuCvt.toMenu(JSON.stringify(data));
      });
    }
}
