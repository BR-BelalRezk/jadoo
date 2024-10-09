import service_1 from "../assets/service_1.svg";
import service_2 from "../assets/service_2.svg";
import service_3 from "../assets/service_3.svg";
import service_4 from "../assets/service_4.svg";
import destination_1 from "../assets/destination_1.png";
import destination_2 from "../assets/destination_2.jpg";
import destination_3 from "../assets/destination_3.png";
import booking_1 from "../assets/booking_1.svg";
import booking_2 from "../assets/booking_2.svg";
import booking_3 from "../assets/booking_3.svg";
import logo_1 from "../assets/logo_1.png";
import logo_2 from "../assets/logo_2.png";
import logo_3 from "../assets/logo_3.png";
import logo_4 from "../assets/logo_4.png";
import logo_5 from "../assets/logo_5.png";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

import googlePLay from "../assets/googlePLay.png";
import appleStore from "../assets/appleStore.png";

export const navbarItems = [
  "desitnations",
  "hotels",
  "flights",
  "bookings",
] as const;
export const navbarActions = ["Login", "Sign up"] as const;

export const services = [
  {
    image: service_1,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    active: false,
  },
  {
    image: service_2,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    active: true,
  },
  {
    image: service_3,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    active: false,
  },
  {
    image: service_4,
    title: "Customization",
    description:
      "We deliver outsourced viation services for military customers",
    active: false,
  },
] as const;

export const desitnations = [
  { image: destination_1, country: "Rome, Italty", price: "$5,42k", days: 10 },
  { image: destination_2, country: "London, UK", price: "$4.2k", days: 12 },
  { image: destination_3, country: "Full Europe", price: "$15k", days: 28 },
] as const;

export const bookings = [
  { title: "Choose Destination", image: booking_3 },
  { title: "Make Payment", image: booking_2 },
  { title: "Reach Airport on Selected Date", image: booking_1 },
];

export const logos = [logo_1, logo_2, logo_3, logo_4, logo_5] as const;

export const footerCol_1 = ["About", "Careers", "Mobile"];
export const footerCol_2 = ["Help/FAQ", "Press", "Affilates"];
export const footerCol_3 = ["Airlinefees", "Airline", "Low fare tips"];

export const footerSocials = [facebook, instagram, twitter];

export const footerMobile = [googlePLay, appleStore];
