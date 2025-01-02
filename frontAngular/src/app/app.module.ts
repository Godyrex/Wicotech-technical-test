import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AjouterProduitComponent} from "./components/ajouter-produit/ajouter-produit.component";
import {ModifierProduitComponent} from "./components/modifier-produit/modifier-produit.component";
import {ProduitDetailsComponent} from "./components/produit-details/produit-details.component";
import {ProduitListeComponent} from "./components/produit-liste/produit-liste.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AjouterProduitComponent,
    ModifierProduitComponent,
    ProduitDetailsComponent,
    ProduitListeComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
