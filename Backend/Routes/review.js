import express from 'express'
import { getAllReviews, createReview } from '../Controllers/reviewController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'

//mergeParams ensures that params such as doctorId are accessible 
// in the nested route
const router = express.Router({mergeParams: true});

router.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReview)

export default router;