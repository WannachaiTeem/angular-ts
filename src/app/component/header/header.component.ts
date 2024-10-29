import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as UserCvt, User} from 'src/app/model/user.model';
import { LoginComponent } from 'src/app/page/login/login.component';
import { ListfoodComponent } from 'src/app/page/listfood/listfood.component';
import { Convert as menuCvt, Menu} from 'src/app/model/menu.model';
import { Convert as typeCvt, Type} from 'src/app/model/type.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  members = Array<User>();
  menus = Array<Menu>();
  types2 = Array<Type>();
  ustatus = 3;
  slog = false;
  constructor(public dataService : DataService,private http : HttpClient,
    private dialog : MatDialog,private router : Router){
     this.slog = this.dataService.log;
     this.ustatus = this.dataService.ustatus;
     console.log(this.ustatus);
  }
  login(){
    this.dialog.open(LoginComponent,{
      minWidth : '300px',
      minHeight : '400px',
    });
  }
  logout(){
    this.dataService.ustatus = 3;
    console.log("Logoutttttt")
    this.router.navigateByUrl('/').then(()=>{
      window.location.reload();
    });
    this.dataService.oid.loid=null;
    console.log(this.dataService.oid.loid)
  }
}
