import Products from '../models/productModel.js'

//CREATE PRODUCT
export const postProduct = async (req, res) => {
    const newProduct = new Products(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET ALL PRODUCTS
export const getProducts = async (req, res) => {
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET PRODUCT BY ID
export const getProductById = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET PRODUCT BY SLUG
export const getProductBySlug = async (req, res) => {
    try {
        const product = await Products.findOne({ slug: req.params.slug })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE PRODUCT
export const updateProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        if (product) {
            product.name = req.body.name || product.name
            product.slug = req.body.slug || product.slug
            product.category = req.body.category || product.category
            product.description = req.body.description || product.description
            product.price = req.body.price || product.price
            product.image = req.body.image || product.image
            product.sellerId = req.body.sellerId || product.sellerId
            product.seller = req.body.seller || product.seller
            product.sellerImage = req.body.sellerImage || product.sellerImage

            const updateProduct = await product.save()
            res.status(200).json(updateProduct)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE PRODUCT
export const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        if (product) {
            await product.remove()
            res.status(200).json({ message: 'Product deleted' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}