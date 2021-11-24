import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProjectBoxComponent } from './live-project-box.component';

describe('LiveProjectBoxComponent', () => {
  let component: LiveProjectBoxComponent;
  let fixture: ComponentFixture<LiveProjectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveProjectBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
