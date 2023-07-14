import mongoose from "mongoose";

const {Schema} = mongoose;

const reviewSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    
    description: {
        type: String,
        required: true,
    },
    
    rating: {
        type: Number,
        required: true,
    },

    filmID: {
        type: Number,
        required: true,
    },
})

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);