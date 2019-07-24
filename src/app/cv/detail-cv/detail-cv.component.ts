import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonneService} from '../personne.service';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  personne: Personne;
  constructor(private activatedRoute: ActivatedRoute, private personneService: PersonneService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.personneService.getPersonneById(params.id).subscribe(personne => this.personne = personne);
      }
      );
  }

}
