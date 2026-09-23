import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
        name: 'Chocolate cake 🎂',
        weight: 3000,
        ingredients: ["Chocolate","Sugar","Flour", "Milk"],
        amount: 0
    },
    {
        name: 'Cinnamon rolls',
        weight: 150,
        ingredients: ["Cinnamon","Sugar","Flour", "Milk"],
        amount: 2
    },
    {
        name: 'Pancakes',
        weight: 75,
        ingredients: ["Egg","Sugar","Flour", "Milk"],
        amount: 3
    },
    {
        name: 'Bread',
        weight: 100,
        ingredients: ["Flour", "Milk"],
        amount: 1
    }
];
 

  public getRecipe(): Recipe[] {
    return this.recipes
  }
}

export interface Recipe{
    name: String;
    weight: number;
    ingredients: String[];
    amount: number;
}
