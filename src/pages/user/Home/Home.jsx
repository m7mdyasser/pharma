import Read from "../../../components/customer/read/Read";
import { Gallery } from "../../../components/customer/gallery/Gallery";
import Hero from "../../../components/customer/hero/Hero";
import CustomerSay from "../../../components/customer/CustomerSay/CustomerSay";
import Consultation from "../../../components/customer/consultation/Consultation";


const Home = () => {


  return (
    <>
      <Hero />
      <Gallery />
      <Read />
      <CustomerSay />
      <Consultation />
    </>
  );
};

export default Home;
