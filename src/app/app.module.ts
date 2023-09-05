import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomp/todos/todos.component';
import { ItemsComponent } from './mycomp/items/items.component';
import { AddComponent } from './mycomp/add/add.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycomp/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ItemsComponent,
    AddComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
