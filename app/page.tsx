import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Menu,
  Trophy,
  ArrowRight,
  Palette,
  Monitor,
  Bot,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./components/theme-toggle"
import { BlogPreview } from "./components/blog-preview"
import { EnhancedContactForm } from "./components/enhanced-contact-form"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-10 md:px-6">
          {/* Left Section - Logo */}
          <div className="flex items-center space-x-3">
            <Palette className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Kunika Premi</span>
          </div>

          {/* Center Section - Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-semibold hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10">
              About
            </Link>
            <Link href="#experience" className="text-sm font-semibold hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-semibold hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-semibold hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10">
              Skills
            </Link>
            <Link href="#certifications" className="text-sm font-semibold hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10">
              Certifications
            </Link>
            <Link href="#achievements" className="text-sm font-semibold hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10">
              Achievements
            </Link>
            <Link href="#contact" className="text-sm font-semibold hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md hover:bg-primary/10">
              Contact
            </Link>
          </nav>

          {/* Right Section - Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Side by Side Layout */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit animate-pulse text-base px-4 py-2">
                    👋 Available for new opportunities
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Graphic Designer & Frontend Developer
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-justify">
                    Creative and detail-oriented B.Tech student passionate about graphic design and frontend
                    development. I blend creativity with technical skills to create seamless digital experiences.
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <a href="#projects" className="inline-block">
                    <Button size="lg" className="h-12 px-8">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/15VEbBnzrspxyCoVmLjV6usVagpIuydLe/view?usp=sharing"
                    download
                    className="inline-block"
                  >
                    <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </a>
                </div>

                <div className="flex items-center space-x-6">
                  <Link
                    href="https://github.com/kunikapremi1108"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kunika-premi-7294a6281/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://leetcode.com/u/kunika_leet/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Code className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.codechef.com/users/kunika_premi"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Trophy className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/profile.jpg"
                    width={400}
                    height={400}
                    alt="Kunika Premi"
                    className="aspect-square overflow-hidden rounded-full object-cover shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-3">
                    <Palette className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-8 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-6 max-w-6xl mx-auto">
              <div className="space-y-3">
                <Badge variant="secondary" className="text-base px-4 py-2">About Me</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Passionate about creating digital experiences that matter
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 w-full">
                <div className="space-y-6 text-left">
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-justify">
                      I am a creative and detail-oriented third-year B.Tech. student with a deep passion for graphic
                      design and frontend development. With hands-on experience from internships and a certification in
                      Figma UI/UX Design, I have worked on designing visually appealing and user-friendly layouts.
                    </p>
                    <p className="text-justify">
                      I enjoy blending creativity with technical skills to create seamless digital experiences. Always
                      eager to learn, explore new design trends, and refine my development skills, I am looking for
                      opportunities to grow, collaborate, and contribute to meaningful projects.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Ghaziabad, India</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">B.Tech 3rd Year</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="text-sm">3+ Internships</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">8+ Certifications</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center lg:text-left">Education</h3>
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Bachelor of Technology in Computer Science</CardTitle>
                        </div>
                        <CardDescription>ABES Engineering College, Ghaziabad • 2022-2026</CardDescription>
                        <CardDescription className="text-primary font-medium">
                          CGPA: 6.08 (Till 5th Sem)
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Senior Secondary</CardTitle>
                        </div>
                        <CardDescription>Shri Thakurdwara Balika Vidyalaya, Ghaziabad • 2022</CardDescription>
                        <CardDescription className="text-primary font-medium">73.00%</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center lg:text-left">Leadership Roles</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Chairperson - ACM Women's Chapter ABESEC</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Former Secretary - ACM Women's Chapter</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Treasurer - Kalakrit Cultural Club</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2 max-w-4xl">
                <Badge variant="secondary" className="text-base px-4 py-2">Professional Experience</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Journey So Far</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hands-on experience from multiple internships in graphic design and frontend development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-1 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Palette className="h-6 w-6 text-primary" />
                      <CardTitle>Graphic Design Intern</CardTitle>
                    </div>
                    <Badge variant="outline">Apr 2025 - July 2025</Badge>
                  </div>
                  <CardDescription className="font-medium">Prodge Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Designing compelling visual content for digital and print platforms, boosting marketing
                      campaigns
                    </li>
                    <li>
                      • Contributing to brainstorming sessions for social media graphics and promotional materials
                    </li>
                    <li>• Aligning designs with brand goals to enhance audience engagement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-6 w-6 text-primary" />
                      <CardTitle>Graphic Design Intern</CardTitle>
                    </div>
                    <Badge variant="outline">Feb 2025 - Mar 2025</Badge>
                  </div>
                  <CardDescription className="font-medium">Console2Success</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Designed layouts for dynamic websites with visually appealing and user-friendly interfaces
                    </li>
                    <li>• Collaborated with frontend development team for real-time implementation</li>
                    <li>• Experimented with innovative designs using Figma to enhance creativity</li>
                    <li>• Gained hands-on experience working on live projects</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Code className="h-6 w-6 text-primary" />
                      <CardTitle>Frontend Developer Intern</CardTitle>
                    </div>
                    <Badge variant="outline">Jan 2025 - Feb 2025</Badge>
                  </div>
                  <CardDescription className="font-medium">CodeAlpha</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Completed projects including Image Gallery and Music Player</li>
                    <li>• Designed posters, business cards, and logos</li>
                    <li>• Developed product-based thinking and enhanced creativity</li>
                    <li>• Built interactive web applications using modern frontend technologies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-8 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2 max-w-4xl">
                <Badge variant="secondary" className="text-base px-4 py-2">Portfolio</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on, showcasing my skills in both design and development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src="/pizza.jpg"
                    width={500}
                    height={300}
                    alt="Pizza Ordering Chatbot"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="h-5 w-5" />
                    <span>Pizza Ordering Chatbot</span>
                  </CardTitle>
                  <CardDescription>
                    AI-powered pizza ordering chatbot with prompt engineering and context tracking for smooth
                    conversational flow.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">OpenAI API</Badge>
                    <Badge variant="outline">Panel</Badge>
                    <Badge variant="outline">AI/ML</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href="https://github.com/kunikapremi1108/Chatbot-prompt-eng.-.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src="/stop.jpg"
                    width={500}
                    height={300}
                    alt="Stopwatch Application"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Stopwatch Application</CardTitle>
                  <CardDescription>
                    Sleek, user-friendly stopwatch with intuitive controls and real-time feedback using PyQt5.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">PyQt5</Badge>
                    <Badge variant="outline">GUI</Badge>
                    <Badge variant="outline">Desktop App</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href="https://github.com/kunikapremi1108/Stopwatch.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src="/presents.png"
                    width={500}
                    height={300}
                    alt="Design Portfolio"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-5 w-5" />
                    <span>Design Portfolio Gallery</span>
                  </CardTitle>
                  <CardDescription>
                    Interactive gallery showcasing my graphic design work including social media content, print
                    materials, and web interfaces.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">UI/UX</Badge>
                    <Badge variant="outline">Print Design</Badge>
                    <Badge variant="outline">Branding</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" asChild>
                      <Link href="/portfolio">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Portfolio
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src="/music.jpg"
                    width={100}
                    height={100}
                    alt="Music Player"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Music Player</CardTitle>
                  <CardDescription>
                    Interactive music player with play, pause, shuffle, repeat functionality and volume control.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Web Audio API</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href="https://github.com/kunikapremi1108/codealpha_tasks.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2 max-w-4xl">
                <Badge variant="secondary" className="text-base px-4 py-2">Technical Skills</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What I bring to the table</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive skill set spanning programming, design, and development tools.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-6 w-6 text-primary" />
                    <span>Programming Languages</span>
                  </CardTitle>
                  <CardDescription>
                    Strong foundation in multiple programming languages for diverse development needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">C/C++</Badge>
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">SQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="flex items-center space-x-2">
                    <Monitor className="h-6 w-6 text-primary" />
                    <span>Web Technologies</span>
                  </CardTitle>
                  <CardDescription>
                    Frontend development skills for creating responsive and interactive web applications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Responsive Design</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-6 w-6 text-primary" />
                    <span>Design & Tools</span>
                  </CardTitle>
                  <CardDescription>
                    Design and development tools for creating beautiful and functional digital experiences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">Canva</Badge>
                    <Badge variant="outline">Git/GitHub</Badge>
                    <Badge variant="outline">VS Code</Badge>
                    <Badge variant="outline">UI/UX Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="w-full py-8 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2 max-w-4xl">
                <Badge variant="secondary" className="text-base px-4 py-2">Certifications</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Continuous Learning</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Committed to staying updated with the latest technologies and best practices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-4 py-12 lg:grid-cols-2 lg:gap-6">
              {[
                { name: "Python Programming: A Step-by-Step Programming Course", org: "Udemy", date: "July 2025" },
                { name: "ChatGPT Prompt Engineering for Developers", org: "DeepLearning.AI", date: "May 2025" },
                { name: "Full Stack Developer", org: "One RoadMap", date: "May 2025" },
                { name: "Frontend Development", org: "One RoadMap", date: "May 2025" },
                { name: "Enterprise Design Thinking Co-Creator", org: "IBM", date: "Apr 2025" },
                { name: "Enterprise Design Thinking Practitioner", org: "IBM", date: "Mar 2025" },
                { name: "Learn Figma: UI/UX Design Masterclass", org: "Udemy", date: "Jan 2025" },
                { name: "500 difficulty rating completion in Python", org: "CodeChef", date: "July 2024" },
                { name: "Programming Essentials in Python", org: "Cisco", date: "Apr 2024" },
              ].map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader className="pb-3 flex-1">
                    <div className="flex items-center justify-between">
                      <Award className="h-5 w-5 text-primary" />
                      <Badge variant="outline">{cert.date}</Badge>
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">{cert.org}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2 max-w-4xl">
                <Badge variant="secondary" className="text-base px-4 py-2">Achievements</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recognition & Awards</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Celebrating milestones and recognition in academics, competitions, and leadership.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <Trophy className="h-12 w-12 mx-auto text-yellow-500" />
                  <CardTitle>1st Position</CardTitle>
                  <CardDescription>Solo Dance Competition at Jaipuria Institute of Management</CardDescription>
                  <Badge variant="outline">Dec 2024</Badge>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <Users className="h-12 w-12 mx-auto text-primary" />
                  <CardTitle>Team Leader</CardTitle>
                  <CardDescription>Smart India Hackathon 2024 participation at college level</CardDescription>
                  <Badge variant="outline">Sep 2024</Badge>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <Award className="h-12 w-12 mx-auto text-green-500" />
                  <CardTitle>Event Organizer</CardTitle>
                  <CardDescription>ABES Collegiate Programming Contest (ACPC) 2024</CardDescription>
                  <Badge variant="outline">Apr 2024</Badge>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <Users className="h-12 w-12 mx-auto text-blue-500" />
                  <CardTitle>Chair of ABES ACM Women's Chapter</CardTitle>
                  <CardDescription>Leading the ACM Women's Chapter at ABES Engineering College</CardDescription>
                  <Badge variant="outline">May 2025</Badge>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="w-full py-8 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-6xl mx-auto">
              <div className="space-y-3">
                <Badge variant="secondary" className="text-base px-4 py-2">Get In Touch</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's work together</h2>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
                </p>
              </div>

              <div className="w-full flex justify-center">
                <EnhancedContactForm />
              </div>

              <div className="grid gap-4 md:grid-cols-2 pt-8 max-w-4xl mx-auto w-full">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Mail className="h-8 w-8 mx-auto text-primary" />
                    <CardTitle>Email</CardTitle>
                    <CardDescription>kunikapremi11@gmail.com</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <MapPin className="h-8 w-8 mx-auto text-primary" />
                    <CardTitle>Location</CardTitle>
                    <CardDescription>Ghaziabad, India</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Palette className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Kunika Premi</span>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/kunikapremi1108"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kunika-premi-7294a6281/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://leetcode.com/u/kunika_leet/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Code className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.codechef.com/users/kunika_premi"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Trophy className="h-5 w-5" />
              </Link>
            </div>
              
          </div>
        </div>
      </footer>
    </div>
  )
}
