import React from 'react';

const YouTubeChannelEmbed = () => {
  return (
    <div>
      <iframe
        width="100%"       // Set this to your preferred width
        height="400"       // Set this to your preferred height
        src="https://www.youtube.com/embed?listType=user_uploads&list=UCvCY-QbKjIzvJew4rDqOTTw"  // Replace with the actual channel ID
        title="YouTube Channel"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeChannelEmbed;
