import { Component } from '@angular/core';
import {ProduitService} from '../../services/produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
})
export class AjouterProduitComponent {
  produit = { nom: '', prix: 0, categorie: '' };

  constructor(private produitService: ProduitService, private router: Router) {}

  ajouterProduit(): void {
    this.produitService.ajouterProduit(this.produit).subscribe(
      () => this.router.navigate(['/produits']),
      (error) => console.error('Erreur lors de l\'ajout', error)
    );
  }
}
