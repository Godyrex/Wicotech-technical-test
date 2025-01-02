import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitService} from '../../services/produit.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
})
export class ModifierProduitComponent implements OnInit {
  produit = { nom: '', prix: 0, categorie: '' };

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.produitService.getProduitById(id).subscribe(
      (data) => (this.produit = data),
      (error) => console.error('Erreur lors du chargement', error)
    );
  }

  modifierProduit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.produitService.modifierProduit(id, this.produit).subscribe(
      () => this.router.navigate(['/produits']),
      (error) => console.error('Erreur lors de la modification', error)
    );
  }
}
