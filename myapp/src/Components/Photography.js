import React from 'react';

// import pages
import PhotographyHelper from './PhotographyHelper';

//import images
import film_2022_2 from '../Images/PhotographyGallery/film_2022_2.png';
import film_2022_6 from '../Images/PhotographyGallery/film_2022_6.png';
import pa6_7 from '../Images/PhotographyGallery/pa6_7.png';
import pa6_10 from '../Images/PhotographyGallery/pa6_10.png';
import pa6_11 from '../Images/PhotographyGallery/pa6_11.png';
import pa6_12 from '../Images/PhotographyGallery/pa6_12.png';
import photo_projector_2 from '../Images/PhotographyGallery/photo_projector_2.png';
import projector_photos_1 from '../Images/PhotographyGallery/projector_photos_1.png';
import headshot_1 from '../Images/PhotographyGallery/headshot1.png';
import IMG_7741 from '../Images/PhotographyGallery/IMG_7741.png';
import IMG_7742 from '../Images/PhotographyGallery/IMG_7742.png';
import IMG_7743 from '../Images/PhotographyGallery/IMG_7743.png';
import IMG_7744 from '../Images/PhotographyGallery/IMG_7744.png';
import IMG_7747 from '../Images/PhotographyGallery/IMG_7747.png';
import IMG_7748 from '../Images/PhotographyGallery/IMG_7748.png';
import IMG_7749 from '../Images/PhotographyGallery/IMG_7749.png';
import IMG_7752 from '../Images/PhotographyGallery/IMG_7752.png';
import IMG_7756 from '../Images/PhotographyGallery/IMG_7756.png';
import IMG_7757 from '../Images/PhotographyGallery/IMG_7757.png';
import walker_1 from '../Images/PhotographyGallery/walker_1.jpg';
import walker_2 from '../Images/PhotographyGallery/walker_2.jpg';
import walker_3 from '../Images/PhotographyGallery/walker_3.jpg';
import walker_4 from '../Images/PhotographyGallery/walker_4.jpg';
import walker_5 from '../Images/PhotographyGallery/walker_5.jpg';
import walker_6 from '../Images/PhotographyGallery/walker_6.jpg';
import walker_7 from '../Images/PhotographyGallery/walker_7.jpg';
import headshot from '../Images/PhotographyGallery/photography.png';



 
function Photography() {

    const images = [
        // constructed image final
        IMG_7741,
        headshot,
        IMG_7742,
        IMG_7743,
        IMG_7744,
        IMG_7747,
        IMG_7748,
        IMG_7749,
        IMG_7752,
        IMG_7756,
        IMG_7757,
        // projector photos
        photo_projector_2,
        projector_photos_1,
        headshot_1,
        // the 'walker' museum film photos
        walker_1,
        walker_2,
        walker_3,
        walker_4,
        walker_5,
        walker_6,
        walker_7,
        pa6_12,
        // intro to photography film photos
        film_2022_2,
        film_2022_6,
        pa6_7,
        pa6_11,
        pa6_10
        // Add more images
      ];

    return (
        
        <>
        <div style={{ textAlign: 'right', alignItems: 'flex-start', left: '200px',}}>
            <h1 style = {{padding: '10px'}}><a style = {{color: 'blue'}} href = 'photography'>photography</a></h1>
            
            <PhotographyHelper images={images} />

        </div>
        </>
    );
}

export default Photography;