import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConnectApiService } from '../connect-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() deleted = new EventEmitter<boolean>();
  @Output() getAll = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<boolean>();

  constructor(private api: ConnectApiService) {}

  ngOnInit(): void {}

  getAllNotes() {
    this.getAll.emit(true);
  }

  addNote() {
    this.add.emit(true);
  }
}
