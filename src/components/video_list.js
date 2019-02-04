import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  //Video List, for문보다 map을 사용하는게 리스트만드는데 편리
  const videoItems=props.videos.map((video)=>{
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect} 
        key={video.etag} 
        video={video} />
    );
  }); // 더 자세하게 비디오 리스트를 달라고 요청

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;