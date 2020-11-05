import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingManagerComponent } from './building-manager.component';

describe('BuildingManagerComponent', () => {
  let component: BuildingManagerComponent;
  let fixture: ComponentFixture<BuildingManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
