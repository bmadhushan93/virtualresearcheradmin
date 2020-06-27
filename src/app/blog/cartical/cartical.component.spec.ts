import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarticalComponent } from './cartical.component';

describe('CarticalComponent', () => {
  let component: CarticalComponent;
  let fixture: ComponentFixture<CarticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
