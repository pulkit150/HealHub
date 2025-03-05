import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const getAllReviews = async(req,res)=>{
    try {
        const reviews = await Review.find({});

        res.status(200).json({success: true, message: "Successful", data: reviews})
    } catch (err) {
        res.status(404).json({success: false, message: "Not Found"});
    }
}

//create review 
export const createReview = async(req,res)=>{
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.params.userId

    const newReview = new Review(req.body)

    try {
        const doctor = await Doctor.findById(req.body.doctor);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        //checking there are no 2 reviews from the same person
        // const existingReview = await Review.findOne({doctor: req.body.doctor, user: req.body.user});
        // if(existingReview){
        //     return res.status(401).json({success: false, message: "You have already reviewed this doctor"})
        // }

        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id },
        });

        res
        .status(200)
        .json({success: true, message: "Review Submitted", data: savedReview})
    } catch (error) {
        res
        .status(500)
        .json({success: false, message: error.message})
    }

}