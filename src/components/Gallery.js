function Gallery({ images }) {
  return (
    <section className='gallery'>
      <div className='gallery-row'>
        {images.map((image) => (
          <img className='img' src={require(`../media/${image}`).default} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;