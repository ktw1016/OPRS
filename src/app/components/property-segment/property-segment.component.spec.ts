import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySegmentComponent } from './property-segment.component';

describe('PropertySegmentComponent', () => {
  let component: PropertySegmentComponent;
  let fixture: ComponentFixture<PropertySegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
