import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredients: Ingredient[] = [
    {
        name: 'Egg',
        quantity: 4
    },
    {
        name: 'Flour',
        quantity: 5
    },
    {
        name: 'Sugar',
        quantity: 3
    },
    {
        name: 'Milk',
        quantity: 4
    },
    {
        name: 'Brown sugar',
        quantity: 5
    },
    {
        name: 'Chocolate',
        quantity: 5
    },
    {
        name: 'Cinnamon',
        quantity: 4
    } 
  ];
  
  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}

export interface Ingredient {
    name: String;
    quantity: number;
}