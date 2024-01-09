import React from 'react';
import Home from "./home";
import UploadVideo from '../components/upload-video/upload-video';
import UploadImage from '../components/upload-image/upload-images';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post-image" element={<UploadImage />} />
                <Route path="/post-video" element={<UploadVideo />} />
            </Routes>
        </div>
    )
}

export default Main;