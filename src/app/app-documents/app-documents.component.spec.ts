import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDocumentsComponent } from './app-documents.component';

describe('AppDocumentsComponent', () => {
  let component: AppDocumentsComponent;
  let fixture: ComponentFixture<AppDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
