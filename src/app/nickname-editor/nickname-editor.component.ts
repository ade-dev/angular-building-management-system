import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { isValidNickname } from '../directives/validate-nickname.directive';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.css']
})
export class NicknameEditorComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  nicknameEditorForm = this.formBuilder.group({
    nicknames: new FormArray([])
  }, { updateOn: "blur" });

  get in() { return this.nicknameEditorForm.get('in'); };

  get nicknames() {
    return this.nicknameEditorForm.get('nicknames') as FormArray;
  }

  addnickname() {
    const nickname = new FormControl('', { validators: [isValidNickname()] });
    this.nicknames.push(nickname);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.nicknameEditorForm.errors === null && this.nicknameEditorForm.valid) {
      console.log(this.nicknameEditorForm.value, "submitted");
    }
    else {
      console.log("Editor has errors");
      return;
    }
  };

}
