import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, MessageSquare, Video, Headphones, BookOpen, Users } from "lucide-react"
import InteractiveDemo from "@/components/interactive-demo"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handflow-Y28aiBpC5sXaTNb2ORAMeWazSAVkXf.png"
              alt="HandsFlow Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-purple-700">HandsFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-purple-700 transition-colors">
              Features
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:text-purple-700 transition-colors">
              Use Cases
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-purple-700 transition-colors">
              How It Works
            </Link>
            <Link href="#demo" className="text-sm font-medium hover:text-purple-700 transition-colors">
              Demo
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-purple-700 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="bg-purple-700 hover:bg-purple-800">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-purple-900">
                Breaking Barriers in Sign Language Communication
              </h1>
              <p className="text-lg text-gray-600 md:pr-12">
                HandsFlow is a bidirectional sign language translation assistant that integrates with any application,
                eliminating communication barriers between deaf and hearing individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                  Try HandsFlow Free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border bg-white p-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md p-4 rounded-lg bg-white shadow-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-700"></div>
                      <span className="text-sm font-medium">HandsFlow Active</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Video className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handflow-Y28aiBpC5sXaTNb2ORAMeWazSAVkXf.png"
                          alt="HandsFlow Avatar"
                          width={80}
                          height={80}
                        />
                      </div>
                      <p className="text-sm text-gray-500">3D Avatar translating speech to sign language</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">"Hello, how are you today? It's nice to meet you."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 text-purple-900">Bridging Communication Gaps</h2>
              <p className="text-lg text-gray-600">
                HandsFlow provides seamless translation between spoken language and sign language, making digital
                communication accessible to everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Translation</h3>
                <p className="text-gray-600">
                  Instantly translate speech to sign language via a 3D animated avatar and sign language to text/voice
                  through webcam capture.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Floating Interface</h3>
                <p className="text-gray-600">
                  Minimalist overlay with dual modes: a discrete bubble that expands into a full window, positioned
                  freely on screen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Media Accessibility</h3>
                <p className="text-gray-600">
                  Translate audio content from videos, podcasts, and music into sign language for complete media
                  accessibility.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Meeting Integration</h3>
                <p className="text-gray-600">
                  Facilitate virtual meetings for deaf participants without requiring a human interpreter.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning Tool</h3>
                <p className="text-gray-600">
                  Serve as an interactive learning tool for those wanting to learn sign language.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-700 rounded-full opacity-20 animate-ping"></div>
                    <div className="relative h-6 w-6 bg-purple-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                <p className="text-gray-600">
                  Advanced AI models ensure accurate translation and natural sign language expression through the 3D
                  avatar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-purple-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 text-purple-900">How HandsFlow Transforms Communication</h2>
              <p className="text-lg text-gray-600">
                Discover the many ways HandsFlow can be used to create inclusive digital experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Virtual Meetings</h3>
                <p className="text-gray-600 mb-6">
                  Enable deaf participants to fully engage in video conferences without requiring a human interpreter.
                  HandsFlow translates spoken content into sign language in real-time.
                </p>
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500">Virtual meeting with HandsFlow integration</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Media Consumption</h3>
                <p className="text-gray-600 mb-6">
                  Make YouTube videos, podcasts, and other audio content accessible by translating them into sign
                  language through the HandsFlow overlay.
                </p>
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500">Media player with HandsFlow translation</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Instant Messaging</h3>
                <p className="text-gray-600 mb-6">
                  Translate voice messages into sign language and sign language into text/voice for seamless
                  communication in messaging apps.
                </p>
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500">Messaging app with HandsFlow integration</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Educational Platform</h3>
                <p className="text-gray-600 mb-6">
                  Support deaf students in educational settings by providing real-time translation of lectures and
                  educational content.
                </p>
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500">Educational platform with HandsFlow integration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 text-purple-900">How HandsFlow Works</h2>
              <p className="text-lg text-gray-600">A seamless experience powered by advanced AI technology.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-700">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Speech Recognition</h3>
                <p className="text-gray-600">
                  Advanced AI models capture and process spoken language or audio content from any source.
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-700">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Translation</h3>
                <p className="text-gray-600">
                  The system translates speech to sign language or sign language to text/voice in real-time.
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-700">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visual Representation</h3>
                <p className="text-gray-600">
                  A 3D avatar expressively performs sign language, while sign language is captured via webcam and
                  converted to text.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-purple-50 rounded-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-900">Floating Interface</h3>
                  <p className="text-gray-600 mb-4">
                    HandsFlow's innovative overlay design allows it to integrate with any application without disrupting
                    the user experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                        <ChevronRight className="h-3 w-3 text-purple-700" />
                      </div>
                      <span className="text-gray-600">Minimalist bubble that expands when needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                        <ChevronRight className="h-3 w-3 text-purple-700" />
                      </div>
                      <span className="text-gray-600">Position anywhere on screen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                        <ChevronRight className="h-3 w-3 text-purple-700" />
                      </div>
                      <span className="text-gray-600">Intuitive controls for switching translation modes</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 h-64 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block p-3 bg-purple-100 rounded-full mb-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handflow-Y28aiBpC5sXaTNb2ORAMeWazSAVkXf.png"
                        alt="HandsFlow Interface"
                        width={48}
                        height={48}
                      />
                    </div>
                    <p className="text-sm text-gray-500">HandsFlow floating interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-20 bg-purple-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 text-purple-900">Try HandsFlow in Action</h2>
              <p className="text-lg text-gray-600">
                Experience how HandsFlow works in a real-world scenario. Interact with our demo to see the translation
                in action.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Interactive Demo</h3>
                <p className="text-gray-600 mb-6">
                  This demo simulates HandsFlow in a video conference setting. Click "Play Demo" to see a conversation
                  translated in real-time, or interact with the interface by dragging it around and expanding/collapsing
                  it.
                </p>

                <InteractiveDemo />

                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">How to use this demo:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-purple-700">1</span>
                      </div>
                      <span>Click "Play Demo" to see a simulated conversation with sign language translation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-purple-700">2</span>
                      </div>
                      <span>Click on the HandsFlow bubble to expand the interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-purple-700">3</span>
                      </div>
                      <span>Drag the interface to reposition it anywhere on the screen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-purple-700">4</span>
                      </div>
                      <span>Switch between "Speech to Sign" and "Sign to Speech" modes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-700 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Break Communication Barriers?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join HandsFlow today and make digital communication accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-800">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handflow-Y28aiBpC5sXaTNb2ORAMeWazSAVkXf.png"
                  alt="HandsFlow Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold text-white">HandsFlow</span>
              </div>
              <p className="text-sm text-gray-400">
                Breaking barriers in sign language communication with AI-powered translation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 HandsFlow. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
