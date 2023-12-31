// import PageContent from "../components/PageContent.js";
import MainNavigation from "../components/MainNavigation/MainNavigation";
// import myImage from "../../public/images/home.jpg";
import styles from './HomePage.module.css';
import './styles.css';
import Footer from '../components/Footer/Footer'
import HomeCards from "../components/HomeCards/HomeCards";
import Welcome from "../components/Welcome/Welcome";

const HomePage = () => {
  return (
    <>


      <MainNavigation />

      <Welcome/>

      {/* <div className={styles.homepage}>
        <div className="homeContainer">
          <h1>Welcome to the gallery</h1>
          <h2>A repository of the past, waiting to be forgotten. But don't we will keep reminding you. Store your memories here. </h2>
        </div>
        <img src={process.env.PUBLIC_URL + '/images/home.jpg'} alt="Home" className={styles.homeImage}/>
      </div> */}

      <HomeCards/>

      <Footer/>



    </>
  );
};

export default HomePage;
