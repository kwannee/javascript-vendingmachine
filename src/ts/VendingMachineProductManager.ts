export interface product {
  name: string;
  price: number;
  quantity: number;
}

interface ProductManager {
  addProduct(newProduct: product): void;
  getProducts(): product[];
  getTargetProduct(name: string): product;
  editProduct(name: string, targetProduct: product): void;
  deleteProduct(name: string): void;
}

export default class VendingMachineProductManager implements ProductManager {
  private products: product[] = [];

  addProduct(newProduct) {
    this.products.push(newProduct);
  }

  getTargetProduct(targetName) {
    return this.products.find((product) => product.name === targetName);
  }

  getProducts() {
    return this.products;
  }

  editProduct(editProductName, targetProduct) {
    const editIndex = this.products.findIndex(
      (product) => product.name === editProductName
    );

    this.products.splice(editIndex, 1, targetProduct);
  }

  deleteProduct(deleteProductName) {
    this.products = this.products.filter(
      (product) => product.name !== deleteProductName
    );
  }
}
