import type { Request, Response } from 'express';
import { ProductService } from './product.service';
import type { ProductInterface } from './interfaces/product.interface';

export class ProductController {
  private productService: ProductService;
  public constructor() {
    this.productService = new ProductService();
  }
  public async create(req: Request, res: Response) {
    const body: ProductInterface = req.body;

    try {
      const product = await this.productService.create({
        ...body,
      });
      if (product instanceof Error) {
        return Promise.reject(res.status(400).json(product));
      }
      return Promise.resolve(res.status(201).json(product));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }

  public async read(req: Request, res: Response) {
    try {
      const product = await this.productService.read();
      if (product instanceof Error) {
        return Promise.reject(res.status(400).json(product));
      }
      return Promise.resolve(res.status(200).json(product));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const body: ProductInterface = req.body;

    try {
      const product = await this.productService.update(id, {
        ...body,
      });
      if (product instanceof Error) {
        return Promise.reject(res.status(400).json(product));
      }
      return Promise.resolve(res.status(200).json(product));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await this.productService.delete(id);
      if (product instanceof Error) {
        return Promise.reject(res.status(400).json(product));
      }
      return Promise.resolve(res.status(200).json(product));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }
}
export default new ProductController();
