import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartItemComponent } from './add-cart-item.component';
import { DebugElement } from '@angular/core';
import { ShoppingCartModule } from '../../shopping-cart.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { By } from '@angular/platform-browser';

describe('AddCartItemComponent', () => {
  let component: AddCartItemComponent;
  let fixture: ComponentFixture<AddCartItemComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), ShoppingCartModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AddCartItemComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title as Add', () => {
    const title = el.query(By.css('h3'));
    expect(title.nativeElement.textContent).toBe('Add');
  });
});
