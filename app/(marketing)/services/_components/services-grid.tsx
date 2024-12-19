"use client";

import ServiceCard from "./service-card";

const services = [
  {
    text: "International Clients",
    url: "/services/international-clients",
    description:
      "With the world becoming more interlinked more than ever. This has enabled people to invest in different countries around the world with the UK being the beneficiary of this. Here at Private Property finance, we understand the challenges and complexities of trying to purchase a property in the UK. We work with a range of lenders that suit different circumstances. From high street banks and specialist lenders to family offices we have access to a broad range of lenders. ",
    image: "https://utfs.io/f/K39jtZpI79HTG8Z5GOUxpmUkFZ3vN8n0QhHuTJfdcDeSVEbW",
  },
  {
    text: "Bridging Finance",
    url: "/services/bridging-finance",
    description:
      "A bridging loan is a flexible, short-term financing option, often used by individuals and businesses to quickly secure funds against residential, commercial, or land assets. Unlike a traditional commercial mortgage, a bridging loan offers a much faster application and release of funds, making it ideal when timing is critical. It can also be arranged on properties that may not meet traditional mortgage criteria, and in certain cases, it's available even if the applicant has limited or no income. At Private Property Finance we have access to the most competitive rates from lenders",
    image: "https://utfs.io/f/K39jtZpI79HTa5DysXjGkOEQrPXfC93oxns05VjupRNiwHdq",
  },
  {
    text: "Care Home Finance",
    url: "/services/care-home-finance",
    description:
      "As the UK population ages, the demand for care homes has steadily increased. This growing sector attracts both seasoned professionals and new entrants, underscoring the need for knowledgeable financial partners. At Private Property Finance, we are proud of our deep expertise in this field. We collaborate with top-tier property valuers, experienced solicitors, and diverse funders that suit various levels of experience. Our comprehensive approach ensures that regardless of your expertise in the market, we are equipped to provide you with the support and solutions necessary to thrive in the evolving landscape of care home investments.",
    image: "https://utfs.io/f/K39jtZpI79HTLnu6ojavtNHz5b4xcMAIjaUTm76ykGWZdwVR",
  },
  {
    text: "Buy-to-Let Mortgages",
    url: "/services/buy-to-let-mortgages",
    description:
      "The Buy-to-Let sector has undergone significant evolution, adapting to new regulations and the introduction of stress tests on rental income. Whether you are investing in a single property, managing a multiple property portfolio, or involved in Purpose-Built Student Accommodation (PBSA), we understand the complexities you face. Here at Private Property Finance, we collaborate with a diverse array of lenders offering various Loan-to-Value ratios and minimum income criteria designed to match the unique circumstances of each investment. Our tailored approach ensures that we can find the right financial solutions to meet your specific needs, helping you navigate the ever-changing landscape of the BTL market with confidence and success.",
    image: "https://utfs.io/f/K39jtZpI79HTTtg7lvbGOarLHPxu5ktKBbszR7np6Uc4DjwC",
  },
  {
    text: "Development Funding",
    url: "/services/development-funding",
    description:
      "We partner with a diverse network of development lenders, offering tailored funding solutions for clients across the sector. Whether you are a private individual looking to build or renovate a home to live in, an emerging developer taking on your first project, or an experienced operator undertaking large-scale developments, we can secure the right financing to fit your needs. Our lenders support projects of all sizes, from single property renovations to multi-unit residential and commercial builds designed for sale or rental. With our guidance, we will have access to competitive rates and flexible terms that help bring your development vision to life.",
    image: "https://utfs.io/f/K39jtZpI79HTKxEK2tpI79HTC0EGhxwWPNok4Xn3MZUgY58B",
  },
  {
    text: "Commercial Mortgages",
    url: "/services/commercial-mortgages",
    description:
      "Looking to expand your business with a new property or land acquisition? Our tailored commercial mortgage services provide the financing solutions you need. A commercial mortgage, sometimes referred to as a business mortgage, is a loan secured against non-residential property, enabling you to purchase or refinance real estate for commercial purposes. We understand the unique needs of businesses and offer competitive rates and flexible terms to help you achieve your goals, whether you're acquiring office space, retail units, industrial warehouses, or investment properties. Let us guide you through the process and secure the right financing to fuel your business growth.",
    image: "https://utfs.io/f/K39jtZpI79HTjuQAdktwKrBcD6ZvhzxECN9oHM1stI7fXugq",
  },
];



export default function ServicesGrid() {


  return (
    <div className="container max-w-7xl mx-auto px-4 py-12" >
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.url} service={service} />
        ))}
      </div>
    </div>
  );
}


