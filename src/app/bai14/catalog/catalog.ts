import { Component } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {

  categories: any;

  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }

}