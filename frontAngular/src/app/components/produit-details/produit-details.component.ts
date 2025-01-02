import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProduitService} from '../../services/produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
})
export class ProduitDetailsComponent implements OnInit {
  produit: any;

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.produitService.getProduitById(id).subscribe(
      (data) => (this.produit = data),
      (error) => console.error('Erreur lors du chargement des détails', error)
    );
  }
}
