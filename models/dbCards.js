import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
    {
        name: String,
        imgUrl: String
    },
    {
        timestamps: true
    }
)

const Card = mongoose.model("Card", cardSchema);
export default Card