export class Product {
  productId!: number;
  name!: string;
  price!: number;
  imageUrl?: string;
  description?: string;
  sku?: string;
  printType?: string;
  materiaId?: number;
  estimatedPrintTime?: number;

  /**
   *
   */
  constructor() {
    
  }

  parseFromJSON(dataFromDb: string) {

  }
}
