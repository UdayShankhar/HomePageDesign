import "./App.css";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import HomePageCarousel from "./HomePageCarousel";
import Navbar from "./Navbar";
import FeaturedProducts from "./FeaturedProducts";
import OffersSection from "./OffersSection";
import TopOffers from "./TopOffers";
import BrandOffers from "./BrandOffers";
import Offers from "./Offers";
import Deals from "./Deals";
import FashionBrands from "./FashionBrands";
import Snacks from "./Snacks";
import RecentlyViewed from "./RecentlyViewed";
import TerryKartDetails from "./TerryKartDetails";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomePageCarousel />
      <FeaturedProducts />
      <OffersSection />
      <h4 className="heading">Top Offers</h4>
      <TopOffers />
      <h4 className="heading">Brand Offers</h4>
      <BrandOffers />
      <Offers />
      <h4 className="heading">Deals</h4>
      <Deals />
      <h4 className="heading">Fashion Brands</h4>
      <FashionBrands />
      <h4 className="heading">Snacks</h4>
      <Snacks />
      <h4 className="heading">RecentlyViewed</h4>
      <RecentlyViewed />
      <TerryKartDetails />
      <Footer />
    </>
  );
}

export default App;
