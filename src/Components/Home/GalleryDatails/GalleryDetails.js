import React from 'react';

const GalleryDetails = ({ gallery }) => {

  return (
    <div className="col-md-4 mb-3">

      <img className="img-fluid" src={gallery.galleryImg} alt="" />

    </div>
  );
};

export default GalleryDetails;