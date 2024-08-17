import Banner from "../Ui/Banner";
import Services from "../Ui/Services";

function Menu() {
  return (
    <div>
      <Banner
        text="Visit T ExeClusive Cyber Cafe for all your educational and travel needs. Our one-stop-shop offers a wide range of services, from registration to document services, to make your experience as seamless as possible."
        title="Our Menu"
        backgroundImage="signeture-bg-1_10_KVussGfl.webp"
      />
      <Services />
    </div>
  );
}

export default Menu;
