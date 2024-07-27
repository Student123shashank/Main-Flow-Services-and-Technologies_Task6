import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
    { src: "/Img1.jpg", alt: "1" },
    { src: "/Img2.jpg", alt: "2" },
    { src: "/Img3.jpeg", alt: "3" },
    { src: "/Img4.jpeg", alt: "4", },
    { src: "/Img5.jpeg", alt: "5", },
    { src: "/Img6.webp", alt: "6", },
    { src: "/Img7.jpeg", alt: "7", },
    { src: "/Img8.jpg", alt: "8", },
    { src: "/Img9.jpg", alt: "9", },
    { src: "/Img10.webp", alt: "10", },
    { src: "/Img11.webp", alt: "11", },
    { src: "/Img12.webp", alt: "12", },
    { src: "/Img13.webp", alt: "13", },
    { src: "/Img14.webp", alt: "14", },
    { src: "/Img15.jpg", alt: "15", },
    { src: "/Img16.jpg", alt: "16", },
    { src: "/Img17.jpg", alt: "17", },
    { src: "/Img18.jpg", alt: "18", },
    { src: "/Img19.webp", alt: "19", },
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}
