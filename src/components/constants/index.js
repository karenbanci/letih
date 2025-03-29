import BtnGreen from "../BtnGreen.js";
import BtnWhite from "../BtnWhite.js";

export const ourMission =
  "Providing personalized esthetics services that focus on detoxifying the skin and body to promote overall health and wellbeing.";

export const ourVision =
  "To be the leading provider of esthetics services that promote detoxification, rejuvenation, and overall wellness.";

export const warmerApproach =
  "We believe in treating the whole person, focusing on mental and bodily well-being with a lot of attention and affection.";

export const qualityService =
  "We provide individualized treatments that address each client's unique needs and concerns, ensuring that they leave feeling refreshed, revitalized, and rejuvenated. Our brand offers quality services.";

export const transparencyAndHonesty =
  "We prioritize education transparency and honesty: empowering our clients to make informed decisions about what services and how it works, based on the science of the techniques of each service with the expectation of each client.";

export const behindTheScenes =
  "My name is Leticia Martins. I was born in Brazil in 1993, in a small town in the south of the country. I come from the countryside and was raised with a simple life full of love and innocence. In Brazil in the year 2011 my journey as an Esthetician started, over 10 years of experience and studies in the field of beauty. In the United States of America, also certified and licensed as Master Esthetician and completed several other professional master’s courses in the field. My goal in this career is always seeking new techniques, equipment and advancements for my clients, so everyone can leave my space extremely satisfied. Working as an Master Esthetician is one of my dreams that came true and I live it everyday. Are you ready to elevate your natural beauty? Make you appointment today.";

// Link footer
export const footerLinks = [
  {
    id: 1,
    title: "instagram social media icon",
    icon: "/images/icon-instagram.svg",
    url: "/",
  },
  {
    id: 2,
    title: "linkedin social media icon",
    icon: "/images/icon-linkedin.svg",
    url: "/about",
  },
  {
    id: 3,
    title: "google ",
    icon: "/images/icon-google.svg",
    url: "/services",
  },
];

// Array contendo os dados para cada seção "About Us"
export const aboutUsSections = [
  {
    imgSrc: "images/home-about-us-women.webp",
    altText: "women with leaf in her hair",
    title: "You deserve it!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium.",
    isButtonVisible: false,
    containerClass: "about-us-top",
    imgClass: "about-us-img-left", // Classe para a imagem
    textClass: "about-us-top-right", // Classe para o texto
    h5Style: "special-style",
  },
  {
    imgSrc: "images/home-about-us-bed.webp",
    altText: "women with leaf in her hair",
    title: "You deserve it!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium.",
    isButtonVisible: true,
    containerClass: "about-us-bottom",
    textClass: "about-us-bottom-left",
    h5Style: "special-style",
  },
];

