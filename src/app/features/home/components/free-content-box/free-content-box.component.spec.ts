import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeContentBoxComponent } from './free-content-box.component';

describe('FreeContentBoxComponent', () => {
  let component: FreeContentBoxComponent;
  let fixture: ComponentFixture<FreeContentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeContentBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
