

const Reviews = require('../model/reviewModel')
const Product = require('../model/productModel')
const asyncHandler = require('express-async-handler');



/// update review
const reviewArr = []
const postReview = asyncHandler(async function (req, res) {
    const review = await (await Reviews.create(req.body)).populate('user')
    reviewArr.push(review)
    console.log("review arr",reviewArr)
    try {
        const reviewProduct = review.product
        const productId = reviewProduct._id
        const product = await Product.findOne(productId)
        if (product) {
            product.review.push(review)
            const updateReviewProduct = await product.save()
            const numReview = updateReviewProduct.review.length
            product.numReview = numReview
            const ratingAve = (array) =>{
                let sum = 0
                for(let item of array){
                    sum += item.rating
                }
                return Math.floor(sum/array.length)
            }
            product.rating = ratingAve(reviewArr)
            const updateProduct = await product.save()
            res.json(updateProduct)
        } else {
            res.status(400)
            throw new Error('product not exist')
        }
    }catch(err){
        res.status(400)
        throw new Error('error post review',err)
    }
})

const deleteAllReview = asyncHandler(async function(req,res){
    Reviews.remove({}).exec((err, data) => {
        if (err) {
            res.status(400)
            throw new Error('Error')
        } else {
            res.status(200)
            res.json({
                message: "xóa thành công review"
            })
        }
    })
})



module.exports = {
    postReview,
    deleteAllReview
}

