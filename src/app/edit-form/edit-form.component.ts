import { HttpHeaders } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../note/Note';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  @Input() currentNote: Note = {} as Note;
  @ViewChild('f') form: NgForm = {} as NgForm;
  @Output() contentChange = new EventEmitter<Note>();
  noteToSend: Note = {} as Note;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.noteToSend.title = this.form.value.title;
    this.noteToSend.text = this.form.value.text;

    this.contentChange.emit(this.noteToSend);
  }
}
