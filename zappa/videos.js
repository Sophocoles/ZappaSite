function playVideo(videoUrl) {
    // Create a new iframe element
    var iframe = document.createElement('iframe');
  
    // Set the source of the iframe to the YouTube embed URL with the video ID
    iframe.src = videoUrl;
  
    // Set the width and height of the iframe to match the video player dimensions
    iframe.width = '560';
    iframe.height = '315';
  
    // Add the iframe to the page
    document.body.appendChild(iframe);
  }
  