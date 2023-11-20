class ProductManager {
    products = []
    #id = 1

    obtenerProducts() {
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const newProduct =
        {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.#id++,
        }

        const codeExist = this.products.find(product => product.code === code)
        if (codeExist) console.log(`El producto ${code} ya existe`);
        this.products.push(newProduct)

    }
    getElementById(id) {
        const idExist = this.products.find(product => product.id === id)
        if (idExist) return (idExist);
        else console.log("producto no encontrado")

    }

}
const productManager = new ProductManager()

productManager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "pro123", 25)
productManager.addProduct("producto prueba2", "este es un producto prueba", 200, "sin imagen", "pro2", 25)
productManager.addProduct("producto prueba3", "este es un producto prueba", 200, "sin imagen", "pro2", 25)
console.log(productManager.obtenerProducts())
console.log(productManager.getElementById(4))
