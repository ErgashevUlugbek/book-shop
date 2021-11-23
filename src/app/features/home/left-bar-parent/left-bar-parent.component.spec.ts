import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarParentComponent } from './left-bar-parent.component';

describe('LeftBarParentComponent', () => {
  let component: LeftBarParentComponent;
  let fixture: ComponentFixture<LeftBarParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftBarParentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
