import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  id: number = -1;
  editMode = false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((par) => {
      this.id = +par['id'];
      this.editMode = par['id'] !== null;
    });
  }
}
