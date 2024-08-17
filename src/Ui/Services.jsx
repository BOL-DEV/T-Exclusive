import propTypes from "prop-types";
import "./Services.css"

const Services = () => {
  return (
    <div>
      <Heading />
      <Content />
      <Reserve />
    </div>
  );
};

const Heading = () => {
  return (
    <div className="heading">
      {/* <img src="./main-corse.webp" alt="service" /> */}
      <h1>Main Services</h1>
    </div>
  );
};

const Content = () => {
  return (
    <body className="content">
      <ContentText
        title="UTME Registration"
        summary="Get registered for UTME quickly and easily at bol Cyber Cafe. Our experienced staff will guide you through the process and ensure your application is submitted successfully."
      />
      <ContentText
        title="VISA Applications"
        summary="Planning an international trip? Let bol Cyber Cafe handle your VISA application process. Our team of professionals will assist you in preparing all the necessary documents and submitting your application to the embassy."
      />
      <ContentText
        title="Scanning of Documents - ₦50/page"
        summary="Need to digitize your documents? We offer fast and reliable scanning services at bol Cyber Cafe, ensuring all your important papers are at your fingertips when you need them."
      />
      <ContentText
        title="NYSC Registration"
        summary="Let bol Cyber Cafe take care of your NYSC registration hassle-free. Our team of experts will assist you in completing your forms and submitting your application promptly."
      />
      <ContentText
        title="Printing of Documents "
        summary="Need to print important documents? Look no further than bol Cyber Cafe. We offer both color and black printing services at an affordable cost, ensuring your documents are of the highest quality."
      />
      <ContentText
        title="JAMB Registration"
        summary="Get registered for JAMB with ease at bol Cyber Cafe. Our experienced staff will guide you through the process and ensure your application is submitted successfully."
      />
      <ContentText
        title="WAEC GCE"
        summary="Secure your future with a WAEC GCE certificate. At bol Cyber Cafe, we provide fast and reliable registration services, ensuring you meet all the requirements to sit for the examination."
      />
      <ContentText
        title="Laminating of Documents "
        summary="Protect your important documents with our professional laminating services. At bol Cyber Cafe, we use high-quality materials to ensure your documents are preserved for years to come."
      />
      <ContentText
        title="Passport and Full Pictures "
        summary="Need high-quality pictures for your passport or other identification documents? Look no further than bol Cyber Cafe. Our professional photographers will ensure you get the perfect shot every time."
      />
    </body>
  );
};

const ContentText = ({ title, summary }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
};

ContentText.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
};

const Reserve = () => {
  return (
    <div className="reserve">
      <h1>Reservation</h1>
      <p>
        Visit Bol Cyber Cafe today and experience a new level of convenience and
        efficiency in your education and travel needs. Contact us at
        +2348022565399 or +2348091926473, or email us at
        texclusivecyber@gmail.com for more information.
      </p>
      <button>Book Now</button>
    </div>
  );
};

export default Services;
