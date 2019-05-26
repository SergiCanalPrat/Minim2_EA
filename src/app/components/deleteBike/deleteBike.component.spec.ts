import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikedeleteComponent } from './deleteBike.component';

describe('BikedeleteComponent', () => {
  let component: BikedeleteComponent;
  let fixture: ComponentFixture<BikedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikedeleteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
