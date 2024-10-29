import { Injectable } from '@angular/core';
import { Basket } from '../model/basket.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint = 'http://localhost:81/webapi';
  members : any;//user
  type : any;//
  menus : any; //menu
  ustatus =3;
  log = false;
  baskets = Array<Basket>();
  sumprice = 0; //taltol
  edits:any;   //index edit basket
  uid : any;
  oid : any;
  listm : any;
  orders1 : any;
  listowner1 : any;
  oidbill : any;
  costomer : any;




  constructor() { }
}
