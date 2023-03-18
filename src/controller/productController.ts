import {Request, Response} from 'express'
import productService from '../services/productService'

class ProductController {
    public async findProduct(req: Request, res: Response) {
        try {
            const products = productService.readFiles()
            return res.json(products)
        } catch (error) {
            return res.status(500).send()
        }
    }

    public async createProduct(req: Request, res: Response) {
       try {
        productService.createFiles(req.body)
        return res.status(201).send()
       } catch (error) {
        return res.status(500).send()
       }
    }

    public async findProductEstoque(req: Request, res: Response) {
        try {
            const products = productService.readProductsEstoque()
            return res.json(products)
        } catch (error) {
            return res.status(500).send()
        }
    }
}
export default new ProductController()