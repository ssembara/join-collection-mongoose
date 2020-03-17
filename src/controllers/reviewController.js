const Review = require('../models/reviewModel')
const Product = require('../models/productModel')

exports.index = async (req, res) => {
    const review = await Review.find({})
    try {
        res.status(200).send({
            status: res.statusCode,
            success: true,
            messages: 'Success load data!',
            review
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
    const review = new Review(req.body)
    await review.save()

    const product = await Product
        .findByIdAndUpdate({ _id: req.params.idProduct },
            { $addToSet: { 'reviews': review._id } },
            { new: true, safe: true, upsert: true })
    try {
        res
            .status(201)
            .send({
                status: res.statusCode,
                success: true,
                messages: 'New data added!',
                product
            })
    } catch (error) {
        res
            .status(400)
            .send({
                status: res.statusCode,
                success: false,
                messages: 'Failed to add data!',
                error
            })
    }
}

exports.destroy = async (req, res) => {
    const review = Review.findByIdAndDelete({ _id: req.params.idReview })
    const product = await Product
        .findByIdAndUpdate({ _id: req.params.idProduct },
            { $pull: { 'reviews': req.params.idReview } },
            { safe: true })
    try {
        res
            .status(200)
            .send({
                status: res.statusCode,
                success: true,
                messages: 'Data deleted!',
                product
            })
    } catch (error) {
        res
            .status(400)
            .send({
                status: res.statusCode,
                success: false,
                messages: 'Failed to add data!',
                error
            })
    }
}