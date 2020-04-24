import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginDialogComponent } from './app-login-dialog.component';

describe('AppLoginDialogComponent', () => {
  let component: AppLoginDialogComponent;
  let fixture: ComponentFixture<AppLoginDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoginDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
