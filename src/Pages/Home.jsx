import Banner from "../Ui/Banner";
import ButtonView from "../Ui/ButtonView";
import Card from "../Ui/Card";
import Menucontent from "../Ui/Menucontent";
import Service from "../Ui/Service";
import "./Home.css";

function Home() {
  return (
    <div className="HomePage">
      <Banner
        title="T Exclusive Cyber Cafe: Your One-Stop-Shop for Education and Travel Needs"
        text="Get access to a wide range of convenient services and elevate your
        educational and travel experience with T Exclusive."
        backgroundImage="/HomePage.webp"
      />
      <main className="main">
        <div>
          <h1>Why Choose T Exclusive Cyber Cafe?</h1>
          <div className="ca">
            <Card
              title="Convenient Registration Services"
              text="T Exclusive Cyber Cafe offers a range of online registration services, including NYSC, UTME, WAEC GCE, NECO GCE, NDA, Airforce, Navy, Army, and VISA applications. With Bol, you can avoid the hassle of standing in long queues and enjoy swift registration services from the comfort of our modern and cozy cafe. Our experienced staff is always ready to assist you in completing the registration process, ensuring a smooth and hassle-free experience."
              image="good-vibes_10_KVussGfl.webp"
            />
          </div>
        </div>
        <div className="Cards">
          <Card
            image="/cozy-place_10_KVussGfl.webp"
            title="One-stop-shop for Educational and Travel Needs"
            text="At T Exclusive Cyber Cafe, we understand the importance of education and
        travel in people’s lives. That’s why we offer a comprehensive range of
        services to cater to all your needs, including JAMB registration, JAMB
        regularization, and all forms of registration. Additionally, we provide
        a range of travel-related services, such as booking of local and
        international flights, making it easier for you to plan your travel
        itinerary. With our one-stop-shop approach, you can save time and effort
        by accessing all the services you need under one roof."
          />

          <Card
            title="Wide Range of Document Services (Printing, Laminating, Scanning)"
            text="In addition to our registration and travel-related services,  T Exclusive Cyber Cafe offers a wide range of document services, including printing of ID cards, documents, colored and black printing, laminating of documents, scanning of documents, and printing of pictures, including passport and full pictures. Our state-of-the-art equipment ensures that you receive high-quality results every time, making it easier for you to complete your projects and assignments with ease."
            image="relax-atmosphere_10_KVussGfl.webp"
          />
        </div>
      </main>
      <section className="MenuSection">
        <h2>Our Menu</h2>
        <div className="get">
          ___________________________
          <h2>Get Relax.</h2>
          ___________________________
        </div>
        <section className="menuconentsection">
          <Menucontent
            title="UTME Registration"
            text="     Get registered for UTME quickly and easily at bol Cyber Cafe. Our
        experienced staff will guide you through the process and ensure your
        application is submitted successfully."
          />
          <Menucontent
            title="NYSC Registration"
            text="Let bol Cyber Cafe take care of your NYSC registration hassle-free. Our team of experts will assist you in completing your forms and submitting your application promptly.
"
          />
          <Menucontent
            title="VISA Applications"
            text="
Planning an international trip? Let T Exclusive Cyber Cafe handle your VISA application process. Our team of professionals will assist you in preparing all the necessary documents and submitting your application to the embassy."
          />
          <Menucontent
            title="Printing of Documents"
            text="Need to print important documents? Look no further than bol Cyber Cafe. We offer both color and black printing services at an affordable cost, ensuring your documents are of the highest quality."
          />
        </section>
        <ButtonView />
      </section>
      <Service />
    </div>
  );
}

export default Home;
