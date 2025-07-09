"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Grid3x3, ImageIcon, LayoutGrid, Palette, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

const portfolioCategories = [
  {
    title: "Personal Branding",
    items: [
      { img: "/1.png", alt: "Kunika Premi Personal Branding", title: "Personal Branding", description: "Complete personal branding package for Kunika Premi" },
      { img: "/kunika premi.png", alt: "LinkedIn Banner", title: "LinkedIn Banner", description: "Professional banner design for LinkedIn profile" },
      { img: "/KV7.png", alt: "KV7 Logo", title: "KV7 Logo", description: "Minimalist logo design" }
    ]
  },
  {
    title: "Social Media Designs",
    items: [
      { img: "/postdesign (2).png", alt: "Social Media Post", title: "Grow Your Business", description: "Marketing campaign for CreatR Digital" },
      { img: "/6element (1).png", alt: "Social Media Post", title: "Hit Your Goals", description: "Motivational social media content" },
      { img: "/4.png", alt: "Social Media Post", title: "Boost Your Brand", description: "Brand promotion materials" }
    ]
  },
  {
    title: "Instagram Stories",
    items: [
      { img: "/ff.jpg", alt: "Instagram Story", title: "Aesthetic Story", description: "Visual storytelling design" },
      { img: "/ll.jpg", alt: "Instagram Story", title: "Birthday Story", description: "Celebration design concept" },
      { img: "/Story.png", alt: "Instagram Story", title: "Branding Story", description: "Company branding narrative" }
    ]
  },
  {
    title: "Infographics",
    items: [
      { img: "/Python.png", alt: "Infographic Design", title: "Marketing Services", description: "Service diagram visualization" },
      { img: "/X.png", alt: "Infographic Design", title: "Achieve Targets", description: "Goal achievement breakdown" },
      { img: "/presents.png", alt: "Infographic Design", title: "Hackathon", description: "Event presentation design" }
    ]
  }
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<null | {
    img: string;
    alt: string;
    title: string;
    description: string;
  }>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Image Detail Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <>
              <DialogHeader className="p-6 pb-0">
                <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </DialogHeader>
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage.img}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-6 pt-0 flex justify-end">
                <Button onClick={() => setSelectedImage(null)} className="gap-2">
                  Close <X className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>

          <div className="flex items-center gap-3">
            <Palette className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-semibold">Design Portfolio</h1>
          </div>

          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Creative Showcase
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected works across branding, digital media, and print design
            </p>
          </section>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {portfolioCategories.map((category, index) => (
              <section key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <LayoutGrid className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.items.slice(0, 2).map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      onClick={() => setSelectedImage(item)}
                      className="relative overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all group"
                    >
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index < 2 && itemIndex < 2} // Prioritize first few images
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                        <h3 className="text-white font-medium">{item.title}</h3>
                      </div>
                    </button>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="mt-4 flex items-center gap-2 pl-0 group-hover:pl-2 transition-all"
                  asChild
                >
                  <Link href={`/portfolio/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    View All <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </Button>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
