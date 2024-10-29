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


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  members = Array<User>();
  userlog : any;
  uid : any;
  addfal = false;
  constructor(private dataService : DataService,private http : HttpClient,
    private dialogref : MatDialogRef<LoginComponent>,private dialog : MatDialog){
   this.members = dataService.members;

  }
  //หน้าเพิ่มสมาชิกใหม่
  addmember(){
    this.dialog.open(AddmemberComponent,{
      minWidth : '300px',
    });
  }
  login(email : string,password : string){
    let jsonObj = {
      email : email,
      password : password,
    }
    // if(email=="" || password==""){
    //   this.dialog.open(LoginfailedComponent,{
    //     minWidth : '300px',
    //   });
    // }else{
      let jsonstring = JSON.stringify(jsonObj);
      this.http.post(this.dataService.apiEndpoint + "/user/login",jsonstring,
      {observe: 'response'}).subscribe((response) =>{
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        this.userlog = JSON.stringify(response.body);
        console.log(this.userlog)
        this.dialogref.close();

        // if(this.userlog == "failed" ){
        //   console.log("111111222222")
        //   console.log(password)
        //   console.log(this.userlog)
        //   console.log(this.userlog.password)

        //   if(this.userlog.ustatus == 0){
        //     console.log("11111111111111")
        //     this.dialog.open(LoginsesComponent,{
        //       minWidth : '300px',

        //     });
        //   }else{
        //     console.log("222222222222")
        //     this.dialog.open(LoginsesComponent,{
        //       minWidth : '300px',
        //     });
        //   }
        // }else{
        //   console.log("333333333333")
        //   this.dialog.open(LoginfailedComponent,{
        //     minWidth : '300px',
        //   });
        // }
        if(this.userlog == "0"){
          this.http.get(this.dataService.apiEndpoint + "/user/name/"+email).subscribe((data : any)=>{
            this.dataService.costomer =userCvt.toUser(JSON.stringify(data))
            console.log(this.dataService.costomer)
          });
            console.log("Loginsecess By Owner")
            // this.dataService.ustatus=this.userlog;
            this.dataService.ustatus= 0;
            this.dialog.open(LoginsesComponent,{
              minWidth : '300px',
              minHeight : '100px',
            });
        }
        else if(this.userlog == "1"){
          this.http.get(this.dataService.apiEndpoint + "/user/name/"+email).subscribe((data : any)=>{
            this.dataService.costomer =userCvt.toUser(JSON.stringify(data))
            console.log(this.dataService.costomer)
          });
            console.log("Loginsecess By Customer")
            this.dataService.ustatus = 1;
            this.http.get(this.dataService.apiEndpoint + "/user/"+email).subscribe((data : any)=>{
            this.uid =uidoidCvt.toUidoid(JSON.stringify(data))
            this.dataService.uid = this.uid;
            console.log(this.dataService.uid)
            console.log(this.uid)


            this.http.get(this.dataService.apiEndpoint + "/orders/oid/"+this.uid.uid).subscribe((data : any)=>{
            this.uid =uidoidCvt.toUidoid(JSON.stringify(data))
            this.dataService.oid = this.uid.oid;
            console.log(this.dataService.uid)
            console.log(this.uid)
            });
            });
            console.log(this.dataService.uid)
            this.dialog.open(LoginsesComponent,{
              minWidth : '300px',
              minHeight : '100px',
            });
          }
        else{
          console.log("333333333333")
          this.dialog.open(LoginfailedComponent,{
            minWidth : '300px',
            minHeight : '100px',
          });
        }
      });
    //  }
  }
  close(){
   this.dialogref.close();
  }
}
