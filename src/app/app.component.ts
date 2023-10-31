import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { ProductComponent } from './components/product/product.component';

@Component({
  standalone: true,
  imports: [ ProductComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-app';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle() {
    this.title = 'changed';
  }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data: any) => {
      this.products = data;
    })
  }
}
