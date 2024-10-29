import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ts';
  constructor(private http : HttpClient){

  }
  async getLandmark(){
    console.log('Start');
    let url = 'http://localhost:81/webapi/menu';
    let data : any = await lastValueFrom(this.http.get(url));
    console.log('Complete');
    console.log(data[0]);

    console.log('Continue');
  }
}
