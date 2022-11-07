import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-folder',
  templateUrl: './modify-folder.component.html',
  styleUrls: ['./modify-folder.component.css'],
})
export class ModifyFolderComponent implements OnInit {
  @ViewChild('f') form: NgForm = {} as NgForm;
  @Output() folderChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value.folder);
    this.folderChanged.emit(this.form.value.folder);
  }
}
