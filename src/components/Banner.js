import Button from './Button';
function Banner(props) {
  return (
    <div className='hero-banner'>
      <p className='banner-title'>{props.title}</p>
      <p className='banner-desc'>{props.text}</p>
      <div className='button-container'>
        <Button colour='primary' value='View our gallery'/>
        <Button colour='secondary' value='Speak with a specialist'/>
      </div>
    </div>
  );
}

export default Banner;