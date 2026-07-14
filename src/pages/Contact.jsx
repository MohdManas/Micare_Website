import React from "react";
import { ReachUs } from "../sections";
import { ParallaxBanner } from "../components";
import { LuHouse } from "react-icons/lu";

const Contact = () => {
  const breadcrumbItems = [
    { name: "Home", href: "/", icon: LuHouse },
    { name: "Contact Us", href: "/contact", current: true },
  ];
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <ParallaxBanner
        title="Contact Us"
        description="We're here to help—learn more about our healthcare mission and the passionate team that supports it."
        breadcrumbItems={breadcrumbItems}
        bgImgUrl={
          "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
        }
      />
      <ReachUs />
    </main>
  );
};

export default Contact;
