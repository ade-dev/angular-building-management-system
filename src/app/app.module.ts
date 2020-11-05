import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NicknameEditorComponent } from './nickname-editor/nickname-editor.component';
import { BuildingManagerComponent } from './building-manager/building-manager.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValidateNicknameDirective } from './directives/validate-nickname.directive';

@NgModule({
  declarations: [
    AppComponent,
    NicknameEditorComponent,
    BuildingManagerComponent,
    ValidateNicknameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
