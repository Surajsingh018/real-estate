const properties = [
  {
    id: "1",
    title: "Luxury Downtown Condo",
    description:
      "Prime location high-rise condominium in the heart of Manhattan with stunning city views.",
    location: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"
    ],
    totalValue: 2500000,
    tokenPrice: 250,
    totalTokens: 10000,
    soldTokens: 6500,
    minInvestment: 500,
    expectedROI: 12.5,
    lockPeriod: 3,
    status: "active",
    legalDocs: ["Property_Deed.pdf", "Legal_Opinion.pdf"],
    propertyType: "residential",
    yearBuilt: 2018,
    sqft: 1250,
    createdAt: new Date("2024-01-15"),
    adminApproved: true,
    price: "$2,500,000",
    address: "Manhattan, NY",
    beds: 2,
    baths: 2,
    features: ["2 Bedroom", "2 Bath", "Kitchen", "Living", "Balcony"],
    amenities: ["Gym", "Pool", "Concierge", "Parking"],
    breakdown: {
      propertyPrice: "$2,500,000",
      purchaseCost: "$150,000",
      transactionCost: "$25,000",
      runningCost: "$30,000"
    },
    whyModern:
      "Smart-living condo with floor-to-ceiling windows and city skyline views.",
    whyRental:
      "Vacant unit ready for immediate occupancy; high demand from long-term tenants.",
    whyFacilities:
      "Infinity pool, rooftop gym, 24/7 concierge, on-site retail & spa.",
    whyReturns:
      "Estimated 12.5 % gross yield, 9.8 % net yield, 14 % annualised ROI over 5 yrs.",
    whyBelowMarket:
      "Listed 18 % below latest third-party valuation of $3.05 M.",
    whyLocation:
      "5-min walk to Times Square, Central Park & multiple subway lines."
  },
  {
    id: "2",
    title: "Commercial Office Building",
    description:
      "Modern 15-story office building with premium tenants and stable rental income.",
    location: "Austin, TX",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    totalValue: 8500000,
    tokenPrice: 850,
    totalTokens: 10000,
    soldTokens: 3200,
    minInvestment: 500,
    expectedROI: 15.2,
    lockPeriod: 3,
    status: "active",
    legalDocs: ["Commercial_Lease.pdf", "Tenant_Reports.pdf"],
    propertyType: "commercial",
    yearBuilt: 2020,
    sqft: 45000,
    createdAt: new Date("2024-02-01"),
    adminApproved: true,
    price: "$8,500,000",
    address: "Downtown Austin, TX",
    beds: 0,
    baths: 0,
    features: ["15 Floors", "Grade-A Offices", "Parking Garage"],
    amenities: ["Elevators", "Security", "HVAC", "Cafeteria"],
    breakdown: {
      propertyPrice: "$8,500,000",
      purchaseCost: "$500,000",
      transactionCost: "$75,000",
      runningCost: "$120,000"
    },
    whyModern:
      "LEED-certified tower with smart-building tech and premium fit-outs.",
    whyRental:
      "Fully leased to Fortune-500 tenants; 5-yr average occupancy 97 %.",
    whyFacilities:
      "24/7 security, EV charging, rooftop terrace, conference centers.",
    whyReturns:
      "Stable 15.2 % gross yield; 11 % net yield; 16 % annualised ROI.",
    whyBelowMarket:
      "Listed 12 % below independent valuation of $9.7 M.",
    whyLocation:
      "Adjacent to Austin Convention Center & light-rail station."
  },
  {
    id: "3",
    title: "Beachfront Resort Villa",
    description:
      "Exclusive beachfront property in Miami with luxury amenities and vacation rental potential.",
    location: "Miami, FL",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    totalValue: 4200000,
    tokenPrice: 420,
    totalTokens: 10000,
    soldTokens: 8900,
    minInvestment: 500,
    expectedROI: 18.7,
    lockPeriod: 3,
    status: "active",
    legalDocs: ["Resort_License.pdf", "Environmental_Report.pdf"],
    propertyType: "residential",
    yearBuilt: 2019,
    sqft: 3500,
    createdAt: new Date("2024-01-28"),
    adminApproved: true,
    price: "$4,200,000",
    address: "South Beach, Miami, FL",
    beds: 4,
    baths: 4,
    features: ["4 Bed", "4 Bath", "Infinity Pool", "Private Dock"],
    amenities: ["Beach Access", "Pool", "Spa", "Concierge"],
    breakdown: {
      propertyPrice: "$4,200,000",
      purchaseCost: "$250,000",
      transactionCost: "$40,000",
      runningCost: "$60,000"
    },
    whyModern:
      "Brand-new villa with smart-home automation and panoramic ocean views.",
    whyRental:
      "High nightly rates on Airbnb; 85 % occupancy in peak season.",
    whyFacilities:
      "Private beach, infinity pool, dock, gym, 24/7 concierge services.",
    whyReturns:
      "18.7 % gross yield; 14 % net yield; 21 % annualised ROI via short-term rentals.",
    whyBelowMarket:
      "Listed 20 % below comparable sales in the same strip.",
    whyLocation:
      "Walking distance to Ocean Drive, shopping & nightlife."
  },
  {
    id: "4",
    title: "Los Angeles Penthouse",
    description:
      "High-floor penthouse with panoramic skyline views and private rooftop pool.",
    location: "Los Angeles, CA",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    totalValue: 3200000,
    tokenPrice: 320,
    totalTokens: 10000,
    soldTokens: 7200,
    minInvestment: 500,
    expectedROI: 14.1,
    lockPeriod: 3,
    status: "active",
    legalDocs: ["Penthouse_Deed.pdf", "HOA_Docs.pdf"],
    propertyType: "residential",
    yearBuilt: 2021,
    sqft: 2800,
    createdAt: new Date("2024-03-10"),
    adminApproved: true,
    price: "$3,200,000",
    address: "Downtown LA, CA",
    beds: 3,
    baths: 3,
    features: ["3 Bed", "3 Bath", "Rooftop Pool", "Smart Home"],
    amenities: ["Gym", "Concierge", "Parking", "Spa"],
    breakdown: {
      propertyPrice: "$3,200,000",
      purchaseCost: "$190,000",
      transactionCost: "$35,000",
      runningCost: "$45,000"
    },
    whyModern:
      "Ultra-modern penthouse with floor-to-ceiling glass and rooftop pool.",
    whyRental:
      "High demand for luxury rentals; 90 % occupancy in downtown.",
    whyFacilities:
      "Rooftop pool, gym, concierge, parking garage, smart-home tech.",
    whyReturns:
      "14.1 % gross yield; 10.8 % net yield; 16 % annualised ROI.",
    whyBelowMarket:
      "Listed 15 % below comparable penthouse sales.",
    whyLocation:
      "Minutes to Staples Center, LA Live, and metro lines."
  },
  {
    id: "5",
    title: "Super Nova Tower",
    description:
      "Iconic mixed-use tower offering retail, office, and luxury residences in downtown Austin.",
    location: "Austin, TX",
    images: [
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
],
    totalValue: 9000000,
    tokenPrice: 900,
    totalTokens: 10000,
    soldTokens: 4100,
    minInvestment: 500,
    expectedROI: 16.3,
    lockPeriod: 3,
    status: "active",
    legalDocs: ["Tower_Lease.pdf", "Retail_Report.pdf"],
    propertyType: "mixed-use",
    yearBuilt: 2022,
    sqft: 75000,
    createdAt: new Date("2024-02-15"),
    adminApproved: true,
    price: "$9,000,000",
    address: "Central Austin, TX",
    beds: 0,
    baths: 0,
    features: ["Retail", "Office", "Residences", "Parking"],
    amenities: ["Elevators", "Security", "EV_Charging", "Terrace"],
    breakdown: {
      propertyPrice: "$9,000,000",
      purchaseCost: "$540,000",
      transactionCost: "$135,000",
      runningCost: "$220,000"
    },
    whyModern:
      "LEED-certified mixed-use tower with smart-building tech and premium fit-outs.",
    whyRental:
      "Fully leased to Fortune-500 tenants; 98 % occupancy in retail & office.",
    whyFacilities:
      "EV charging, rooftop terrace, conference centers, 24/7 security.",
    whyReturns:
      "16.3 % gross yield; 12.4 % net yield; 18 % annualised ROI.",
    whyBelowMarket:
      "Listed 10 % below independent valuation of $10.1 M.",
    whyLocation:
      "Adjacent to Austin Convention Center & light-rail station."
  },
  {
    id: "6",
    title: "Miami Beach Villa",
    description:
      "Ultra-luxury beachfront villa with private dock, infinity pool, and panoramic ocean views.",
    location: "Miami Beach, FL",
    images: [
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    totalValue: 5500000,
    tokenPrice: 550,
    totalTokens: 10000,
    soldTokens: 9500,
    minInvestment: 500,
    expectedROI: 19.8,
    lockPeriod: 3,
    status: "active",
    legalDocs: ["Villa_Title.pdf", "Dock_Permit.pdf"],
    propertyType: "residential",
    yearBuilt: 2020,
    sqft: 5200,
    createdAt: new Date("2024-03-05"),
    adminApproved: true,
    price: "$5,500,000",
    address: "Miami Beach, FL",
    beds: 5,
    baths: 5,
    features: ["5 Bed", "5 Bath", "Infinity Pool", "Private Dock"],
    amenities: ["Beach_Access", "Infinity_Pool", "Spa", "Concierge"],
    breakdown: {
      propertyPrice: "$5,500,000",
      purchaseCost: "$330,000",
      transactionCost: "$82,500",
      runningCost: "$110,000"
    },
    whyModern:
      "Ultra-luxury villa with infinity pool, private dock, and smart-home automation.",
    whyRental:
      "High nightly rates on Airbnb; 95 % occupancy in peak season.",
    whyFacilities:
      "Private beach, infinity pool, dock, spa, 24/7 concierge services.",
    whyReturns:
      "19.8 % gross yield; 15.2 % net yield; 22 % annualised ROI.",
    whyBelowMarket:
      "Listed 18 % below comparable beachfront sales.",
    whyLocation:
      "Private beach access; walking distance to South Beach nightlife."
  }
];

export default properties;