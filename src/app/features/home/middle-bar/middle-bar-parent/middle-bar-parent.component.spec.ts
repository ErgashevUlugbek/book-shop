import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBarParentComponent } from './middle-bar-parent.component';

describe('MiddleBarParentComponent', () => {
  let component: MiddleBarParentComponent;
  let fixture: ComponentFixture<MiddleBarParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleBarParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBarParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
