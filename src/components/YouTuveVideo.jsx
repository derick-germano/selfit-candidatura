import React from 'react'

export default function YouTuveVideo({videoId}) {
  return (
    <div className="w-full">
      <iframe
        className="w-video_cel md:w-video_resp 2xl:w-video_custom h-video_h_cel md:h-video_h_resp 2xl:h-video_h rounded-2xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
