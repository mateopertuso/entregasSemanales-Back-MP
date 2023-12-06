const express = require('express')
const ProductManager = require('./index')

const app = express()
const port = 8080


const productManager = new ProductManager('../productos/products.json')


app.get('/products/', async (req, res) => {
    try {
        //leo el parametro de consulta limit para la query
        const { limit } = req.query
        // traigo todos los productos
        const products = await productManager.getProducts()
        //realizo una validacion para saber si existe limit , si no, traigo todos los productos.
        if (!(isNaN(limit) || limit <= 0)) {
            productsFilter = products.slice(0, limit)
            return res.json({ productsFilter })
        }
        res.json({ products })
    } catch (error) {
        console.error('Error al obtener los products:', error.message)
    }
})

app.get('/products/:pid', async (req, res) => {
    try {
        //utilizo params el id
        const { pid } = req.params
        //realizo una busqueda por id
        const filterById = await productManager.getProductByID(pid)
        if (!filterById) {
            return res.status(404).json({ error: 'El producto con el id buscado no existe.' });
        } else {
            res.json({ filterById })
        }
    } catch (error) {
        console.error('Error al obtener los products:', error.message)
    }
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
