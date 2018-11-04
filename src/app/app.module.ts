import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { RecipeListComponent } from './header/recipe-book/recipe-list/recipe-list.component';
import { RecipeBookComponent } from './header/recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './header/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './header/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './header/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
