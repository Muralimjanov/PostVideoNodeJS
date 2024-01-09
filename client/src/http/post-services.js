import instance from "./settings";

const createVideo = (data) => {
    return instance.post("/video/add", data);
};

const getVideo = () => {
    return instance.get("/video");
};

// image upload
const createPost = (data) => {
    return instance.post("/image/add", data);
};

const getPost = () => {
    return instance.get("/image");
};

export const postServices = {
    createVideo,
    getVideo,
    createPost,
    getPost
};
