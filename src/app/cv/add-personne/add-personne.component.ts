import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {PersonneService} from '../personne.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  constructor(private personneService: PersonneService, private router: Router) { }

  ngOnInit() {
  }
  addPersonne(formulaire: NgForm) {
    this.personneService.addPersonne(formulaire.value).subscribe(personne => {this.router.navigate(['cv']);});

  }

}
