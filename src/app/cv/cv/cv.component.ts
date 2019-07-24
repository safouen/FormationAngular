import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personne: Personne;
  constructor() { }

  ngOnInit() {
  }

  show($event) {
    this.personne = $event;
  }

}
