import React, { useState } from 'react';
import style from "./upload-video.module.css";
import { postServices } from '../../http/post-services';

const initialState = {
    title: "",
    description: "",
    video: null
};

const UploadVideo = () => {
    const [video, setVideo] = useState(initialState);
    const handleChangeInput = (e) => {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        });
    };
    const handleChangeFile = (e) => {
        setVideo({
            ...video,
            video: e.target.files[0]
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("title", video.title);
        form.append("description", video.description);
        form.append("video", video.video);
        try {
            const data = await postServices.createVideo(form);
            console.log("data>>>", data);
        } catch (err) {
            console.log(err);
        }
    }
    console.log(video);

    return (
        <div className={style.container}>
            <div className={style.post_video}>
                <h1>Загрузка видео</h1>
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <input
                        type="text"
                        onChange={handleChangeInput}
                        placeholder="title"
                        name="title"
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        name='description'
                        placeholder="description"
                        onChange={handleChangeInput}
                    ></textarea>
                    <input
                        type="file"
                        onChange={handleChangeFile}
                    />
                    <div>
                        <button type="submit">Загрузить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadVideo;