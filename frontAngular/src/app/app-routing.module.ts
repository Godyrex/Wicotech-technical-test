import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitListeComponent } from './components/produit-liste/produit-liste.component';
import { AjouterProduitComponent } from './components/ajouter-produit/ajouter-produit.component';
import { ProduitDetailsComponent } from './components/produit-details/produit-details.component';
import { ModifierProduitComponent } from './components/modifier-produit/modifier-produit.component';

const routes: Routes = [
  { path: 'produits', component: ProduitListeComponent },
  { path: 'produits/ajouter', component: AjouterProduitComponent },
  { path: 'produits/:id', component: ProduitDetailsComponent },
  { path: 'produits/modifier/:id', component: ModifierProduitComponent },
  { path: '', redirectTo: '/produits', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