// Array de objetos de serviço
export const services = [
  {
    imgSrc: "images/service-01.webp",
    title: "Deep Facial",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnWhite>Learn More</BtnWhite>,
    containerClass: "green-services",
    contentClass: "green-right",
    h5Style: "special-title-white",
  },
  {
    imgSrc: "images/service-02.webp",
    title: "Body Detox",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnGreen>Learn More</BtnGreen>,
    containerClass: "white-services",
    contentClass: "white-left",
    h5Style: "special-title-green",
  },
  {
    imgSrc: "images/service-03.webp",
    title: "Ultraformer III",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnWhite>Learn More</BtnWhite>,
    containerClass: "green-services",
    contentClass: "green-right",
    h5Style: "special-title-white",
  },
  {
    imgSrc: "images/service-04.webp",
    title: "Belly Reducing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnGreen>Learn More</BtnGreen>,
    containerClass: "white-services",
    contentClass: "white-left",
    h5Style: "special-title-green",
  },
  {
    imgSrc: "images/service-05.webp",
    title: "RF Microneedling",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnWhite>Learn More</BtnWhite>,
    containerClass: "green-services",
    contentClass: "green-right",
    h5Style: "special-title-white",
  },
  {
    imgSrc: "images/service-06.webp",
    title: "Skin Care Routine",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnGreen>Learn More</BtnGreen>,
    containerClass: "white-services",
    contentClass: "white-left",
    h5Style: "special-title-green",
  },
  {
    imgSrc: "images/service-07.webp",
    title: "Glow Facial",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodon pretium.",
    btnComponent: <BtnWhite>Learn More</BtnWhite>,
    containerClass: "green-services",
    contentClass: "green-right",
    h5Style: "special-title-white",
  },
];
export const advantages = [
  {
    imgSrc: "images/icon_history.svg",
    altText: "Icon of history",
    title: "Flexibility",
    description:
      "Our commitment is to provide an unparalleled quality of service to our clients, setting new industry standards.",
  },
  {
    imgSrc: "images/icon_page_search.svg",
    altText: "Icon of page search",
    title: "Transparency",
    description:
      "Our commitment is to provide an unparalleled quality of service to our clients, setting new industry standards.",
  },
  {
    imgSrc: "images/icon_data_quality.svg",
    altText: "Icon of data quality",
    title: "Quality",
    description:
      "Our commitment is to provide an unparalleled quality of service to our clients, setting new industry standards.",
  },
  {
    imgSrc: "images/icon_spa.svg",
    altText: "Icon of spa",
    title: "Promoting Wellness",
    description:
      "Our commitment is to provide an unparalleled quality of service to our clients, setting new industry standards.",
  },
];
export const facialDeepCleasing = [
  {
    title: "1 - Deep Cleasing Facial",
    whatIs: "What is a Deep Cleansing Facial?",
    whatIsDescription:
      "Our Deep Cleansing Facial is designed to thoroughly cleanse the skin and help issues like clogged pores, blackheads, and impurities.",
    benefits: "What are the benefits?",
    benefitsDescription:
      "The benefits are preventing acne breakouts, improving overall skin texture, appearance and maintaining healthy skin. ",
    benefitsRecommendations:
      "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    timeTitle: "Time:",
    timeDescription: "1 hour and 30 minutes.",
    PriceTitle: "Price:",
    priceDescription: "$145",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
    facialDeepCleasingSupplementary: [
      {
        id: "1",
        title: "Cleansing:",
        description: "The skin is cleansed to remove makeup, dirt, and oil.",
      },
      {
        id: "2",
        title: "Exfoliation:",
        description:
          "An exfoliant is used to slough off dead skin cells, promoting a smoother complexion",
      },
      {
        id: "3",
        title: "Steam:",
        description:
          "Steam is applied to the face to open pores and soften the skin, making it easier to extract impurities.",
      },
      {
        id: "4",
        title: "Extraction:",
        description:
          "The esthetician manually extracts blackheads, whiteheads, and other debris from the pores using specialized tools.",
      },
      {
        id: "5",
        title: "Hydra Face Machine:",
        description:
          "Helps to remove dead skin, blackheads, and improves blood circulation.",
      },
      {
        id: "6",
        title: "High frequency face machine:",
        description:
          "It works by generating a high frequency current that is applied to the skin via a glass electrode. The current has antibacterial properties that can help kill acne-causing bacteria on the skin. It also helps reduce inflammation.",
      },
      {
        id: "7",
        title: "Mask:",
        description:
          "A mask suited to your skin type (such as clay for oily skin or hydrating for dry skin) is applied to further draw out impurities and nourish the skin.",
      },
      {
        id: "8",
        title: "LED light Therapy:",
        description:
          "It works by emitting light energy onto the skin cells, which then converts it into cellular energy.",
      },
    ],
  },
];

