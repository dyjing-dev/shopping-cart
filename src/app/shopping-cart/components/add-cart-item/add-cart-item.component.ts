import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product, ShoppingCartItem } from '../../models';

@Component({
  selector: 'app-add-cart-item',
  templateUrl: './add-cart-item.component.html',
  styleUrls: ['./add-cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCartItemComponent implements OnInit {
  @Input() products: Product[];
  @Output() add = new EventEmitter<ShoppingCartItem>();
  form: FormGroup;
  selectedProduct: Product;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.products && this.products.length > 0) {
      this.selectedProduct = this.products[0];
    }
    this.form = this.fb.group({
      product: [this.selectedProduct],
      quantity: [1],
    });
    this.form.get('product').valueChanges.subscribe(p => (this.selectedProduct = p));
  }

  addItem() {
    const item = this.form.value;
    this.add.emit(item);
    // reset form after add
    this.loadDefaultForm();
  }

  cancel() {
    this.loadDefaultForm();
  }

  private loadDefaultForm() {
    this.form.patchValue({
      product: this.products[0],
      quantity: 1,
    });
  }
}
