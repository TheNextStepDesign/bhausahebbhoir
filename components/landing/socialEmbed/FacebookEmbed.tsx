import React from 'react';

const FacebookEmbed = () => {
  return (
    <div className="w-full ">
      <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbhausahebbhoirofficial&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" 
        style={{border: 'none', overflow: 'hidden'}}
        height={400}
        width={315}
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookEmbed;
