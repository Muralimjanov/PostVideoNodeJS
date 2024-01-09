import React, { useState, useEffect } from "react";
import { postServices } from "../../http/post-services";
import styles from "./video.module.css";

const Video = () => {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const allVideo = async () => {
            const data = await postServices.getVideo();
            setVideo(data.data);
        }
        allVideo();
    }, []);

    console.log("video>>>", video);

    return (
        <div className={styles.container}>
            {
                video.map((elem, i) => {
                    return (
                        <div className={styles.content}>
                            <video className={styles.video} controls>
                                <source src={`http://localhost:7771/${elem.video}`} type="video/mp4" />
                            </video>
                            <h2>{elem.title}</h2>
                            <p>{elem.description}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Video;
