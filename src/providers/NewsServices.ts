import {Injectable} from '@angular/core'
import {Http,Headers} from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class NewsServices{
      News: any = {};
    constructor(private http: Http)
    {
       // debugger;
        //this.News= this.getnews();
        //this.getnews();
    }

    getnews()
    {
        //debugger;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // this.News = this.http.get('https://indiaspapers.com/apis/news',headers).map(response => response.json());
        // return this.News;

         return this.http.get('https://indiaspapers.com/apis/news',headers).map(response => response.json());
             
        // return this.http.get('https://indiaspapers.com/apis/news',headers).map(response => response.json())
        // .subscribe(
        //     data => 
        //     {
        //         debugger;
        //         this.News = data;
        //         console.log(data);
        //     },
        //     err =>  console.log(err),
        //     () => console.log('get actual visits complete'));
    }
}