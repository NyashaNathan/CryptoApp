import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit  {
  coin: any = {};
  coinID: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router ){

  }

  ngOnInit(): void {
     this.activatedRoute.queryParams
      .filter(params => params['id'])
      .subscribe(params => {
        this.coinID = params['id']

        if(this.coinID == null){
          this.router.navigateByUrl('list');
          return;
        }

        this.loadCoinDetails(this.coinID);
      })
  }

  loadCoinDetails(id: any){
    this.dataService.getCoin(id).subscribe(coins => {
      this.coin = coins;
    })
  }

}
