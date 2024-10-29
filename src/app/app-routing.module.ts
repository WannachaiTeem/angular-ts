import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListfoodComponent } from './page/listfood/listfood.component';
import { OrderComponent } from './page/order/order.component';
import { OwnerComponent } from './page/owner/owner.component';
import { BasketComponent } from './page/basket/basket.component';
import{ ShoworderComponent } from './page/showorder/showorder.component'
import { ListorderComponent } from './page/listorder/listorder.component';

const routes: Routes = [
  {path : '', component : ListfoodComponent},
  {path : 'owner', component : OwnerComponent},
  {path : 'basket', component : BasketComponent},
  {path : 'showorder', component : ShoworderComponent},
  {path : 'listorder', component : ListorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
