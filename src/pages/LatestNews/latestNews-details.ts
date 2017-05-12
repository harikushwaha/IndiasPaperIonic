import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsServices} from '../../providers/NewsServices'

@Component({
  selector: 'page-latestNews-detail',
  templateUrl: 'latestNews-details.html'
})
export class LatestNewsDetailsPage implements OnInit {
  selectedItem: any;
  News: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ser:NewsServices) {
    //debugger;
    ser.getnews().subscribe(
            data => 
            {
                debugger;
                this.News = data.data;
                console.log(data.data);
            },
            err =>  console.log(err),
            () => console.log('get actual visits complete'));
    console.log(this.News);
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ngOnInit()
  {
    //debugger;
    
  }
}
