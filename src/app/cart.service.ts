export class CartService {
  items = [];

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}