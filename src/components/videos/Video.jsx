import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getOneVideo } from "../../api/fetch";
import YouTube from "react-youtube";
import moment from "moment";
import he from "he";

import "./Video.css";

export default function Video() {
  const [videoObj, setVideoObj] = useState({});
  const { id } = useParams();


//   const uploaded = moment(video.snippet.publishedAt).fromNow();


  //   console.log(id);
  useEffect(() => {
    getOneVideo(id).then((response) => {
        console.log(response);
      setVideoObj(response);
      console.log(videoObj);
    }).then(console.log(videoObj))
  }, []);

  return (
    <div className="vid-container">
      <YouTube
        videoId={id}
        origin={"http://localhost:3000"}
        className="youtube-vid"
      />
      <div>
        {/* <h3>{video.items[0].snippet.title}</h3> */}
      </div>
      {/* <p>
        {video} •
      </p> */}
    </div>
  );
}
