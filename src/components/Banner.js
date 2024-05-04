import Button from './Button';
function Banner(props) {
  return (
    <div className='hero-banner'>
      <h1 className='banner-title'>{props.title}</h1>
      <p className='banner-desc'>{props.text}</p>
      <div className='button-container'>
        <Button colour='primary' value='View our gallery'/>
        <Button colour='secondary' value='Speak with a specialist'/>
      </div>
    </div>
  );
}

export default Banner;