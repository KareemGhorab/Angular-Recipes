import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { RecipeBookComponent } from './recipe-book/recipe-book.component'
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component'
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component'
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
