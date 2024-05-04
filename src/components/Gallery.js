function Gallery({ images }) {
  return (
    <section className='gallery'>
      <div className='gallery-row container'>
        {images.map((image, index) => (
          <img key={index} className='img' src={image} alt={`${index + 1}`}/>
        ))}
      </div>
    </section>
  );
}

export default Gallery;