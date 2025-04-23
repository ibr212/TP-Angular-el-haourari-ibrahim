class ShoppingCart {
    private itemsProduct: ShoppingCartItem[] = [];
    private total: number = 0;
  
    constructor(itemsProduct: ShoppingCartItem[] = []) {
      this.itemsProduct = itemsProduct;
      this.updateTotal();
    }
  
    private updateTotal(): void {
      this.total = this.itemsProduct.reduce((sum, item) => sum + item.itemProduct.getProductPrice() * item.quantity, 0);
    }
  
    addItem(item: ShoppingCartItem): void {
      const existingItem = this.itemsProduct.find(i => i.itemProduct.getproductID() === item.itemProduct.getProductID());
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.itemsProduct.push(item);
      }
      this.updateTotal();
    }
  
    removeItem(productID: number): void {
      this.itemsProduct = this.itemsProduct.filter(item => item.itemProduct.getProductID() !== productID);
      this.updateTotal();
    }
  
    getItems(): ShoppingCartItem[] {
      return [...this.itemsProduct];
    }
  
    getTotal(): number {
      return this.total;
    }
  }
  