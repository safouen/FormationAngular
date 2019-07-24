import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/Personne';
import {PersonneService} from '../personne.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() personEmiter = new EventEmitter();
  constructor(private personneService: PersonneService) { }

  ngOnInit() {
  }

  toParent() {
    this.personEmiter.emit(this.personne);
  }
  delete() {
    this.personneService.deletePersonne(this.personne.id).subscribe(data => {
      this.personneService.getPersonnes();
    });
  }

}
