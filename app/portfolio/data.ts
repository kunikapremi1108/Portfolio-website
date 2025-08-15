// Portfolio data structure
export type PortfolioItem = {
  img?: string;
  video?: string;
  alt: string;
  title: string;
  description: string;
};

export type PortfolioCategory = {
  title: string;
  items: PortfolioItem[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    title: "UI/UX Design",
    items: [
      {
        video: "/juice brand.mp4",
        alt: "Juice Brand Design",
        title: "Juice Brand",
        description: "Complete personal branding package for Kunika Premi",
      },
      {
        video: "/food website.mp4",
        alt: "Food Website Design",
        title: "Food Website",
        description: "Complete personal branding package for Kunika Premi",
      },
    ],
  },
  {
    title: "Social Media Designs",
    items: [
      {
        video: "/hello.mp4",
        alt: "Hello Social Media Video",
        title: "Hello",
        description: "Creative hello social media video design",
      },
      {
        img: "/postdesign (1).png",
        alt: "Social Media Post - Creative Design",
        title: "Creative Design",
        description: "Innovative social media content design",
      },
      {
        img: "/postdesign (2).png",
        alt: "Social Media Post - Grow Your Business",
        title: "Grow Your Business",
        description: "Marketing campaign for CreatR Digital",
      },
      {
        img: "/postdesign (3).png",
        alt: "Social Media Post - Modern Layout",
        title: "Modern Layout",
        description: "Contemporary social media post design",
      },
      {
        img: "/6element (1).png",
        alt: "Social Media Post - Hit Your Goals",
        title: "Hit Your Goals",
        description: "Motivational social media content",
      },
      {
        img: "/6element (2).png",
        alt: "Social Media Post - Element Design",
        title: "Element Design",
        description: "Creative element-based social media post",
      },
    ],
  },
  {
    title: "Infographics",
    items: [
      {
        img: "/Python.png",
        alt: "Infographic Design",
        title: "Marketing Services",
        description: "Service diagram visualization",
      },
      {
        img: "/X.png",
        alt: "Infographic Design",
        title: "Achieve Targets",
        description: "Goal achievement breakdown",
      },
      {
        img: "/presents.png",
        alt: "Infographic Design",
        title: "Hackathon",
        description: "Event presentation design",
      },
    ],
  },
  {
    title: "Personal Branding",
    items: [
      {
        img: "/1.png",
        alt: "Kunika Premi Personal Branding",
        title: "Personal Branding",
        description: "Complete personal branding package for Kunika Premi",
      },
      {
        img: "/DISCOUNT.png",
        alt: "Discount Promotion Design",
        title: "Discount Promotion",
        description: "Promotional discount design for personal branding",
      },
      {
        img: "/Career Catalyst.png",
        alt: "Career Catalyst Design",
        title: "Career Catalyst",
        description: "Career development personal branding design",
      },
      {
        img: "/kunika premi.png",
        alt: "LinkedIn Banner",
        title: "LinkedIn Banner",
        description: "Professional banner design for LinkedIn profile",
      },
      {
        img: "/KV7.png",
        alt: "KV7 Logo",
        title: "KV7 Logo",
        description: "Minimalist logo design",
      },
    ],
  },
  {
    title: "Instagram Stories",
    items: [
      {
        img: "/ff.jpg",
        alt: "Instagram Story",
        title: "Aesthetic Story",
        description: "Visual storytelling design",
      },
      {
        img: "/ll.jpg",
        alt: "Instagram Story",
        title: "Birthday Story",
        description: "Celebration design concept",
      },
      {
        img: "/Story.png",
        alt: "Instagram Story",
        title: "Branding Story",
        description: "Company branding narrative",
      },
    ],
  },
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  // Handle special case for UI/UX Design - both forward slash and hyphen versions
  if (slug === "ui-ux-design" || slug === "ui/ux-design") {
    return portfolioCategories.find(category => category.title === "UI/UX Design");
  }
  
  return portfolioCategories.find(
    (category) => category.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
}
