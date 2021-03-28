import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  resultCount = 0;
  showResultCount = false
  selectedOption = 'title';
  @ViewChild('search')
  searchValue!: ElementRef;

  constructor(private bookService: BookService) { }


  ngOnInit(): void {

  }

  searchBook(searchKey: string,pageSize: string, pageIndex: string): void{
    if(this.selectedOption === 'title'){
      this.bookService.searchBookByName(searchKey,pageSize,pageIndex).subscribe(list => {
        this.showResultCount = true;
        this.cards = list;
      }, error => {
        alert('Something went wrong');
      })
      this.bookService.searchBookCountByName(searchKey).subscribe(count => {
        this.resultCount = count;
      }, error => {
        alert('Something went wrong');
      });
    }else if(this.selectedOption === 'author'){
      this.bookService.searchBookByAuthor(searchKey,pageSize,pageIndex).subscribe(list => {
        this.showResultCount = true;
        this.cards = list;
      }, error => {
        alert('Something went wrong');
      });
      this.bookService.searchBookCountByAuthor(searchKey).subscribe(count => {
        this.resultCount = count;
      }, error => {
        alert('Something went wrong');
      });
    }else {

    }
  }

  changePage(event: PageEvent) {

  }

  clearSearch(value: string) {
    if (value === null || value === ''){
      this.showResultCount = false;
      this.cards.length = 0;
    }
  }

  searchTypeSelect() {
    if((this.searchValue.nativeElement as HTMLInputElement).value !== ''){
      this.searchBook((this.searchValue.nativeElement as HTMLInputElement).value,'5','0');
    }
  }
}

