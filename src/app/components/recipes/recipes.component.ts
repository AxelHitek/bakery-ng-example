import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientService } from 'src/app/services/ingredient.service';
import { Recipe, RecipeService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public recipes: Recipe[] = [];
  public ingredients: Ingredient[] = [];
  public displayedColumns: string[] = ['name', 'weight', 'amount', 'action'];
  
  constructor( 
    private recipeService: RecipeService,
    private ingredinetService: IngredientService
  ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe()
    this.ingredients = this.ingredinetService.getIngredients();
  }

  public bakeRecipe(recipe: Recipe){
    
    let canBakeRecipe = this.checkEnoughIngredientsForRecipe(recipe);

    if(canBakeRecipe){
      this.consumeIngredientsForRecipe(recipe);
      recipe.amount++;
    } else {
      alert("Can't bake " + recipe.name + " not enough ingredients");
    }
  }

  private checkEnoughIngredientsForRecipe(recipe: Recipe): boolean {
    let areEnoughEngredients = true;
    
    for(let ingredientInRecipe of recipe.ingredients){
      for(let ingredint of this.ingredients){
          if(ingredint.name == ingredientInRecipe){
            if(ingredint.quantity <= 0){
              areEnoughEngredients = false;
            }
          }
      }
    }

    return areEnoughEngredients;
  }

  private consumeIngredientsForRecipe(recipe: Recipe): void {
    for(let recipeIngredient of recipe.ingredients){
        for(let ingredient of this.ingredients){
          if(ingredient.name == recipeIngredient){
            ingredient.quantity--;
          }
        }
      }
  }

}
