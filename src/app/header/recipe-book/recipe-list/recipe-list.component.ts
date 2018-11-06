import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test', 
			'http://www.ruchiskitchen.com/wp-content/uploads/2015/08/nan_khata_recipe_2.jpg'),
		new Recipe('A Test Recipe', 'This is simply a test', 
			'http://www.ruchiskitchen.com/wp-content/uploads/2015/08/nan_khata_recipe_2.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

}
