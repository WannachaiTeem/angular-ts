import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrls: ['./listorder.component.scss']
})
export class ListorderComponent {
  constructor(private  router : Router){
    router.navigate(['/basket']);
  }
}
