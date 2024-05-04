/*
  Intro to components

  In programming, a component is an independent, reusable piece of code.
  Components are the building block of React applications.

  A React component is a function or a class that optionally accepts data and 
  returns a React element that describes some piece of user interface

  Naming convention for components: PascalCase (file and component names)

  File: Header.js, function Header()
*/

import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import image1 from './media/wedding1.jpg';
import image2 from './media/wedding2.jpg';
import image3 from './media/wedding3.jpg';
import image4 from './media/wedding4.jpg';
import image5 from './media/wedding5.jpg';

function App() {

  const images = [
    image1, image2, image3, image4, image5
  ];

  return (
    <>
      <Header />
      <div className="container">
        <Banner title='Wedding Bells are ringing!' 
        text='Crafting Unforgettable Moments for Your Perfect Day. From Elegant
        Venues to Personalized Details, Let Us Create Your Dream Wedding ExperienceYour Dream Wedding
        Awaits. Discover Our Range of Tailored Services for a Perfect Celebration' />
        <Gallery images={images}/>
      </div>
      <Footer />
    </>
  );
}
export default App;
