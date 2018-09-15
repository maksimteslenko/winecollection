import { Component, OnInit } from '@angular/core';
import { Wine } from '../wine';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  wines: Wine[];

  constructor(private wineService: WineService) { }
  
  ngOnInit() {
    this.getWines();
  }

  getWines(): void {
    this.wineService.getWines().subscribe(wines => this.wines = wines);
  }

  add(name: string, year: string, producer: string): void {
    name = name.trim();
    year = year.trim();
    producer = producer.trim();
    if (!name || !year || !producer) { return; }
    this.wineService.createWine({ name, year, producer } as Wine)
      .subscribe(wine => {
        this.wines.push(wine);
      });
  }

  delete(wine: Wine): void {
    this.wines = this.wines.filter(h => h !== wine);
    this.wineService.deleteWine(wine).subscribe();
  }

}
