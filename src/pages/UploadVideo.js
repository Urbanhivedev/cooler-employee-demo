//import React, { useState } from "react";
//import AWS from "aws-sdk";
//
//const S3_BUCKET = "neallusmawubucket001";
//const REGION = "us-east-2";
//const ACCESS_KEY = "AKIA5J3O6T2HQ5TYB67F";
//const SECRET_ACCESS_KEY = "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";
//
//const UploadVideoPage = () => {
//  const [video, setVideo] = useState(null);
//  const [videoUrl, setVideoUrl] = useState("");
//
//  const handleFileInputChange = (e) => {
//    setVideo(e.target.files[0]);
//  };
//
//  const handleVideoUpload = () => {
//    if (!video) {
//      console.log("No video selected");
//      return;
//    }
//
//    const s3 = new AWS.S3({
//      accessKeyId: ACCESS_KEY,
//      secretAccessKey: SECRET_ACCESS_KEY,
//      region: REGION,
//    });
//
//    const params = {
//      Bucket: S3_BUCKET,
//      Key: video.name,
//      Body: video,
//      ContentType: video.type,
//    };
//
//    s3.upload(params, (err, data) => {
//      if (err) {
//        console.log("Uplaod Error", err);
//        return;
//      }
//
//      setVideoUrl(data.Location);
//      console.log("Video uploaded successfully:", data.Location);
//    });
//  };
//
//  return (
//    <div>
//      <input type="file" onChange={handleFileInputChange} />
//      <button onClick={handleVideoUpload}>Upload Video</button>
//      {videoUrl && (
//        <video controls>
//          <source src={videoUrl} type={video.type} />
//        </video>
//      )}
//    </div>
//  );
//};
//
//export default UploadVideoPage;
//