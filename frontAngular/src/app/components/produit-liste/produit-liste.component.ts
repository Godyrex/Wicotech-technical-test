import {Component, OnInit} from '@angular/core';
import {ProduitService} from '../../services/produit.service';
import {RouterLink} from '@angular/router';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-produit-liste',
  templateUrl: './produit-liste.component.html',
})
export class ProduitListeComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(
      (data) => (this.produits = data),
      (error) => console.error('Erreur lors du chargement des produits', error)
    );
  }

  supprimerProduit(id: string): void {
    this.produitService.supprimerProduit(id).subscribe(
      () => this.ngOnInit(),
      (error) => console.error('Erreur lors de la suppression du produit', error)
    );
  }
}
