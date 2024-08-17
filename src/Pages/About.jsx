import AboutUsContent from "../Ui/AboutUsContent";
import Banner from "../Ui/Banner";

function About() {
  return (
    <div>
      <Banner
        title="About Us"
        text="Welcome to T Exclusive Cyber Cafe"
        backgroundImage="/about-section-bg-img_10_KVussGfl.webp"
      />
      <AboutUsContent/>
    </div>
  );
}

export default About;
