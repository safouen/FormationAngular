import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-rotation',
  templateUrl: './card-rotation.component.html',
  styleUrls: ['./card-rotation.component.css']
})
export class CardRotationComponent implements OnInit {

  constructor() { }
  user = {
    nom: 'Ben Yahia',
    prenom: 'Safouen',
    quote: 'bla bli bla',
    job: 'Software Developper'
  }

  ngOnInit() {
  }

}
