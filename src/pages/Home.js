import beach1 from "../assets/boracay.jpg"
import beach2 from "../assets/boracay1.jpg"
import mayon1 from "../assets/mayon.jpg"
import mayon2 from "../assets/mayon2.jpg"
import Footer from "./Footer"
import HomeData from "./HomeData"

const Home = () => {
    return (
        <div className="destination">
            <h1> Popular Destinations in Philippines </h1>
            <p>Enjoy the journey as much as the destination</p>
            
            <HomeData
                className="first-des"
                heading="White Beach, Boracay"
                text="There is no shortage of pristine beaches in the Philippines, but if you are looking for a more active beach scene, one of the best places to visit is White Beach in Boracay. This is the most populous beach on the island but where you will find ample opportunities for boating and other water sports. It's also one of the most beautiful beaches in Asia.
                Plenty of chairs and hammocks are beneath the palm trees, so you can relax and enjoy the pure white sand. You can even book a beachside massage. Snorkeling is a popular activity at White Beach, but if you do not want to put in so much work, take a banana boat ride or book a trip on a glass-bottom boat."
                img1={beach1}
                img2={beach2}
            />

            <HomeData
                className="first-des-reverse" 
                heading="Mayon Volcano, Albay"
                text="The Mayon Volcano in the Albay province on Luzon Island is a must-see in the Philippines. It is an active stratovolcano with an elevation of more than 2,400 meters. The Mayon volcano has a perfect cone peak.

                Most visitors will want to enjoy the volcano by viewing it from the ground. Nature trails in the national park grounds surround the volcano, where you can also see wildlife like parakeets and other birds.
                
                Extreme hikers can apply for a permit to climb the volcano, but it is a difficult trek through forest, and dangerous gases are emitted near the peak, so caution is advised. The ideal time to visit is March through May, outside of the rainy season. You can take an organized trip from Manila to get here."
                img1={mayon2}
                img2={mayon1}
            />
            <br />
            <Footer />
        </div>
    );
};

export default Home;