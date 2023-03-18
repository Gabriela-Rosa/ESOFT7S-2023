import { writeFile, readFile } from 'fs/promises'

class ProductService {
    async createFiles (data){
        try {
            writeFile('products.json', JSON.stringify(data, null, 2))

        }
        catch(err) {
            console.error('erro na escrita', err)
        }
    }

    async readFiles (){
        try{
            const readProducts = await readFile('products.json', "utf-8")

            return JSON.parse(readProducts) 
        }
        catch(err) {
            console.error('erro na escrita', err)
        }
    }

    async readProductsEstoque (){
        try {
            const product = await this.readFiles()
            const productEstoque = product.map(item => {
                return {
                    nome: item.nome,
                    qtde: item.qtde,
                    preco: item.preco,
                    valor_estoque: item.preco*item.qtde
                }
            })
        } catch (err) {
            console.error('erro na escrita', err)
        }
    }
}
export default new ProductService()