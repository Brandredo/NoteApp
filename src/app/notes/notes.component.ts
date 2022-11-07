import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ConnectApiService } from '../connect-api.service';
import { Note } from '../note/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[] = [];
  @Output() deleted = new EventEmitter<boolean>();
  showAddForm: boolean = false;
  @ViewChild('f') form: NgForm = {} as NgForm;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  refreshNotes() {
    this.deleted.emit(true);
  }

  showForm() {
    this.showAddForm = !this.showAddForm;
  }

  addNote() {
    console.log(this.form.value);

    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http
      .post<Note>(environment.noteAdd, this.form.value, headers)
      .subscribe((data) => {
        console.log(data);
        this.deleted.emit(true);
      });
  }
}
