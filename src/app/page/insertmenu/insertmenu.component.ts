import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { AddmemberComponent } from '../addmember/addmember.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Convert as menuCvt, Menu} from 'src/app/model/menu.model';
import { Convert as typeCvt, Type} from 'src/app/model/type.model';



@Component({
  selector: 'app-insertmenu',
  templateUrl: './insertmenu.component.html',
  styleUrls: ['./insertmenu.component.scss']
})
export class InsertmenuComponent {
  menutype = Array<Type>();
  insertmenu = false;
  constructor(private dataService : DataService,private http : HttpClient,
    private dialogref : MatDialogRef<AddmemberComponent>){

      http.get(dataService.apiEndpoint + "/type").subscribe((data : any)=>{
        this.menutype = typeCvt.toType(JSON.stringify(data));
        console.log(this.menutype);
      });

  }
  addmenu(name :string,price : string,url : string,tid : number ){
    if(name =="" || price ==""){
      this.insertmenu = true;
    }else{
    let jsonObj = {
       mname : name,
       price : Number(price),
       image : url,
       mtid : tid
     }
     console.log(tid);
     let jsonstring = JSON.stringify(jsonObj);
     this.http.post(this.dataService.apiEndpoint + "/menu",jsonstring,
     {observe: 'response'}).subscribe((response) =>{
       console.log(JSON.stringify(response.status));
       console.log(JSON.stringify(response.body));
       this.dialogref.close();
     });
    }
  }
   close(){
    this.dialogref.close();
   }
}
