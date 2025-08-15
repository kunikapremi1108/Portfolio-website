"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useState } from "react";
import { getCategoryBySlug, PortfolioItem } from "../data";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [selectedItem, setSelectedItem] = useState<null | PortfolioItem>(null);

  const category = getCategoryBySlug(params.category);
  const categoryName = params.category.replace(/-/g, ' ');

  // Debug logging
  console.log("Category slug:", params.category);
  console.log("Found category:", category);

  if (!category) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/portfolio" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-12">Category Not Found</h1>
          <p className="text-muted-foreground">The requested category "{params.category}" could not be found.</p>
          <p className="text-muted-foreground mt-2">Available categories: UI/UX Design, Social Media Designs, Infographics, Personal Branding, Instagram Stories</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
          {selectedItem && (
            <>
              <DialogHeader className="p-6 pb-0">
                <h3 className="text-2xl font-semibold">{selectedItem.title}</h3>
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </DialogHeader>
              <div className="relative aspect-video w-full">
                {selectedItem.video ? (
                  <video
                    src={selectedItem.video}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-contain"
                  />
                ) : (
                  selectedItem.img && (
                    <Image
                      src={selectedItem.img}
                      alt={selectedItem.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  )
                )}
              </div>
              <div className="p-6 pt-0 flex justify-end">
                <Button onClick={() => setSelectedItem(null)} className="gap-2">
                  Close <X className="h-4 w-4" />
                </Button>
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
          {category.title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-lg transition-all"
            >
              {item.video ? (
                <video
                  src={item.video}
                  muted
                  loop
                  autoPlay
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                item.img && (
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index < 3}
                  />
                )
              )}
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
