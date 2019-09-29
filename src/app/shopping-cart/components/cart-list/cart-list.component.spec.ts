import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListComponent } from './cart-list.component';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  let el: DebugElement;
  let mockStore: MockStore<fromStore.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [
        provideMockStore({
          selectors: [{ selector: fromStore.getItems, value: [] }, { selector: fromStore.getTotal, value: 20 }],
        }),
      ],
      declarations: [CartListComponent],
    }).compileComponents();
    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title as Shopping Cart', () => {
    const title = el.query(By.css('h3'));
    expect(title.nativeElement.textContent).toBe('Shopping Cart');
  });

  it('should display total', () => {
    const total = el.query(By.css('.total-number'));
    expect(total.nativeElement.textContent).toBe('$20.00');
  });
});
