import { model3, fiasco, javlin, rsx, integSUV, concept, cyberTruck, surus, user } from "./imageRef";

export const taxis = [
    {
        id: 1,
        name: "Model 3",
        image: model3,
        description: "The Model 3 is a compact electric car that is perfect for city driving and daily commutes.",
        price: Math.round(Math.random() * 100),
        seats: 4,
        exclusive: false,
    },
    {
        id: 2,
        name: "Fiasco",
        image: fiasco,
        description: "The Fiasco is a small and old yet stylish car thats perfect for short trips and city driving with a touch of class.",
        price: Math.round(Math.random() * 100),
        seats: 2,
        exclusive: false,
    },
    {
        id: 3,
        name: "Javelin",
        image: javlin,
        description: "The javalin is a sporty beast that perfect for long cruise drives and impressing the huzz. It even has a roaring engine power ready to be reved!",
        price: Math.round(Math.random() * 100),
        seats: 3,
        exclusive: true,
    },
    {
        id: 4,
        name: "RS X",
        image: rsx,
        description: "The RS X is a high-performance car that was inherited from the RS family. Its unique top speeds and handing make it the perfect car for the rides across city with a touch of its slick design.",
        price: Math.round(Math.random() * 100),
        seats: 4,
        exclusive: true,
    },
    {
        id: 5,
        name: "Int SUV",
        image: integSUV,
        description: "The Integ SUV is a spacious and comfortable vehicle that is ideal for family trips and long journey across the area, prodving incline seats and a smooth ride with noise cancelation.",
        price: Math.round(Math.random() * 100),
        seats: 6,
        exclusive: false,
    },
    {
        id: 6,
        name: "Concept",
        image: concept,
        description: "The concept is a futuristic car built for the sole purpose of quiet and smooth rides. its sleek modern futuristic design its perfect for night rides and cruising in style.",
        price: Math.round(Math.random() * 100),
        seats: 4,
        exclusive: true
    },
    {
        id: 7,
        name: "Cyber Truck",
        image: cyberTruck,
        description: "Cyber truck is the same old. We only took it in becuase of the hype. Its a truck, nothing special. But hey, its a truck. Tesla is failing terrible at this.",
        price: Math.round(Math.random() * 100),
        seats: 8,
        exclusive: true,
    },
    {
        id: 8,
        name: "Surus",
        image: surus,
        description: "The Surus is a large and rugged vehicle that is perfect for off-road adventures and transporting heavy loads. It has a large trunk space and a powerful engine.",
        price: Math.round(Math.random() * 100),
        seats: 4,
        exclusive: true,
    },
]

export const testimonials = [
    {
        id: 1,
        name: "Alice Smith",
        description: "The service was excellent! The driver was punctual and the car was clean and comfortable.",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        id: 2,
        name: "Bob Johnson",
        description: "Great experience! The driver was friendly and got me to my destination quickly.",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        id: 3,
        name: "Omar Choudary",
        description: "I had a pleasant ride. The booking process was easy and the driver was professional.",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        id: 4,
        name: "Diana Prince",
        description: "Reliable service! I will definitely use this taxi company again.",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        id: 5,
        name: "Edward Norton",
        description: "Affordable and efficient. The driver knew the best routes to avoid traffic.",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        id: 6,
        name: "Fiona Gallagher",
        description: "Excellent service! The driver was courteous and the ride was smooth.",
        rating: "⭐⭐⭐⭐⭐",
    },
];

export const faqs = [
    {
        question: "How do I book a taxi?",
        answer: "You can book a taxi through our website or mobile app. Simply enter your pickup and drop-off locations, select your vehicle, and confirm your booking.",
    },
    {
        question: "What are your operating hours?",
        answer: "We operate 24/7, so you can book a ride at any time of the day or night.",
    },
    {
        question: "How can I pay for my ride?",
        answer: "We accept various payment methods including credit/debit cards, PayPal, and cash. You can choose your preferred payment method when booking your ride.",
    },
    {
        question: "Are your drivers licensed and insured?",
        answer: "Yes, all our drivers are fully licensed and insured to ensure your safety and peace of mind.",
    },
    {
        question: "Will these cars impress the huzz?",
        answer: "Yes. These cars will impress the huzz. They are designed to impress the huzz. The huzz will be impressed. The huzz will be impressed. They will love it.",
    },
];

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Cars", href: "/#cars" },
    { label: "FAQs", href: "/#faqs" },
  ];


export const footerLinks = [
    { href: "/book", label: "Book now" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];


export const drivers = [
    {
        id: 1,
        name: "Omar Choudary",
        image: user,
        ridesCompleted: Math.round(Math.random() * 100),
        rating: Math.round(Math.random() * 100),
        description: "Omar is known for his friendly demeanor and excellent driving skills. He ensures a smooth and enjoyable ride for all passengers.",
    },
    {
        id: 2,
        name: "Parsa Daemi",
        image: user,
        ridesCompleted: Math.round(Math.random() * 100),
        rating: Math.round(Math.random() * 100),
        description: "Parsa is a professional driver with a passion for cars. He always goes the extra mile to provide a comfortable and safe journey.",
    },
    {
        id: 3,
        name: "Ilyas Busfield",
        image: user,
        ridesCompleted: Math.round(Math.random() * 100),
        rating: Math.round(Math.random() * 100),
        description: "Ilyas is a reliable driver who knows the city inside out. He ensures timely arrivals and a pleasant ride experience.",
    },
    {
        id: 4,
        name: "Youcef ....",
        image: user,
        ridesCompleted: Math.round(Math.random() * 100),
        rating: Math.round(Math.random() * 100),
        description: "Youcef is a courteous driver with a knack for making passengers feel at ease. He is dedicated to providing top-notch service.",
    }
]