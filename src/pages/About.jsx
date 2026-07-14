import { ParallaxBanner } from "../components";
import { Testimonials, WhoWeAre, WhyChooseUs } from "../sections";
import { LuHouse } from "react-icons/lu";

const About = () => {
  const breadcrumbItems = [
    { name: "Home", href: "/", icon: LuHouse },
    { name: "About Us", href: "/about", current: true },
  ];
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <ParallaxBanner
        title="About Us"
        description="Learn more about our commitment to providing exceptional
                healthcare services and our dedicated medical team."
        breadcrumbItems={breadcrumbItems}
        bgImgUrl={
          "https://images.pexels.com/photos/29948395/pexels-photo-29948395.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
        }
      />
      <WhoWeAre />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
};

export default About;
