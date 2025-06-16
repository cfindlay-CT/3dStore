export class Product {
  productId!: number;
  name!: string;
  price!: number;
  images?: Array<object>[];
  longDescription?: string;
  shortDescription?: string;
  sku?: string;
  printType?: string;
  materiaId?: number;
  estimatedPrintTime?: number;
  size?: string;

  /**
   *
   */
  constructor() {
    
  }

  parseFromJSON(dataFromDb: string) {

  }
}
