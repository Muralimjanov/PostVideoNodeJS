const {Schema, model} = require("mongoose");


const VideoSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    video:{
        type: String
    }
});

module.exports = model("Video", VideoSchema);