import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

public ingredients: Ingredient[] = [];

public firstIngredient: Ingredient | undefined;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
    this.firstIngredient = this.ingredients[0];
    console.log('xxx', this.firstIngredient)
  }

  addEgg(){
    this.firstIngredient.quantity+=3;
  }

}
