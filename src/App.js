/*
  Intro to components

  In programming, a component is an independent, reusable piece of code.
  Components are the building block of React applications.

  A React component is a function or a class that optionally accepts data and 
  returns a React element that describes some piece of user interface

  Naming convention for components: PascalCase (file and component names)

  File: Header.js, function Header()
*/

import User from './components/User'
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {

  const images = [
    'wedding1.jpg', 'wedding2.jpg', 'wedding3.jpg', 'wedding4.jpg', 'wedding5.jpg'
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
