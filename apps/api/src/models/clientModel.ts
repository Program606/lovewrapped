import mongoose, { Schema, Document } from "mongoose"

//Schema describes the structure of a document within a datatype
interface IntroDocument extends Document {
    id: string;
    type: string;
    headline: string;
    subheadline: string;
    from: string;
    to: string;
    bg: string;
    accent: string;
}

const introSchema = new Schema<IntroDocument>({
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    subheadline: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    bg: {
        type: String,
        required: true
    },
    accent: {
        type: String,
        required: true
    },
}, {timestamps: true});

//model applies schema to a model, to interact with a collection of that name

export const introReq = mongoose.model<IntroDocument>('Intro', introSchema);
