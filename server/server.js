const express = require('express');
const mongoose = require('mongoose');
const VideoModel = require('./models/Video.js');
const PostModel = require('./models/Post.js');
const multer = require('multer');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
app.use('/static', express.static('public'));


mongoose
    .connect(
        "mongodb+srv://diyormuralimjanovvv:admin1234@cluster0.hycr1m5.mongodb.net/PostVideo?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Ok"))
    .catch((err) => console.log("DB Error", err))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === "video") {
            cb(null, "uploads/videos/")
        } else if (file.fieldname === "image") {
            cb(null, "uploads/images/")
        } else {
            cb(new Error("Invalid file type"))
        }
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const name =
            file.originalname.replace(ext, "").toLowerCase().split(" ").join("-") + "-" + Date.now();
        cb(null, name + ext);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.fieldname === 'video') {
        const filetypes = /mp4|mov/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error("Only videos with MP4 or MOV format are allowed."));
    } else if (file.fieldname === 'image') {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error("Only videos with JPEG, JPG or PNG format are allowed."));
    } else {
        cb(new Error("Invalid file type"));
    }
};

const upload = multer({ storage, fileFilter });
app.use("/uploads", express.static("uploads"));


app.post("/api/video/add", upload.single("video"), async (req, res) => {
    try {
        if (!req.file) {
            throw new Error("No video file uploaded");
        }
        const { title, description } = req.body;
        const video = req.file.path;
        const uploadVideo = new VideoModel({ title, description, video });

        const newVideo = await uploadVideo.save();
        res.status(201).json(newVideo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get("/api/video", async (req, res) => {
    try {
        const upload = await VideoModel.find();
        res.json(upload);
    } catch (err) {
        res.status(404).json({ message: "Video not found" });
    }
});


app.post("/api/image/add", upload.single("image"), async (req, res) => {
    try {
        const { title, brand, category, price, description } = req.body;
        const image = `http://localhost:7771/${req.file.path}`;
        const post = new PostModel({
            title,
            brand,
            category,
            price,
            description,
            image,
        });
        await post.save()
        res.status(201).json(post)
    } catch (err) {
        res.status(500).json({ message: "Failed to add Post" });
    }
});

app.get("/api/image", async (req, res) => {
    try {
        const post = await PostModel.find();
        res.json(post)
    } catch (err) {
        res.status(404).json({ message: "Post not found" });
    }
})

const PORT = 7771;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});