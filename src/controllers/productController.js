const Product = require('../models/productModel')

exports.index = async (req, res) => {
    const product = await Product.find({})
    try {
        res.status(200).send({
            status: res.statusCode,
            success: true,
            messages: 'Success load data!',
            product
        })
    } catch (error) {
        res.status(500).send({
            status: res.statusCode,
            success: false,
            messages: 'Server error!',
            error
        })
    }
}

exports.store = async (req, res) => {
    const product = new Product(req.body)

    try {
        await product.save()
        res.status(201).send({
            status: res.statusCode,
            success: true,
            messages: 'New data added!',
        })
    } catch (error) {
        res.status(400).send({
            status: res.statusCode,
            success: false,
            messages: 'Failed to add data!',
            error
        })
    }
}

exports.show = async (req, res) => {
    const product = await Product.findById({ _id: req.params.idProduct }).populate('reviews')
    try {
        res.status(200).send({
            status: res.statusCode,
            success: true,
            messages: 'Success load data!',
            product
        })
    } catch (error) {
        res.status(500).send({
            status: res.statusCode,
            success: false,
            messages: 'Server error!',
            error
        })
    }
}