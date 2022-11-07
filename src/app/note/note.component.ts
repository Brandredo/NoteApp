import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Note } from './Note';
import { environment } from 'src/environments/environment';
import { outputAst } from '@angular/compiler';
import { ConnectApiService } from '../connect-api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() note: Note = {} as Note;
  @Output() deleted = new EventEmitter<boolean>();

  showEditForm: boolean = false;
  showFolderForm: boolean = false;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Allow-Control-Access-Origin': 'https://localhost:4200',
    }),
  };

  constructor(
    private service: ConnectApiService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {}

  edit() {
    this.showEditForm = !this.showEditForm;
  }

  editFolder() {
    this.showFolderForm = !this.showFolderForm;
  }

  delete() {
    this.service.deleteNote(this.note.title).subscribe((data) => {
      console.log(data);
      console.log('deleted');
      this.deleted.emit(true);
    });
  }

  updateNote(newNote: Note) {
    const obj = {
      Title: newNote.title,
      Text: newNote.text,
      FolderId: newNote.folderId,
    };
    this.httpClient
      .put<Note>(environment.notePut, obj, this.headers)
      .subscribe((data) => {
        this.note = data;
        this.showEditForm = false;
      });
  }

  modifyFolder(value: number) {
    this.note.folderId = value;
  }
}
