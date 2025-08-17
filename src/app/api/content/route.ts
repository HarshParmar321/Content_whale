import { NextResponse } from 'next/server';

export async function GET() {
  // Sample data (copy from your page.tsx)
  const testimonials = [
    {
      id: 1,
      content: "Lörem ipsum kyl nihävis på begösode. Antiposäde evirar fastän neng nifesk. Binar funde. Spesade dohilogi ultrapätt, ponur. Bin krodår fastän niv. Du kan vara drabbad.",
      author: "Sarah Iyer",
      date: "2022.03.06",
      avatar: "/images/img_frame_1116600058.svg"
    },
    {
      id: 2,
      content: "Content Whale delivered exceptional results for our business. Their team understood our requirements perfectly and provided high-quality content that exceeded our expectations.",
      author: "Sarah Johnson",
      date: "2023.05.15",
      avatar: "/images/img_frame_1116600058.svg"
    },
    {
      id: 3,
      content: "Working with Content Whale has been a game-changer for our content strategy. Professional, reliable, and always on time with deliveries.",
      author: "Michael Chen",
      date: "2023.08.22",
      avatar: "/images/img_frame_1116600058.svg"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "30k",
      features: [
        "10 Articles",
        "Plagiarism-free content",
        "Unlimited revisions",
        "48 Hour delivery"
      ]
    },
    {
      name: "Standard",
      price: "40k",
      features: [
        "10 Articles",
        "Everything in basic package",
        "Keyword Research",
        "Content Strategy",
        "Banner Images & Infographics",
        "Upto 1.3x traffic Growth in 6 months"
      ],
      isPopular: true
    },
    {
      name: "Premium",
      price: "50k",
      features: [
        "10 Articles",
        "Everything in Standard package",
        "3 Backlinks of avg 30 DA",
        "Content Repurposing for LinkedIn, Insta, Reddit, Medium",
        "Upto 2x to 3x traffic growth in 6 months"
      ]
    }
  ];

  const featuredPosts = [
  {
    id: 1,
    title: "75% of our blogs rank on Google",
    description:
      "We adhere to Google's E-E-A-T guidelines and always curate user-centric content, which helps us rank on Google, every time!",
    image: "/images/img_fi_6463648.svg",
    gradient: "linear-gradient(133deg, #FFFFFF 0%, #F6E7FF 100%)",
    titleColor: "#42175b"
  },
  {
    id: 2,
    title: "Case studies designed to celebrate success",
    description:
      "Easy-to-understand and thoughtfully designed case studies to understand the importance of content writing.",
    image: "/images/img_fi_8097177.svg",
    gradient: "linear-gradient(133deg, #FFFFFF 0%, #FEF1D1 100%)",
    titleColor: "#EDAD0B"
  },
  {
    id: 3,
    title: "Content samples that our clients loved",
    description:
      "100+ content samples to go through, curated in different tonalities, styles, and voices, using various content writing practices.",
    image: "/images/img_fi_1250990.svg",
    gradient: "linear-gradient(133deg, #FFFFFF 0%, #C7DBFF 100%)",
    titleColor: "#3070E2"
  }
];


  const pricingSections = {
    "Content Writing": {
      layout: "contentWriting",
      heading: "Industry-Leading Quality at Affordable Rates",
      subheading: "Starting at 1.5/word for content writing solutions. No contracts, no commitments.",
      calculator: {
        label: "Calculate your pricing for content",
        fields: [
          { label: "Content type", placeholder: "Service Type", options: ["Blog Writing", "SEO Content", "Website Copy", "Social Media Content", "Technical Writing"] },
          { label: "Word Count", placeholder: "500", recommended: true }
        ],
        price: "200.00",
        unit: "Rupees"
      },
      plans: null
    },
    "SEO Writing": {
      layout: "seoWriting",
      heading: "Data-driven SEO Content Writing Services",
      subheading: "Flexible packages for SEO-driven content that ranks and converts.",
      calculator: null,
      plans: [
        {
          name: "Basic",
          price: "30k",
          features: [
            "10 Articles",
            "Plagiarism-free content",
            "Unlimited revisions",
            "48 Hour delivery"
          ]
        },
        {
          name: "Standard",
          price: "40k",
          features: [
            "10 Articles",
            "Everything in basic package",
            "Keyword Research",
            "Content Strategy",
            "Banner Images & Infographics",
            "Upto 1.3x traffic Growth in 6 months"
          ],
          isPopular: true
        },
        {
          name: "Premium",
          price: "50k",
          features: [
            "10 Articles",
            "Everything in Standard package",
            "3 Backlinks of avg 30 DA",
            "Content Repurposing for LinkedIn, Insta, Reddit, Medium",
            "Upto 2x to 3x traffic growth in 6 months"
          ]
        }
      ]
    },
    "Translation": {
      layout: "translation",
      heading: "Professional Translation Services",
      subheading: "Global communication made seamless with expert translations.",
      calculator: {
        label: "Calculate your pricing for Translation",
        fields: [
          { label: "Language to translated", placeholder: "Select langauge", options: ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Arabic", "Hindi"] },
          { label: "Your language", placeholder: "Select langauge", options: ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Arabic", "Hindi"] }
        ],
        price: "12",
        unit: "per word"
      },
      plans: null
    }
  };

  return NextResponse.json({
    testimonials,
    pricingPlans,
    featuredPosts,
    pricingSections
  });
}


