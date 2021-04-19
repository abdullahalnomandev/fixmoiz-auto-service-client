import React from 'react';
import work1 from '../../../images/work-1.jpg';
import work2 from '../../../images/work-2-.jpg';
import work3 from '../../../images/work-3.jpg';
import GalleryDetails from '../GalleryDatails/GalleryDetails';
import './Gallery.css'
const Gallery = () => {

    const galleryImages = [
        { id: 1, galleryImg: work1 },
        { id: 2, galleryImg: work2 },
        { id: 3, galleryImg: work3 },
    ]
    return (
        <section className="gallery-section my-5 py-5">
            <div className="container">
                <div className="gallery-content text-center ">
                    <h2 className="">OUR GALLERY</h2>
                    <p className="text-secondary mt-2 mb-5" >Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil <br /> changes, and total vehicle overhauls.</p>
                </div>
                <div className="row">
                    {
                        galleryImages.map(gallery => <GalleryDetails key={gallery.id} gallery={gallery} />)
                    }

                </div>
            </div>

        </section>
    );
};

export default Gallery;
