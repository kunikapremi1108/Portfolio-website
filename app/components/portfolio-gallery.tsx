"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X, ExternalLink, Palette, Smartphone, Monitor, FileText } from "lucide-react"

// Portfolio categories
const categories = [
  { id: "all", label: "All Work", icon: Palette },
  { id: "social", label: "Social Media", icon: Smartphone },
  { id: "web", label: "Web Design", icon: Monitor },
  { id: "print", label: "Print Design", icon: FileText },
]

// Sample portfolio items - you can replace these with actual images
const portfolioItems = [
  {
    id: 1,
    title: "Instagram Story Design",
    category: "social",
    image: "/Story.jpg",
    description: "Engaging Instagram story design for brand promotion",
    tags: ["Instagram", "Social Media", "Branding"],
  },
  {
    id: 2,
    title: "Website Landing Page",
    category: "web",
    image: "/placeholder.svg?height=400&width=600",
    description: "Modern landing page design for food industry brand",
    tags: ["Web Design", "UI/UX", "Landing Page"],
  },
  {
    id: 3,
    title: "Business Card Design",
    category: "print",
    image: "/placeholder.svg?height=300&width=500",
    description: "Professional business card design with modern aesthetics",
    tags: ["Print Design", "Business Card", "Branding"],
  },
  {
    id: 4,
    title: "Social Media Post",
    category: "social",
    image: "/placeholder.svg?height=400&width=400",
    description: "Eye-catching social media post for product promotion",
    tags: ["Social Media", "Product Design", "Marketing"],
  },
  {
    id: 5,
    title: "Magazine Cover",
    category: "print",
    image: "/placeholder.svg?height=500&width=400",
    description: "Creative magazine cover design with impactful visuals",
    tags: ["Magazine", "Print Design", "Editorial"],
  },
  {
    id: 6,
    title: "Mobile App Interface",
    category: "web",
    image: "/placeholder.svg?height=500&width=300",
    description: "User-friendly mobile app interface design",
    tags: ["Mobile Design", "UI/UX", "App Design"],
  },
  {
    id: 7,
    title: "Instagram Post Series",
    category: "social",
    image: "/placeholder.svg?height=400&width=400",
    description: "Cohesive Instagram post series for brand storytelling",
    tags: ["Instagram", "Series Design", "Branding"],
  },
  {
    id: 8,
    title: "Website Dashboard",
    category: "web",
    image: "/placeholder.svg?height=400&width=600",
    description: "Clean and intuitive dashboard design for web application",
    tags: ["Dashboard", "Web Design", "Data Visualization"],
  },
  {
    id: 9,
    title: "Visiting Card",
    category: "print",
    image: "/placeholder.svg?height=300&width=500",
    description: "Elegant visiting card design with professional touch",
    tags: ["Visiting Card", "Print Design", "Professional"],
  },
]

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  : "dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {category.label}
            </Button>
          )
        })}
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                {item.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                    {tag}
                  </Badge>
                ))}
                {item.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                    +{item.tags.length - 2}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal for selected item */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700"
              onClick={() => setSelectedItem(null)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2 dark:text-white">{selectedItem.title}</h2>
                  <p className="text-muted-foreground dark:text-gray-400">{selectedItem.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 dark:text-white">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 bg-transparent"
                  >
                    Similar Work
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Palette className="h-12 w-12 text-muted-foreground dark:text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2 dark:text-white">No work found</h3>
          <p className="text-muted-foreground dark:text-gray-400">
            No portfolio items found for the selected category.
          </p>
        </div>
      )}
    </div>
  )
}
