import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedBookComponent } from './viewed-book.component';

describe('ViewedBookComponent', () => {
  let component: ViewedBookComponent;
  let fixture: ComponentFixture<ViewedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewedBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
