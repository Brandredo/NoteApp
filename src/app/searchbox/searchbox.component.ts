import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  startSearch(value: HTMLInputElement) {
    console.log(value.value);
    this.emitSearch.emit(value.value);
  }
}
