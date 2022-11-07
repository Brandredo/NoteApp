import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFolderComponent } from './modify-folder.component';

describe('ModifyFolderComponent', () => {
  let component: ModifyFolderComponent;
  let fixture: ComponentFixture<ModifyFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
