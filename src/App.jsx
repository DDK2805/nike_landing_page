import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
      once: false, // Set to false to animate every time you scroll
    });
  }, []);

  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b' data-aos="fade-up">
        <Hero />
      </section>
      <section className='padding' data-aos="fade-up">
        <PopularProducts />
      </section>
      <section className='padding' data-aos="fade-up">
        <SuperQuality />
      </section>
      <section className='padding-x py-10' data-aos="fade-up">
        <Services />
      </section>
      <section className='padding' data-aos="fade-up">
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding' data-aos="fade-up">
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full' data-aos="fade-up">
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8' data-aos="fade-up">
        <Footer />
      </section>
    </main>
  );
};

export default App;
