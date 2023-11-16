import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCardListComponent } from './coffee-card-list.component';

describe('CoffeeCardListComponent', () => {
  let component: CoffeeCardListComponent;
  let fixture: ComponentFixture<CoffeeCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeCardListComponent]
    });
    fixture = TestBed.createComponent(CoffeeCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
