import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameEditorComponent } from './nickname-editor.component';

describe('NicknameEditorComponent', () => {
  let component: NicknameEditorComponent;
  let fixture: ComponentFixture<NicknameEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicknameEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
