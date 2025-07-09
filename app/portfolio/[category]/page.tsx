"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useState } from "react";

const categoryItems: Record<string, Array<{
  img: string;
  alt: string;
  title: string;
  description: string;
}>> = {
  "personal-branding": [
    { img: "/1.png", alt: "Personal Branding", title: "Personal Branding", description: "Complete branding package" },
    { img: "/Kunika Premi.png", alt: "LinkedIn Banner", title: "LinkedIn Banner", description: "Professional profile banner" },
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

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [selectedImage, setSelectedImage] = useState<null | {
    img: string;
    alt: string;
    title: string;
    description: string;
  }>(null);

  const items = categoryItems[params.category] || [];
  const categoryName = params.category.replace(/-/g, ' ');

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <>
              <DialogHeader className="p-6 pb-0">
                <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </DialogHeader>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.img}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/portfolio" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-12 capitalize">
          {categoryName}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-lg transition-all"
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-white font-medium text-lg">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
