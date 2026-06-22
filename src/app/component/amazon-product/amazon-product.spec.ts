import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonProduct } from './amazon-product';

describe('AmazonProduct', () => {
  let component: AmazonProduct;
  let fixture: ComponentFixture<AmazonProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(AmazonProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
