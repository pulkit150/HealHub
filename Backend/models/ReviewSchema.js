import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";
import User from "./UserSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function(next){
  this.populate({
    path: "user",
    select: "name photo"
  });

  next();
});

reviewSchema.statics.calcAverageRatings = async function(doctorId){
  //this refers the current review
  const stats = await this.aggregate([
    {
    $match:{doctor: doctorId},
    },
    {
      $group: {
        _id: '$doctor',
        numOfRating: {$sum:1},
        avgRating:{$avg:'$rating'}
      }
    }
  ])

  await Doctor.findByIdAndUpdate(doctorId,{
    totalRating: stats[0]?.numOfRating || 0,
    averageRating: stats[0]?.avgRating || 0
  })
  
}

//this is a middleware which runs once the review is saved
reviewSchema.post('save', function(){
  this.constructor.calcAverageRatings(this.doctor)
})

export default mongoose.model("Review", reviewSchema);
