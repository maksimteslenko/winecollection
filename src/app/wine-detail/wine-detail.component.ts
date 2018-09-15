import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../wine';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WineService }  from '../wine.service';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
  wine: Wine;
  constructor(
    private route: ActivatedRoute,
    private wineService: WineService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getWine();
  }

  getWine(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.wineService.getWine(id)
      .subscribe(wine => this.wine = wine);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.wineService.updateWine(this.wine)
      .subscribe(() => this.goBack());
  }
}
