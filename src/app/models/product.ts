export class Product {
  productId!: number;
  name!: string;
  price!: number;
  images?: Array<object>[];
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
