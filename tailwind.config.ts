import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
export const categoryItems: Record<string, Array<{
  img: string;
  alt: string;
  title: string;
  description: string;
}>> = {
  "UI/UX design": [
    { img: "/1.png", alt: "Personal Branding", title: "Personal Branding", description: "Complete branding package" },
  ],
  "personal-branding": [
    { img: "/1.png", alt: "Personal Branding", title: "Personal Branding", description: "Complete branding package" },
    { img: "/kunika premi.png", alt: "LinkedIn Banner", title: "LinkedIn Banner", description: "Professional profile banner" },
    { img: "/KV7.png", alt: "KV7 Logo", title: "KV7 Logo", description: "Minimalist brand identity" }
  ],
  "social-media-designs": [
    { img: "/postdesign (2).png", alt: "Social Media", title: "Grow Your Business", description: "Marketing campaign" },
    { img: "/6element (1).png", alt: "Social Media", title: "Hit Your Goals", description: "Performance graphic" },
    { img: "/4.png", alt: "Social Media", title: "Boost Your Brand", description: "Promotional content" },
    { img: "/postdesign (1).png", alt: "Social Media", title: "Brand Promotion", description: "Marketing materials" },
    { img: "/postdesign (3).png", alt: "Social Media", title: "Campaign", description: "Social media visuals" }
  ],
  "instagram-stories": [
    { img: "/ff.jpg", alt: "Instagram Story", title: "Aesthetic", description: "Visual story design" },
    { img: "/ll.jpg", alt: "Instagram Story", title: "Birthday", description: "Celebration concept" },
    { img: "/kk.jpg", alt: "Instagram Story", title: "Event", description: "Brand activation" },
    { img: "/Story.png", alt: "Instagram Story", title: "Brand Story", description: "Company narrative" }
  ],
  "infographics": [
    { img: "/Python.png", alt: "Infographic", title: "Marketing", description: "Services diagram" },
    { img: "/X.png", alt: "Infographic", title: "Targets", description: "Goal visualization" },
    { img: "/presents.png", alt: "Infographic", title: "Event", description: "Hackathon graphics" }
  ]
};
