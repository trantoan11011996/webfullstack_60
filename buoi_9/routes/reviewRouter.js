var express = require('express');
var router = express.Router();
const { postReview, deleteAllReview} = require('../controller/reviewController');


// create review
router.post("/",postReview)

//delete all review
router.delete("/1",deleteAllReview)

module.exports = router