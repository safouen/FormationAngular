import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  color = 'black';
  size = 11;
  font = 'Arial';
  constructor() { }

  ngOnInit() {
  }

}
