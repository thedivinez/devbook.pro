import { Movie } from "../types/types";
import CardPayments from "../components/cardpayment";
import CryptoPayments from "../components/cryptopayments";

const movies: Movie[] = [
    {
        id: "alone",
        cake: "70%",
        price: 100,
        tomato: "80%",
        title: "Alone",
        duration: "1 Hour",
        image: "/images/movie/movie01.jpg",
    },
    {
        id: "mars",
        cake: "60%",
        price: 60,
        title: "Mars",
        tomato: "90%",
        duration: "1 Hour",
        image: "/images/movie/movie02.jpg",
    },
    {
        id: "venus",
        cake: "70%",
        price: 130,
        title: "Venus",
        tomato: "80%",
        duration: "1 Hour",
        image: "/images/movie/movie03.jpg",
    },
    {
        id: "on-watch",
        cake: "70%",
        price: 125,
        title: "On Watch",
        tomato: "80%",
        duration: "1 Hour",
        image: "/images/movie/movie04.jpg",
    },
    {
        id: "fury",
        cake: "70%",
        price: 100,
        title: "Fury",
        tomato: "80%",
        duration: "1 Hour",
        image: "/images/movie/movie05.jpg",
    },
    {
        id: "trooper",
        cake: "70%",
        price: 100,
        title: "Trooper",
        tomato: "80%",
        duration: "1 Hour",
        image: "/images/movie/movie06.jpg",
    },
    {
        id: "horror-night",
        cake: "70%",
        price: 100,
        title: "Horror Night",
        tomato: "80%",
        duration: "1 Hour",
        image: "/images/movie/movie07.jpg",
    },
    {
        id: "the-lost-name",
        cake: "70%",
        price: 100,
        title: "The Lost Name",
        tomato: "80%",
        duration: "1 Hour",
        image: "/images/movie/movie08.jpg",
    },
    {
        id: "calm-stedfas",
        cake: "70%",
        price: 100,
        title: "Calm Stedfas",
        tomato: "80%",
        duration: "1 Hour",
        image: "/images/movie/movie09.jpg",
    },
    {
        id: "criminal-on-party",
        cake: "70%",
        price: 100,
        title: "Criminal On Party",
        tomato: "80%",
        duration: "1 Hour",
        image: "/images/movie/movie10.jpg",
    },
    {
        cake: "70%",
        tomato: "80%",
        price: 100,
        duration: "1 Hour",
        id: "Halloween-Party",
        title: "halloween party",
        image: "/images/movie/movie11.jpg",
    },
    {
        cake: "70%",
        tomato: "80%",
        price: 100,
        duration: "1 Hour",
        id: "the-most-wanted",
        title: "The Most Wanted",
        image: "/images/movie/movie12.jpg",
    },
    {
        id: "custom",
        cake: "70%",
        price: 130,
        tomato: "80%",
        duration: "1 Hour",
        title: "Your Own Movie",
        image: "/images/movie/movie01.jpg",
    },
]

const paymentMethods = [
    {
        id: "card",
        title: "Credit Card",
        icon: "/images/payment/card.png",
        heading: "Enter Your Card Details",
        content: CardPayments,
    },
    {
        id: "crypto",
        title: "Crypto",
        content: CryptoPayments,
        icon: "/images/payment/card.png",
        heading: "Click the buton below to make a crypto payment",
    },
];

const navItems = [
    {
        link: "/",
        title: "Home",
    },
    {
        title: "About Us",
        link: "/about-us",
    },
    {
        link: "/contact",
        title: "Contact Us",
    },
];

export { movies, paymentMethods, navItems };