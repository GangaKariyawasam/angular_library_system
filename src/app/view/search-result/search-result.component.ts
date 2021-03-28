import {Component, OnInit, ViewChild} from '@angular/core';
import {BookCustom} from '../../model/BookCustom';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {addFontsToIndex} from "@angular/material/schematics/ng-add/fonts/material-fonts";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit{

  cards: Array<BookCustom> = [];

  constructor(private bookService: BookService) { }


  ngOnInit(): void {

  }

  searchBook(searchKey: string,pageSize: string, pageIndex: string): void{
    this.bookService.searchBook(searchKey,pageSize,pageIndex).subscribe(list => {
      this.cards = list;
    }, error => {
      alert('Something went wrong');
    });
  }

  changePage(event: PageEvent) {

  }
}

