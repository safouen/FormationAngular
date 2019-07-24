import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  observable: Observable<string>;
  constructor() { }

  ngOnInit() {
    this.observable = new Observable((observe) => {
      // tslint:disable-next-line:max-line-length
      const paths = ['assets/images/rotating_card_profile.png', 'assets/images/rotating_card_profile2.png', 'assets/images/rotating_card_profile3.png'
        , 'assets/images/rotating_card_thumb.png', 'assets/images/rotating_card_thumb2.png', 'assets/images/rotating_card_thumb3.png'];
      let i = 0;
      setInterval(() => {
        observe.next(paths[i]);
        i = (i + 1 ) % 6;
      }, 1000);
    });
  }

}
