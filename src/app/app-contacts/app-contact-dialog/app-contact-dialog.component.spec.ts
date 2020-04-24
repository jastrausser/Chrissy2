import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactDialogComponent } from './app-contact-dialog.component';

describe('AppContactDialogComponent', () => {
  let component: AppContactDialogComponent;
  let fixture: ComponentFixture<AppContactDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
