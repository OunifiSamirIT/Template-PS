import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({

    name :{

        type: String,
        trim: true,  //eviter les espaces
        required: true,
    },
    email :{

        type: String,
        trim: true,  //eviter les espaces
        required: true,
        unique: true,
    },
    password: {

        type: String,
        required: true,
        min:6,
        max:64,
    },
    picture :{

        type: String,
        default: "/avatar.png",  
        required: true,
    },
    role :{

        type: [String],
        default: ["Subscriber"],  //eviter les espaces
        enum: ["Subscriber","instructor","admin"],
    },
    


},{timestamps:true}

);

export default mongoose.model('user' , userSchema)