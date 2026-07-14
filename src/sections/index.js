import { lazy } from "react";

export const Hero = lazy(() => import("./home/Hero"));
export const AboutUs = lazy(() => import("./home/AboutUs"));
export const Services = lazy(() => import("./home/Services"));
export const Departments = lazy(() => import("./home/Departments"));

export const WhoWeAre = lazy(() => import("./about/WhoWeAre"));
export const WhyChooseUs = lazy(() => import("./about/WhyChooseUs"));
export const Testimonials = lazy(() => import("./about/Testimonials"));

export const ReachUs = lazy(() => import("./contact/ReachUs"));