export const facialDermaplaning = [
  {
    title: "2- Deep Cleansing Facial + Dermaplaning",
    whatIs: "What is a Deep Cleansing Facial + Dermaplaning ?",
    whatIsDescription:
      "Combining a Deep Cleansing Facial with Dermaplaning offers comprehensive skincare, targeting surface issues like dullness and texture, as well as deeper concerns like clogged pores and aging. It's ideal for immediate and long-term skin improvement.",
    benefits: "What are the benefits?",
    benefitsDescription:
      "Combining deep cleansing with dermaplaning removes dead skin cells, dirt, oil, and peach fuzz, resulting in smoother, brighter skin and unclogged pores. This process also enhances product absorption, allowing skincare treatments to penetrate more effectively. The smooth surface left by dermaplaning ensures flawless makeup application and provides an immediate boost in skin texture and radiance.",
    benefitsRecommendations:
      "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    timeTitle: "Time:",
    timeDescription: "1 hour and 30 minutes.",
    PriceTitle: "Price:",
    priceDescription: "$145",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
    facialDermaplaningSupplementary: [
      {
        id: "1",
        title: "Cleansing:",
        description: "The skin is cleansed to remove makeup, dirt, and oil.",
      },
      {
        id: "2",
        title: "Exfoliation:",
        description:
          "An exfoliant is used to slough off dead skin cells, promoting a smoother complexion.",
      },
      {
        id: "3",
        title: "Steam:",
        description:
          "Steam is applied to the face to open pores and soften the skin, making it easier to extract impurities.",
      },
      {
        id: "4",
        title: "Extraction:",
        description:
          "The esthetician manually extracts blackheads, whiteheads, and other debris from the pores using specialized tools.",
      },
      {
        id: "5",
        title: "Hydra Face Machine:",
        description:
          "Helps to remove dead skin, Blackhead and Improves Blood circulation.",
      },
      {
        id: "6",
        title: "Dermaplaning:",
        description:
          "Uses a sterile scalpel to gently shave away dead skin cells and peach fuzz.",
      },
      {
        id: "7",
        title: "High frequency face machine:",
        description:
          "Applies a high-frequency current via a glass electrode to kill acne-causing bacteria and reduce inflammation.",
      },
      {
        id: "8",
        title: "Mask:",
        description:
          "A mask tailored to your skin type is applied to remove impurities and nourish the skin.",
      },
      {
        id: "9",
        title: "LED light Therapy:",
        description:
          "Emits light energy that converts into cellular energy for skin benefits.",
      },
    ],
  },
];
export const facialGlowFacial = [
  {
    title: "3 - Glow Facial",
    whatIs: "What is a Deep Cleansing Facial?",
    whatIsDescription:
      "Combining a Facial, Dermaplaning, and vitamin C microneedling rejuvenates the skin, addressing dullness, uneven texture, pigmentation, and aging for a brighter, youthful complexion.",
    benefits: "What are the benefits for the skin?",
    benefitsDescription:
      "This treatment enhances vitamin C absorption through Dermaplaning and microneedling, allowing deeper penetration for brighter, more even skin tone. The combination boosts collagen production, reduces fine lines, and improves skin texture, leaving the complexion smoother and rejuvenated.Vitamin C also provides powerful antioxidant protection, guarding against environmental damage and premature aging. It hydrates the skin, enhances moisture retention, and refines the skin's texture, resulting in a radiant and youthful appearance.",
    benefitsRecommendations:
      "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    timeTitle: "Time:",
    timeDescription: "2 hours.",
    PriceTitle: "Price:",
    priceDescription: "$180",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
    facialGlowSupplementary: [
      {
        id: "1",
        title: "Cleansing:",
        description: "The skin is cleansed to remove makeup, dirt, and oil.",
      },
      {
        id: "2",
        title: "Exfoliation:",
        description:
          "An exfoliant is used to slough off dead skin cells, promoting a smoother complexion.",
      },
      {
        id: "3",
        title: "Steam:",
        description:
          "Steam is applied to the face to open pores and soften the skin, making it easier to extract impurities.",
      },
      {
        id: "4",
        title: "Hydra Face Machine:",
        description:
          " Helps to remove dead skin, Blackhead and Improves Blood circulation.",
      },
      {
        id: "5",
        title: "Dermaplaning:",
        description:
          "Uses a sterile scalpel to gently shave away dead skin cells and peach fuzz.",
      },
      {
        id: "6",
        title: "Vitamin C Infusion with Dr Pen Device:",
        description:
          " Microneedling with Dr. Pen creates micro channels that allow vitamin C serum to penetrate deeply, boosting its absorption and effectiveness.",
      },
      {
        id: "7",
        title: "Mask:",
        description:
          "A mask suited to your skin type (such as clay for oily skin or hydrating for dry skin) is applied to further draw out impurities and nourish the skin.",
      },
      {
        id: "8",
        title: "High frequency face machine:",
        description:
          "Applies a high-frequency current via a glass electrode to kill acne-causing bacteria and reduce inflammation.",
      },
      {
        id: "9",
        title: "LED light Therapy:",
        description:
          "It works by emitting light energy onto the skin cells, which then converts it into cellular energy. ",
      },
    ],
  },
];
export const serviceUltraformer = [
  {
    title: "HIFU – High Intensity Focused Ultrasound (Ultraformer III)",
    whatIsDescription:
      " HIFU (High-Intensity Focused Ultrasound) lifts the skin by targeting the deep muscle layer, crucial for preventing sagging. It's effective for skin lifting, tightening, and improving lines, wrinkles, pores, and skin tone.",
    benefits: "What does the treatment do?",
    benefitsDescription:
      "The HIFU uses dermal micro-heating for a multi-layered lifting, tightening and rejuvenation effect. It promotes maximum collagen production meaning smoother, plumper, more youthful skin!",
    benefitsRecommendations:
      "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
    HIFUTreatmentInfo: [
      {
        id: "1",
        title: "How many sessions of treatments is recommended?",
        description:
          "One treatment a year is often enough for most people between 30 to 40 years old. However, you may require a second one to achieve your dream results. Follow up treatments usually require an interval of 6 months in between treatment times. The results can last up to a year to six months so you may decide to have a follow up treatment when the results start to wear off.",
      },
      {
        id: "2",
        title: "Which areas does HIFU treat?",
        description:
          "Full Face, necks, eyelids, chins, jawlines, brows, and regions experiencing wrinkling or sagging. HIFU  provides lifting, skin tightening, wrinkle reduction, pore improvement, V-line forming. Jowl line enhancement, cheek lifting, skin tone improvement, and overall laxity improvement.",
      },
      { title: "What are the benefits of HIFU?" },
    ],
    serviceUltraformerSupplementary: [
      {
        id: "1",
        title: "Improves skin texture and tone:",
        description:
          "Stimulates the production of collagen and elastin, which helps to improve the texture and tone of the skin, giving it a younger and healthier appearance.",
      },
      {
        id: "2",
        title: "Reduction of fine lines and wrinkles:",
        description:
          "The treatment can help reduce the appearance of fine lines and wrinkles. especially around the eyes, mouth and forehead.",
      },
      {
        id: "3",
        title: "Decreased skin sagging:",
        description:
          "The treatment can help improve skin firmness especially in areas such as the face and neck.",
      },
      {
        id: "4",
        title: "No Significant Recovery Time:",
        description:
          "As the treatment is non-invasive. there is no significant recovery time allowing patients to resume their daily activities immediately after treatment.",
      },
      {
        id: "5",
        title: "Gradual and lasting results:",
        description:
          "Treatment results usually appear gradually over time and can last for several months.",
      },
    ],
  },
];
export const serviceMicroneedling = [
  {
    title: "RF Microneedling ",
    whatIsDescription:
      "Radiofrequency microneedling (commonly called RF microneedling) is a noninvasive skin rejuvenation treatment that enhances the collagen-boosting benefits of microneedling with the heat of radiofrequency energy.",
    benefits: "What does the treatment do?",
    benefitsDescription:
      "In experienced hands, this potent combination can effectively treat a range of concerns, including:",
    benefitsItems: [
      "Uneven skin texture",
      "Large pores",
      "Fine lines and wrinkles",
      "Skin laxity",
      "Acne scars ( depending on level of the damage on the skin).",
    ],
    benefitsRecommendations:
      "The frequency of the procedure can be every 30 days or every 3 months, depending on the client's concerns and the overall health of their skin.",
    fullFace: "Price Full Face:",
    fullFaceDescription: "$250 - Single Session",
    fullFaceSecondOption: "Price Full Face:",
    fullFaceSecondOptionDescription:
      "$585 - Package with 3 session, every 30 days",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
    microneedlingInfo: [
      {
        id: "1",
        includes:
          "The most common treatment areas include the face, neck, and decolletage.",
        howItWorks:
          "RF microneedling works by creating controlled microdamage from both the ultra-fine needles and heat. This stimulates the body's natural wound-healing response, kick-starting the biological processes that create new collagen and elastin.",
        observation:
          "Aging and environmental damage (particularly sun damage) break down these essential structural proteins, and the rate of replacement slows over time. Procedures like RF microneedling can slow and even temporarily reverse this process, helping skin look and even act younger. However, this isn't a risk-free procedure.",
      },
    ],
  },
];
export const serviceRoseDeMer = [
  {
    title: "ROSE DE MER PEEL",
    whatIs: "What is ROSE DE MER PEEL?",
    whatIsDescription:
      "It is a 100% natural professional Peel for skin renewal and healing with 5-7 days.",
    whatContains: "What contains in it?",
    whatContainsItems: [
      "Coral powde",
      "Bio Stimulating plants",
      "Dead Sea Salt",
      "Ascorbic Acid (Vit C)",
      "Arnica Extract ",
      "Giant Kelp Extract",
      "Resveratrol",
      "Bio plasma FA",
    ],
    firstSessionTitle: "First Session:",
    firstSessionDescription: "Includes Rose de Mer Protocol Peel ",
    firstSessionTimeTitle: "First Session Time:",
    firstSessionTimeDescription: "1 hour",
    secondSessionTitle: "Second Session:",
    secondSessionDescription: "7 days after the first session",
    secondSessionItem: [
      "Include: Exfoliation, Microdermabrasion, High Frequency, LED Therapy",
    ],
    secondSessionTimeTitle: "Second Session Time:",
    secondSessionTimeDescription: "1h 30min",
    priceTitle: "Price:",
    price: "$350",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
    roseDemerPeelGuidelines: [
      {
        id: "1",
        title: "What is this treatment for?",
        description: [
          "Minimizes Scars in general. Helps with Rejuvenation.",
          "Minimizes large pores. Rehabilitation of mature skin.",
          "Rehabilitation of problematic oily skin. Minimizes hyperpigmentation.",
          "Minimizes hyperpigmentation post acne inflammation. Better Skin Texture.",
        ],
      },
      {
        id: "2",
        title: "What NOT to do before ROSEDEMER PEEL",
        description: [
          "Chemical peels.",
          "Not being in use of any skin care at home, just what the Esthetician allowed to you - 7 days before the procedure.",
          "No exfoliation for 5 days before the section.",
          "No hair removal by: Laser, waxing, cream, threading, dermaplaning. No IPL/ RF or other facial treatment before 7 days.",
          "No expose to the sun (3 days before the section treatment).",
          "No expose to the cold and windy weather (3 days before the section treatment).",
        ],
      },
      {
        id: "3",
        title: "What NOT to do after ROSEDEMER PEEL",
        description: [
          "Not sun expose for 30 days after the first section - Beach/ Hiking/ outside activity",
          "That will expose you to high UVB-UVA rays. Not exposed in the windy or cold weather.",
          "Not apply sunscreen in the first 2 days after the section. Not wear mask on the face.",
          "Not go outside the house if your skin is peeling. Not using hair dryer close to the face.",
          "Not pulling on or rubbing the peeling skin, it may become raised or flaky in the exfoliation process. It will peel off nature.",
          "Do not go to the gym or do exercise in the first 5 days of the treatment.",
          "Not apply anything different on your face, just what your Esthetician recommended to you.",
        ],
      },
      {
        id: "4",
        title: "What you MUST do after ROSEDEMER PEEL",
        description: [
          "Trying to stay inside the house in the first 2-3 days.",
          "Follow the skin care protocol that your Esthetician will provide you. Below is the POST KIT PEEL that you will use at home.",
        ],
      },
    ],
    secondPhotoimg: "images/home-about-us-bed.webp",
  },
];
export const serviceBodyDetox = [
  {
    title: "BodyDetox Contouring?",
    whatIsDescription:
      "Body Detox Contouring is a non-invasive cosmetic treatment designed to improve the body's appearance by targeting cellulite, firming the skin, and contouring specific areas. The procedure typically involves a combination of techniques such as:",
    additionalWhatIsDescription:
      "  The goal of Body Detox Contouring is to achieve a more toned and sculpted appearance, often with a focus on problem areas like the abdomen, thighs, and buttocks. It is usually marketed as a way to enhance body aesthetics without the need for surgical procedures.",
    timeTitle: "Time:",
    timeDescription: "1 hour and 45 minutes.",
    PriceTitle: "Single Session Price:",
    priceDescription: "$150",
    packagePriceTitle: "Package Price",
    packagePrice: "4 Session $560",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
    benefits: {
      treatmentBenefits: {
        mainTitle: "What are the benefits of this treatment?",
        mainDescription: [
          {
            id: "1",
            title: "Detoxification:",
            description:
              "The treatment aims to eliminate toxins from the body through various methods, such as wraps, masks, or detoxifying creams applied to the skin. This can help improve overall skin health and reduce fluid retention.",
          },
          {
            id: "2",
            title: "Lymphatic Drainage: ",
            description:
              "This helps to remove excess fluid and waste products from tissues, reducing swelling and improving the appearance of cellulite.",
          },
          {
            id: "3",
            title: "Skin Firming and Tightening:",
            description:
              " Ingredients like caffeine, collagen, elastin, and herbal extracts are included in products used during Body Detox Contouring. These ingredients can help to tighten and firm the skin, giving it a smoother and more toned appearance.",
          },
          {
            id: "4",
            title: "Cellulite Reduction:",
            description:
              " Cellulite is often targeted in Body Detox Contouring. Techniques such as massage, radiofrequency, or ultrasound is used to break down fat deposits and improve the appearance of dimpled skin.",
          },
          {
            id: "5",
            title: "Improvement in Skin Texture:",
            description:
              "It help to improve skin texture by exfoliating dead skin cells and promoting cell turnover. This results in softer, smoother skin.",
          },
        ],
      },
      includesInBodyDetox: {
        mainTitle: "What is included in the Body Detox Contouring?",
        mainDescription: [
          {
            id: "1",
            description:
              "Body Contouring movements: Firm/ fast/ strong movements throughout the body. Helps active and enhance the blood circulation system, contributing to a firm skin texture",
          },
          {
            id: "2",
            description:
              "Lymphatic Drainage: Pumping movements in the lymph glands and throughout the body. It helps to speed up the lymphatic system, reducing edema and removing the accumulation of fluid in the body.",
          },
          {
            id: "3",
            title: "EMS (Electrical Muscle Stimulation) machine:",
            description:
              "Designed to help the belly muscles with electrical currents to stimulate the abdominal muscles. This help for toning, strengthening, and potentially tightening the muscles in the abdominal area.",
          },
          {
            id: "4",
            title: "INFRARED SAUNA BLANKET:",
            description:
              " It helps to dilate the blood vessels and increase circulation all throughout the body, increased blood flow and helping to relax the muscles and nerves of the body.",
          },
        ],
      },
    },
  },
];

