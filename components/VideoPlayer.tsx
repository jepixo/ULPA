
import React from 'react';

interface VideoPlayerProps {
  url: string;
}

const getYouTubeEmbedUrl = (url: string): string | null => {
  if (!url) return null;
  let videoId = null;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.slice(1).split('?')[0];
    } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
      videoId = urlObj.searchParams.get('v');
    }
  } catch (error) {
    console.error("Invalid video URL:", url, error);
    return null;
  }
  
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) {
    return <p className="text-xs text-red-500 bg-red-50 p-2 rounded-md">Invalid or non-YouTube video link provided.</p>;
  }

  return (
    <div className="aspect-w-16 aspect-h-9 mt-2">
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
