import {Component, OnInit, ViewChild} from '@angular/core';
import {Card} from '../../model/Card';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {addFontsToIndex} from "@angular/material/schematics/ng-add/fonts/material-fonts";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit{

  cards: Card[] = [];

  constructor() { }


  ngOnInit(): void {
    for (let i=0; i<10; i++){
      this.cards.push({refNo:'12345', barcode:'456321', englishName:'Kaliyugaya', sinhalaName:'කලියුගය', year:1995
        ,price:1800.25, medium:'Sinhala', pages:800, image:'hhhh', note:'lorem ipsum', author:'Martin Wickramasinghe',
        category:'Nawa Katha', isReference:false, supplier:'Government', rack:'1A'});
    }
  }

  changePage(event: PageEvent) {

  }
}

