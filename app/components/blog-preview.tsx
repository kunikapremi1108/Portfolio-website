"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Figma: A Designer's Journey",
    excerpt: "My experience learning Figma and how it transformed my design workflow. Tips and tricks for beginners.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Design",
    slug: "getting-started-with-figma",
  },
  {
    id: 2,
    title: "Building Interactive Web Applications with JavaScript",
    excerpt: "Exploring modern JavaScript techniques and frameworks to create engaging user experiences.",
    date: "2024-12-10",
    readTime: "8 min read",
    category: "Development",
    slug: "interactive-web-applications-javascript",
  },
  {
    id: 3,
    title: "The Art of UI/UX Design: Principles and Best Practices",
    excerpt: "Understanding the fundamental principles of good design and how to apply them in real projects.",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Design",
    slug: "art-of-ui-ux-design",
  },
]

export function BlogPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Latest Blog Posts</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Thoughts & Insights</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sharing my experiences, learnings, and insights about design and development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              <BookOpen className="mr-2 h-4 w-4" />
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
