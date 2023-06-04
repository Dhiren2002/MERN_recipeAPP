import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingrediants: [{
        type: String,
        required: true,
    }],
    instructions: {
        tyoe: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
        cookingTime: {
            type: Number,
            required: true,
        }
    },
    userOwner: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true}

});

export const RecipeModel = mongoose.model("recipes", RecipeSchema)