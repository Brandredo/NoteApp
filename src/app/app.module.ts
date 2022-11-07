import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteComponent } from './note/note.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NotesComponent } from './notes/notes.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ModifyFolderComponent } from './modify-folder/modify-folder.component';
import { MatInputModule } from '@angular/material/input';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ChangeColorOnHoverDirective } from './change-color-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesComponent,
    EditFormComponent,
    NavbarComponent,
    ModifyFolderComponent,
    SearchboxComponent,
    ChangeColorOnHoverDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
