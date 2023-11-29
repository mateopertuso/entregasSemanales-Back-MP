/* const fs = require('fs');
class ProductManager {
    constructor(path) {
        this.products = []
        this.id = 1
        this.path = path
        this.loadFromFile()
    }

    async saveToFile() {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2))
            console.log("Productos guardados");
        }
        catch (error) {
            console.log("Error al escribir el archivo: ", error.message);
        }
    }

    async loadFromFile() {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8')
            this.products = JSON.parse(data)
        }
        catch (error) {
            console.log("Error al leer el archivo: ", error.message);
        }
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        // validacion para que todos los productos sean obligatorios:
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return console.log("Todos los campos son obligatorios");
        }

        // validacion para que no se repita el code:
        const productExist = this.products.find(prod => prod.code === code)
        if (productExist) return console.log(`El producto con el code ${code} ya existe`);

        const newProduct = {
            id: this.id++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct)
        this.saveToFile()
    }

    getProducts() {
        return this.products
    }

    getProductsById(idProduct) {
        const productById = this.products.find(prod => prod.id === idProduct)
        if (productById) return console.log(productById);
        if (!productById) return console.log("Producto no encontrado");
    }

    async updateProduct(id, updatedFields) {
        const prodToUpdate = this.products.find(prod => prod.id === id)

        if (prodToUpdate) {
            Object.assign(prodToUpdate, updatedFields)

            try {
                await fs.promises.writeFile('./products.json', JSON.stringify(this.products, null, 2))
                console.log("Producto actualizado");
            } catch (error) {
                console.log("Error al actualizar", error.message);
            }
        } else {
            console.log("Producto no encontrado");
        }
        this.saveToFile()
    }

    async deleteProduct(id) {
        const prodToDelete = this.products.findIndex(prod => prod.id === id)

        if (prodToDelete !== -1) {
            this.products.splice(prodToDelete, 1)
            console.log("Producto eliminado");

        } else {
            console.log("Producto no encontrado");
        }
    }

}

const path = "products.json"
const manager = new ProductManager(path)


manager.addProduct("prod1", "este es el prod 1", 30, "sin imagen", "code1", 8)
manager.addProduct("prod2", "este es el prod 2", 70, "sin imagen", "code2", 6)
manager.getProducts()

manager.addProduct("prod1", "este es el prod 1", 30, "sin imagen", "code1", 8) // Repitiendo codigo para que no lo agregue
manager.addProduct("prod2", "este es el prod 2", 70, "sin imagen", "code2", 6)
manager.getProducts()

manager.getProductsById(2) // Obteniendo productos mediante ID

manager.updateProduct(1, { title: "prod1 actualizado", description: "este es el prod 1 actualizado", price: 33 }) // actualizando productos

manager.deleteProduct(2) // Eliminando productos segun id */