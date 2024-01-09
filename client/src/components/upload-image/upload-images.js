import React, { useState } from "react";
import styles from "./upload-image.module.css";

const UploadImage = () => {
    const [image, setImage] = useState({
        title: "",
        brand: "",
        category: "",
        price: 0,
        description: "",
        image: null
    })
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Загрузка Фото</h2>
                <form encType="multipat/form-data">
                    <input type="text" name="title" placeholder="title" />
                    <input type="text" name="brand" placeholder="brand" />
                    <input type="text" name="category" placeholder="category" />
                    <input type="number" name="price" placeholder="price" />
                    <textarea
                        placeholder="description"
                        name="description"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <input type="file" name="image" />
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadImage;