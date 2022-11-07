import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConnectApiService } from './connect-api.service';
import { Note } from './note/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NotebookSPA';
  permanentCollection: Note[] = [];
  collection: Note[] = [];

  // test: string = '';

  constructor(private service: ConnectApiService) {}

  refreshNotes(value: boolean) {
    if (value) {
      this.service.getAllNotes().subscribe((data) => {
        this.permanentCollection = data;
      });
    }
  }

  findByTitle(title: string) {
    this.collection = this.permanentCollection.filter(
      (note) => note.title.toLowerCase() === title.toLocaleLowerCase()
    );
  }

  // change() {
  //   setTimeout(() => {
  //     this.test = 'changed';
  //   }, 5000);
  // }
}
