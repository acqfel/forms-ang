import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { UserEditorComponent } from './reactive/user-editor/user-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    UserEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
