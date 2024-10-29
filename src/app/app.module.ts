import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListfoodComponent } from './page/listfood/listfood.component';
import {MatCardModule} from '@angular/material/card'; //กาด
import {MatButtonModule} from '@angular/material/button'; // ปุ่ม
import {MatIconModule} from '@angular/material/icon'; // ไอคอน
import {MatFormFieldModule} from '@angular/material/form-field'; //ฟอร์ม
import {MatInputModule} from '@angular/material/input'; //อินพุต
import {MatToolbarModule} from '@angular/material/toolbar'; //แท็บ
import {MatDividerModule} from '@angular/material/divider'; //เส้น
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './page/login/login.component'; //เมนู
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { OrderComponent } from './page/order/order.component';
import { AddmemberComponent } from './page/addmember/addmember.component';
import { OwnerComponent } from './page/owner/owner.component';
import { ListorderComponent } from './page/listorder/listorder.component';
import { BasketComponent } from './page/basket/basket.component';
import { LoginfailedComponent } from './page/loginfailed/loginfailed.component';
import { LoginsesComponent } from './page/loginses/loginses.component';
import { EditComponent } from './page/edit/edit.component';
import { ConeditComponent } from './page/conedit/conedit.component';
import{ ShoworderComponent } from './page/showorder/showorder.component';
import { AddressComponent } from './page/address/address.component';
import { ConaddComponent } from './page/conadd/conadd.component';
import { BillComponent } from './page/bill/bill.component';
import { InsertmenuComponent } from './page/insertmenu/insertmenu.component';
import { ConfirmComponent } from './page/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListfoodComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    OrderComponent,
    AddmemberComponent,
    OwnerComponent,
    ListorderComponent,
    BasketComponent,
    LoginfailedComponent,
    LoginsesComponent,
    EditComponent,
    ConeditComponent,
    ShoworderComponent,
    AddressComponent,
    ConaddComponent,
    BillComponent,
    InsertmenuComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule, //กาด
    MatButtonModule, // ปุ่ม
    MatIconModule, // ไอคอน
    MatFormFieldModule, //ฟอร์ม
    MatInputModule, //อินพุต
    MatToolbarModule, //แท็บ
    MatDividerModule, //เส้น
    MatMenuModule, //menu
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
