import { useState } from "react";

function ImageGallery() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/550/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/550/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/550/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div style={{textAlign:'center'}}>
      <h1>
        Image Gallery
      </h1>

      <div>
        <img 
        src={images[selectedIndex].original}
        alt="new"
        />
      </div>
      
      <div>
        <button 
          onClick={() => setSelectedIndex(selectedIndex - 1)}
          disabled={selectedIndex === 0}>
          Previous
        </button>
        <button 
          onClick={() => setSelectedIndex(selectedIndex + 1)}
          disabled={selectedIndex === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
