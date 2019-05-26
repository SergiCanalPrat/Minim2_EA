import { CUSTOM_ELEMENTS_SCHEMA } from './node_modules/@angular/core';
import { async, ComponentFixture, TestBed } from './node_modules/@angular/core/testing';

import { AddBikeComponent } from './addBikeComponent';

describe('AddBikeComponent', () => {
  let component: AddBikeComponent;
  let fixture: ComponentFixture<AddBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBikeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
