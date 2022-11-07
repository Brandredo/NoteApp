import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Note } from './note/Note';

@Injectable({
  providedIn: 'root',
})
export class ConnectApiService {
  notes: Note[] = [];

  constructor(private httpclient: HttpClient) {}

  getAllNotes() {
    return this.httpclient.get<Note[]>(environment.noteGetAll);
  }

  deleteNote(title: string) {
    return this.httpclient.delete<Note>(environment.noteDelete + title);
  }
}
