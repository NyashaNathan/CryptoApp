import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Coin } from '../../app/_models/coin'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://api.coingecko.com/api/v3/';
  coin: Coin[] = [];

  constructor(private http: HttpClient) {

   }

   getAllCoins(){
      return this.http.get<Coin[]>(this.baseUrl + 'coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=false').pipe(
        map(coin => {
          this.coin = coin;
          return coin;
        })
      )
   }

   getCoin(id: string){
      return this.http.get<Coin[]>(this.baseUrl + 'coins/' + id).pipe(
        map(coin => {
          this.coin = coin;
          return coin;
        })
      )
   }
}