export const serviceSkinCareRoutine = [
  {
    title: "Skin Care Routine",
    whatIsDescription:
      "HIFU (High-Intensity Focused Ultrasound) lifts the skin by targeting the deep muscle layer, crucial for preventing sagging. It's effective for skin lifting, tightening, and improving lines, wrinkles, pores, and skin tone.",
    benefits: "What does the treatment do?",
    benefitsDescription:
      "The HIFU uses dermal micro-heating for a multi-layered lifting, tightening and rejuvenation effect. It promotes maximum collagen production meaning smoother, plumper, more youthful skin!",
    benefitsRecommendations:
      "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns",
    timeTitle: "Time:",
    timeDescription: "1 hour and 30 minutes.",
    PriceTitle: "Price:",
    priceDescription: "$145",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
  },
];
export const serviceBellyReducing = [
  {
    title: "Belly Reducing",
    whatIsDescription:
      "HIFU (High-Intensity Focused Ultrasound) lifts the skin by targeting the deep muscle layer, crucial for preventing sagging. It's effective for skin lifting, tightening, and improving lines, wrinkles, pores, and skin tone.",
    benefits: "What does the treatment do?",
    benefitsDescription:
      "The HIFU uses dermal micro-heating for a multi-layered lifting, tightening and rejuvenation effect. It promotes maximum collagen production meaning smoother, plumper, more youthful skin!",
    benefitsRecommendations:
      "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    timeTitle: "Time:",
    timeDescription: "1 hour and 30 minutes.",
    PriceTitle: "Price:",
    priceDescription: "$145",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc: "images/home-about-us-bed.webp",
    treatmentsRecommended: {
      sessionsRecomended: {
        mainTitle: "How many sessions of treatments is recommended?",
        mainDescription: [
          {
            id: "1",
            description:
              "One treatment a year is often enough for most people between 30 to 40 years old. However, you may require a second one to achieve your dream results. Follow up treatments usually require an interval of 6 months in between treatment times. The results can last up to a year to six months so you may decide to have a follow up treatment when the results start to wear off.",
          },
        ],
      },
      hifuTreats: {
        mainTitle: "Which areas does HIFU treat?",
        mainDescription: [
          {
            id: "1",
            description:
              "Full Face, necks, eyelids, chins, jawlines, brows, and regions experiencing wrinkling or sagging.",
          },
          {
            id: "2",
            description:
              "HIFU  provides lifting, skin tightening, wrinkle reduction, pore improvement, V-line forming. Jowl line enhancement, cheek lifting, skin tone improvement, and overall laxity improvement",
          },
        ],
      },
    },
    beneditsOfHifuTitle: "What are the benefits of HIFU?",
    beneditsOfHifu: [
      {
        id: "1",
        title: "Improves skin texture and tone:",
        description:
          "stimulates the production of collagen and elastin, which helps to improve the texture and tone of the skin, giving it a younger and healthier appearance.",
      },
      {
        id: "2",
        title: "Reduction of fine lines and wrinkles: ",
        description:
          "The treatment can help reduce the appearance of fine lines and wrinkles. especially around the eyes, mouth and forehead.",
      },
      {
        id: "3",
        title: "Decreased skin sagging:",
        description:
          "The treatment can help improve skin firmness especially in areas such as the face and neck.",
      },
      {
        id: "4",
        title: "No Significant Recovery Time:",
        description:
          "As the treatment is non-invasive. there is no significant recovery time allowing patients to resume their daily activities immediately after treatment.",
      },
      {
        id: "5",
        title: "Gradual and lasting results: ",
        description:
          "Treatment results usually appear gradually over time and can last for several months",
      },
    ],
  },
];
export const prices = [
  {
    id: "1",
    title: "I - Upper Eye",
    time: "Time: 45min",
    includes: "Includes: Eyes area + Fox Eye + Glabella",
    price: "$180",
  },
  {
    id: "2",
    title: "II - Full Face",
    time: "Time: 2h",
    includes: "Includes:  Eyes area + FoxEye + Glabella + Cheeks + Double Chin",
    price: "$450",
  },
  {
    id: "3",
    title: "III - Cheeks + Double Chin",
    time: "Time: 1h",
    price: "$320",
  },
  { id: "4", title: "IV - Decollete", time: "Time: 45min", price: "$180" },
  {
    id: "5",
    title: "V - Full face + Neck + Decollete",
    time: "Time: 2h 15min",
    price: "$600",
  },
];
export const warnings = [
  {
    warningDeepCleasing:
      "Contraindication to the FACIAL treatments : in case of use of steroids or anticoagulants in the last 3 months, skin wounds, signs of skin infection or cancer.",
  },
  {
    warningUltraformer: [
      {
        id: "1",
        title: "CONTRAINDICATION TO THE FACIAL TREATMENTS:",
        items: [
          "ACUTE INFECTIONS",
          "HEART FAILURE",
          "HYPERTENSION",
          "DECOMPENSATED DIABETES",
          "PHLEBITIS",
          "THROMBOSIS",
          "THROMBOPHLEBITIS",
          "UNTREATED SKIN CONDITIONS",
          "CANCER",
          "BRONCHIAL ASTHMA AND ASTHMATIC BRONCHITIS",
          "HYPERTHYROIDISM",
          "IMMUNOSUPPRESSION",
          "RENAL FAILURE DEPENDENT ON DIURETICS OR DIALYSIS.",
        ],
      },
    ],
  },
  {
    warningRoseDeMer: [
      {
        id: "2",
        title: "CONTRAINDICATION TO ROSE DE MER PEEL:",
        items: [
          "IF YOU ARE ALLERGIC TO SEA FOOD. ACUTE ACNE.",
          "SKIN CLOGGED WITH BACKHEADS.",
          "MELASMA DIAGNOSED BY A DERMATOLOGIST DOCTOR. PREGNANT/ PRETEND TO BECOME/ BREASTFEEDING. TAKING DEPRESSION/ PANICK ATTACK MEDICINE.",
          "TAKING ORAL OR TOPIC ACCUTANE (AFTER 6 MONTHS IS ALLOWED). TAKING ORAL OR TOPIC RETINOL-A OR OTHER ACID.",
          "ANY SKIN INFLAMMATION: ECZEMA/ DERMATITIS/ PSORIASIS/ ROSACEA (ACTIVE)/ ALOPECIA AND MORE. ",
          "EXPECTED EXPOSURE TO THE SUN IN THE NEXT DAYS. HERPES (ACTIVE)",
          "HAVE CANCER OR TUMOR DIABETIC NOT CONTROLLED.",
          "ALLERGIC TO SUNCREEN INGREDIENTS.",
        ],
      },
    ],
  },
];
