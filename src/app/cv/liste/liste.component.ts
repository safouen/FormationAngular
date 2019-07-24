import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonneService} from '../personne.service';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Output() personEmiter = new EventEmitter();
  personnes: Personne[];
  constructor(private personService: PersonneService) {
  }

  ngOnInit() {
    this.personService.getPersonnes().subscribe(personnes => {this.personnes = personnes; });
  }

  toParent(person) {
    this.personEmiter.emit(person);
  }

}
