import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/_services/data.service';
import { Coin } from '../_models/coin';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ListComponent implements OnInit{
  coins$: Observable<Coin[]> | undefined;

  constructor(private dataService:DataService, private router:Router) {
    
  }

  ngOnInit() {
    this.loadData();
  }

  loadData()
  {
    this.coins$ = this.dataService.getAllCoins();
  }

  viewCoin(coinID: string)
  {
    this.router.navigate(['coin'], {queryParams: {id: coinID}});
  }

}
