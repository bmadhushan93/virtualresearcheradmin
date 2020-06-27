import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AarticalComponent } from './aartical.component';

describe('AarticalComponent', () => {
  let component: AarticalComponent;
  let fixture: ComponentFixture<AarticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AarticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AarticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
