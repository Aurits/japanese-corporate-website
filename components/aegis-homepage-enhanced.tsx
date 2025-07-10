"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Database,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Play,
  Shield,
  TrendingUp,
  Users,
  X,
} from "lucide-react"
import { useEffect, useState } from "react"

interface LanguageContent {
  [key: string]: {
    jp: string
    en: string
  }
}

export default function EnhancedAegisHomepage() {
  const [language, setLanguage] = useState<"jp" | "en">("jp")
  const [activeTimelineYear, setActiveTimelineYear] = useState(2024)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    experts: 0,
    support: 24
  })

  const content: LanguageContent = {
    companyName: {
      jp: "AEGIS LLP",
      en: "AEGIS LLP",
    },
    subtitle: {
      jp: "有限責任事業組合",
      en: "Limited Liability Partnership",
    },
    heroTitle: {
      jp: "100年先の未来のために、地方自治体と共に歩む",
      en: "Walking together with local governments for the next 100 years",
    },
    heroSubtitle: {
      jp: "豊かな創造と確かな技術で地域社会に貢献する",
      en: "Contributing to local communities through rich creativity and reliable technology",
    },
    heroDescription: {
      jp: "デジタル変革のパートナーとして、持続可能な地域社会の実現を支援します",
      en: "As a digital transformation partner, we support the realization of sustainable local communities",
    },
    navigation: {
      jp: ["会社情報", "事業内容", "実績", "技術・DX", "お問い合わせ"],
      en: ["About", "Services", "Projects", "Technology", "Contact"],
    },
  }

  const timelineData = [
    {
      year: 1998,
      title: { jp: "AEGIS LLP設立", en: "AEGIS LLP Established" },
      description: {
        jp: "地方自治体向けコンサルティング事業を開始。デジタル化の黎明期から自治体の課題解決に取り組む。",
        en: "Started consulting services for local governments. Addressing municipal challenges since the dawn of digitalization.",
      },
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      year: 2005,
      title: { jp: "デジタル化支援事業拡大", en: "Digital Support Services Expansion" },
      description: {
        jp: "全国50以上の自治体との協業実績を達成。電子政府構想の推進に貢献。",
        en: "Achieved collaboration with over 50 municipalities nationwide. Contributing to e-government initiatives.",
      },
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      year: 2015,
      title: { jp: "スマートシティ構想開始", en: "Smart City Initiative Launch" },
      description: {
        jp: "IoT・AI技術を活用した次世代都市計画に着手。Society 5.0実現への取り組みを本格化。",
        en: "Started next-generation urban planning using IoT and AI technology. Full-scale efforts toward Society 5.0 realization.",
      },
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      year: 2020,
      title: { jp: "DX推進体制強化", en: "DX Promotion System Enhancement" },
      description: {
        jp: "コロナ禍における自治体のデジタル変革を全面支援。リモートワーク環境構築とオンライン住民サービスの実現。",
        en: "Full support for municipal digital transformation during the pandemic. Remote work environment construction and online citizen services.",
      },
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      year: 2024,
      title: { jp: "持続可能な未来への挑戦", en: "Challenge for a Sustainable Future" },
      description: {
        jp: "カーボンニュートラル実現に向けた自治体支援を本格化。AI・データ活用による効率的な行政運営の実現。",
        en: "Full-scale municipal support for carbon neutrality realization. Efficient administrative operations through AI and data utilization.",
      },
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
  ]

  const currentTimeline =
    timelineData.find((item) => item.year === activeTimelineYear) || timelineData[timelineData.length - 1]

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById("timeline-section")
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
          const yearIndex = Math.floor(scrollProgress * timelineData.length)
          if (yearIndex < timelineData.length) {
            setActiveTimelineYear(timelineData[yearIndex].year)
          }
        }
      }

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500)

      // Calculate scroll progress for header
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min((scrollTop / docHeight) * 100, 100)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }))

          // Trigger counter animations for statistics
          if (entry.target.id === 'trust-indicators') {
            animateCounters()
          }
        }
      })
    }, observerOptions)

    // Observe all sections with animations
    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const countersData = [
      { key: 'years', target: 26 },
      { key: 'projects', target: 150 },
      { key: 'experts', target: 85 }
    ]

    countersData.forEach(({ key, target }) => {
      let current = 0
      const increment = target / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }))
      }, stepDuration)
    })
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif' }}
    >
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>

      {/* Header */}
      <header className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-teal-600 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }}></div>

        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white text-slate-800 flex items-center justify-center font-bold text-2xl shadow-lg">
                A
              </div>
              <div>
                <div className="text-2xl font-bold tracking-wide">{content.companyName[language]}</div>
                <div className="text-sm opacity-80">{content.subtitle[language]}</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-10">
              {content.navigation[language].map((item, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="hover:text-teal-400 transition-colors duration-200 font-medium text-lg py-2 border-b-2 border-transparent hover:border-teal-400"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              {/* Language Toggle */}
              <div className="flex items-center space-x-2 bg-slate-700 p-2">
                <button
                  onClick={() => setLanguage("jp")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${language === "jp" ? "bg-teal-600 text-white" : "text-gray-300 hover:text-white"
                    }`}
                >
                  JP
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${language === "en" ? "bg-teal-600 text-white" : "text-gray-300 hover:text-white"
                    }`}
                >
                  EN
                </button>
              </div>

              <div className="hidden md:flex items-center space-x-3 text-lg bg-slate-700 px-6 py-3">
                <Phone className="w-6 h-6 text-teal-400" />
                <span className="font-mono font-semibold text-xl">03-1234-5678</span>
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-3 hover:bg-slate-700">
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-700 py-6">
              <nav className="flex flex-col space-y-4">
                {content.navigation[language].map((item, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="hover:text-teal-400 transition-colors duration-200 font-medium py-3 text-lg border-b border-slate-700 hover:border-teal-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 relative">
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Hero Background"
              className="w-full h-full object-cover opacity-30"
            />
            {/* Video Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group">
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {content.heroTitle[language]}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 font-medium opacity-90">
                {content.heroSubtitle[language]}
              </p>
              <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
                {content.heroDescription[language]}
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="mr-3 w-6 h-6" />
                {language === "jp" ? "提案資料をダウンロード" : "Download Proposal"}
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 font-semibold backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-3 w-6 h-6" />
                {language === "jp" ? "無料相談を予約" : "Schedule Consultation"}
              </Button>
            </div>

            {/* Trust Indicators with Counter Animation */}
            <div
              id="trust-indicators"
              data-animate
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${isVisible['trust-indicators'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">{counters.years}+</div>
                <div className="text-sm opacity-80">{language === "jp" ? "年の実績" : "Years Experience"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">{counters.projects}+</div>
                <div className="text-sm opacity-80">{language === "jp" ? "プロジェクト" : "Projects"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">{counters.experts}+</div>
                <div className="text-sm opacity-80">{language === "jp" ? "専門家" : "Experts"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">{counters.support}/7</div>
                <div className="text-sm opacity-80">{language === "jp" ? "サポート" : "Support"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 flex justify-center">
            <div className="w-1 h-3 bg-white/50 mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Enhanced with Animated Entry */}
      <section
        id="statistics-section"
        data-animate
        className={`py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden transition-all duration-1000 ${isVisible['statistics-section'] ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest opacity-60 font-bold">
            信頼の実績
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
                {language === "jp" ? "信頼の実績" : "TRUSTED RESULTS"}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 font-medium">
                {language === "jp" ? "数字で見るAEGISの信頼性" : "AEGIS Reliability by Numbers"}
              </p>
            </div>

            {/* Auto-playing Statistics Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${(activeService % 3) * 100}%)` }}
                >
                  {[
                    {
                      number: "26",
                      unit: { jp: "年", en: "YEARS" },
                      title: { jp: "1998年以来の歴史と実績", en: "History Since 1998" },
                      description: {
                        jp: "地方自治体との信頼関係を築き、持続可能な地域社会の実現に貢献してまいりました。",
                        en: "Building trust with local governments and contributing to sustainable communities.",
                      },
                      icon: Award,
                      color: "teal",
                      bgImage: "/placeholder.svg?height=400&width=600",
                    },
                    {
                      number: "150",
                      unit: { jp: "件+", en: "PROJECTS+" },
                      title: { jp: "全国の地方自治体に根差した活動", en: "Nationwide Municipal Activities" },
                      description: {
                        jp: "成功したデジタル変革プロジェクトで地域の課題を解決し、住民サービスの向上を実現。",
                        en: "Successful digital transformation projects solving regional challenges and improving citizen services.",
                      },
                      icon: TrendingUp,
                      color: "slate",
                      bgImage: "/placeholder.svg?height=400&width=600",
                    },
                    {
                      number: "85",
                      unit: { jp: "人", en: "EXPERTS" },
                      title: { jp: "地域を支える高度で多様な技術力", en: "Advanced Technical Capabilities" },
                      description: {
                        jp: "各分野の専門資格を持つエキスパートが最適なソリューションを提供いたします。",
                        en: "Certified experts in various fields providing optimal solutions for your needs.",
                      },
                      icon: Users,
                      color: "amber",
                      bgImage: "/placeholder.svg?height=400&width=600",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-8">
                          <div className="relative">
                            <div className="absolute -left-8 top-0 w-2 h-full bg-teal-600"></div>
                            <div className="pl-8">
                              <div
                                className={`inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6`}
                              >
                                {language === "jp" ? "実績" : "ACHIEVEMENT"}
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                                {stat.title[language]}
                              </h3>
                              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {stat.description[language]}
                              </p>
                            </div>
                          </div>

                          {/* Large Number Display */}
                          <div className="bg-white p-8 border-l-8 border-teal-600">
                            <div className="flex items-baseline space-x-4">
                              <div className={`text-8xl lg:text-9xl font-black text-teal-600 leading-none`}>
                                {stat.number}
                              </div>
                              <div className="text-2xl font-bold text-slate-600 tracking-wider">
                                {stat.unit[language]}
                              </div>
                            </div>
                          </div>

                          {/* Key Metrics */}
                          <div className="grid grid-cols-3 gap-6">
                            {[
                              { value: "100%", label: { jp: "満足度", en: "Satisfaction" } },
                              { value: "24/7", label: { jp: "サポート", en: "Support" } },
                              { value: "30%", label: { jp: "効率向上", en: "Efficiency" } },
                            ].map((metric, metricIndex) => (
                              <div key={metricIndex} className="text-center border-t-4 border-slate-300 pt-4">
                                <div className="text-2xl font-bold text-slate-800">{metric.value}</div>
                                <div className="text-sm text-slate-600 font-medium tracking-wide">
                                  {metric.label[language]}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Side - Visual */}
                        <div className="relative">
                          <div className="aspect-square bg-slate-100 overflow-hidden relative">
                            <img
                              src={stat.bgImage || "/placeholder.svg"}
                              alt={stat.title[language]}
                              className="w-full h-full object-cover filter grayscale"
                            />
                            <div className="absolute inset-0 bg-slate-900/20"></div>
                            <div
                              className={`absolute top-8 right-8 w-16 h-16 bg-teal-600 flex items-center justify-center`}
                            >
                              <stat.icon className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          {/* Vertical Text */}
                          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
                            <div className="writing-mode-vertical text-slate-400 text-xs tracking-widest font-bold">
                              {language === "jp" ? "専門性" : "EXPERTISE"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-4 mt-12">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-12 h-2 transition-colors duration-300 ${(activeService % 3) === index ? "bg-teal-600" : "bg-slate-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced with Staggered Animations */}
      <section
        id="timeline-section"
        data-animate
        className={`py-20 bg-gradient-to-br from-white via-slate-50 to-white relative transition-all duration-1000 ${isVisible['timeline-section'] ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 border-b-4 border-teal-600 inline-block pb-2">
                {language === "jp" ? "AEGIS の歩み" : "AEGIS Journey"}
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                {language === "jp"
                  ? "豊かな創造と確かな技術で地域社会に貢献する軌跡"
                  : "Our journey of contributing to communities through innovation and technology"}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Content */}
              <div className="space-y-8 lg:sticky lg:top-24">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 leading-relaxed">
                    {currentTimeline.title[language]}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{currentTimeline.description[language]}</p>
                </div>

                {/* Timeline Navigation with Smooth Transitions */}
                <div className="flex flex-wrap gap-4">
                  {timelineData.map((item, index) => (
                    <button
                      key={item.year}
                      onClick={() => setActiveTimelineYear(item.year)}
                      className={`px-6 py-3 font-bold transition-all duration-300 transform hover:scale-105 ${activeTimelineYear === item.year
                        ? "bg-teal-600 text-white shadow-lg scale-105"
                        : "bg-white text-slate-600 hover:bg-slate-100 shadow-md hover:shadow-lg"
                        }`}
                      style={{
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {item.year}
                    </button>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className="bg-white border border-slate-300 shadow-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
                    {language === "jp" ? "主な成果" : "Key Achievements"}
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      {language === "jp" ? "自治体業務効率化 30% 向上" : "30% improvement in municipal efficiency"}
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      {language === "jp" ? "住民満足度 95% 以上達成" : "95%+ citizen satisfaction achieved"}
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      {language === "jp" ? "コスト削減 平均 25% 実現" : "Average 25% cost reduction realized"}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Visual Timeline with Images */}
              <div className="relative">
                {/* Large Year Display */}
                <div className="absolute -top-8 right-0 text-8xl lg:text-9xl font-bold text-slate-200 z-0 select-none">
                  {activeTimelineYear}
                </div>

                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-600 z-10"></div>

                {/* Image Grid */}
                <div className="relative z-20 ml-8">
                  <div className="grid grid-cols-2 gap-4">
                    {currentTimeline.images.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-slate-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
                        style={{
                          transitionDelay: `${index * 150}ms`
                        }}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${currentTimeline.title[language]} - Image ${index + 1}`}
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertical Japanese Text */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
                  <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest">
                    {language === "jp" ? "技術革新" : "Innovation"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with Auto-playing Carousel */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest opacity-60 font-bold">
            事業内容
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
                {language === "jp" ? "事業内容" : "OUR SERVICES"}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 mb-8 font-medium max-w-3xl mx-auto leading-relaxed">
                {language === "jp"
                  ? "地方自治体のデジタル変革を支援する包括的なサービス"
                  : "Comprehensive services supporting municipal digital transformation"}
              </p>
            </div>

            {/* Auto-playing Services Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${(activeService % 3) * 100}%)` }}
                >
                  {[
                    {
                      number: "01",
                      icon: Database,
                      title: { jp: "デジタル変革コンサルティング", en: "Digital Transformation Consulting" },
                      subtitle: { jp: "DIGITAL TRANSFORMATION", en: "DIGITAL TRANSFORMATION" },
                      description: {
                        jp: "自治体の業務プロセス改善とデジタル化を総合的に支援。住民サービスの向上と業務効率化を実現し、持続可能な行政運営を支援します。",
                        en: "Comprehensive support for municipal business process improvement and digitalization. Achieving improved citizen services and operational efficiency.",
                      },
                      features: [
                        { jp: "業務プロセス分析・改善", en: "Business Process Analysis" },
                        { jp: "システム導入支援", en: "System Implementation Support" },
                        { jp: "職員研修・サポート", en: "Staff Training & Support" },
                        { jp: "効果測定・改善提案", en: "Performance Measurement" },
                      ],
                      bgImage: "/placeholder.svg?height=500&width=700",
                      color: "teal",
                    },
                    {
                      number: "02",
                      icon: Network,
                      title: { jp: "スマートシティ構想", en: "Smart City Planning" },
                      subtitle: { jp: "SMART CITY PLANNING", en: "SMART CITY PLANNING" },
                      description: {
                        jp: "IoT、AI、ビッグデータを活用したスマートシティの企画・設計・実装を一貫してサポート。Society 5.0の実現に向けた包括的なソリューションを提供します。",
                        en: "Consistent support for smart city planning, design, and implementation utilizing IoT, AI, and big data technologies.",
                      },
                      features: [
                        { jp: "IoT基盤構築", en: "IoT Infrastructure Development" },
                        { jp: "データ分析・活用", en: "Data Analytics & Utilization" },
                        { jp: "市民参加型プラットフォーム", en: "Citizen Engagement Platform" },
                        { jp: "持続可能性評価", en: "Sustainability Assessment" },
                      ],
                      bgImage: "/placeholder.svg?height=500&width=700",
                      color: "slate",
                    },
                    {
                      number: "03",
                      icon: Shield,
                      title: { jp: "システム統合・運用", en: "System Integration & Operations" },
                      subtitle: { jp: "SYSTEM INTEGRATION", en: "SYSTEM INTEGRATION" },
                      description: {
                        jp: "既存システムとの連携を考慮した統合ソリューションと24時間365日の運用サポートを提供。セキュリティと安定性を重視した信頼性の高いシステム運用を実現します。",
                        en: "Providing integrated solutions with existing system coordination and 24/7 operational support with emphasis on security and stability.",
                      },
                      features: [
                        { jp: "24/7監視・サポート", en: "24/7 Monitoring & Support" },
                        { jp: "セキュリティ対策", en: "Advanced Security Measures" },
                        { jp: "災害対策・BCP", en: "Disaster Recovery & BCP" },
                        { jp: "パフォーマンス最適化", en: "Performance Optimization" },
                      ],
                      bgImage: "/placeholder.svg?height=500&width=700",
                      color: "amber",
                    },
                  ].map((service, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Visual */}
                        <div className="relative order-2 lg:order-1">
                          <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                            <img
                              src={service.bgImage || "/placeholder.svg"}
                              alt={service.title[language]}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-slate-900/30"></div>

                            {/* Service Number Overlay */}
                            <div className="absolute top-8 left-8">
                              <div className={`text-8xl font-black text-white/20 leading-none`}>{service.number}</div>
                            </div>

                            {/* Icon */}
                            <div
                              className={`absolute bottom-8 right-8 w-16 h-16 bg-slate-800 flex items-center justify-center`}
                            >
                              <service.icon className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          {/* Vertical Text */}
                          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
                            <div className="writing-mode-vertical text-slate-400 text-xs tracking-widest font-bold">
                              {service.subtitle[language]}
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-8 order-1 lg:order-2">
                          <div className="relative">
                            <div className="absolute -left-8 top-0 w-2 h-full bg-teal-600"></div>
                            <div className="pl-8">
                              <div
                                className={`inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6`}
                              >
                                SERVICE {service.number}
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                                {service.title[language]}
                              </h3>
                              <p className="text-sm text-slate-500 font-medium tracking-wider mb-6">
                                {service.subtitle[language]}
                              </p>
                              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {service.description[language]}
                              </p>
                            </div>
                          </div>

                          {/* Service Features */}
                          <div className="bg-white border border-slate-300 shadow-lg p-6">
                            <h4 className="text-lg font-bold text-slate-800 mb-4 tracking-wide">
                              {language === "jp" ? "主要サービス" : "KEY SERVICES"}
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-slate-700">
                                  <div className="w-2 h-2 bg-teal-600 mr-4 flex-shrink-0"></div>
                                  <span className="font-medium">{feature[language]}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <div className="pt-4">
                            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                              {language === "jp" ? "詳細を見る" : "LEARN MORE"}
                              <ArrowRight className="ml-3 w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex justify-center space-x-6 mt-12">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`px-6 py-2 font-bold tracking-wider text-sm transition-all duration-300 ${(activeService % 3) === index
                      ? "bg-teal-600 text-white"
                      : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                      }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                {language === "jp" ? "実績紹介" : "Project Showcase"}
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                {language === "jp"
                  ? "Problem → Proposal → Result の実証された成果"
                  : "Proven results through Problem → Proposal → Result approach"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: { jp: "A市デジタル窓口システム", en: "City A Digital Service System" },
                  period: "2023年4月 - 2024年3月",
                  result: { jp: "待ち時間50%削減", en: "50% Wait Time Reduction" },
                  image: "/placeholder.svg?height=250&width=400",
                  tags: [
                    { jp: "デジタル化", en: "Digitalization" },
                    { jp: "住民サービス", en: "Citizen Services" },
                  ],
                  metrics: [
                    { value: "50%", label: { jp: "待ち時間削減", en: "Wait Time Reduction" } },
                    { value: "95%", label: { jp: "満足度", en: "Satisfaction" } },
                  ],
                },
                {
                  title: { jp: "B県統合データプラットフォーム", en: "Prefecture B Data Platform" },
                  period: "2022年10月 - 2023年9月",
                  result: { jp: "業務効率30%向上", en: "30% Efficiency Improvement" },
                  image: "/placeholder.svg?height=250&width=400",
                  tags: [
                    { jp: "データ統合", en: "Data Integration" },
                    { jp: "AI活用", en: "AI Utilization" },
                  ],
                  metrics: [
                    { value: "30%", label: { jp: "効率向上", en: "Efficiency Gain" } },
                    { value: "24/7", label: { jp: "運用体制", en: "Operations" } },
                  ],
                },
                {
                  title: { jp: "C市スマートシティ基盤構築", en: "City C Smart City Infrastructure" },
                  period: "2023年1月 - 継続中",
                  result: { jp: "エネルギー効率20%改善", en: "20% Energy Efficiency" },
                  image: "/placeholder.svg?height=250&width=400",
                  tags: [
                    { jp: "IoT", en: "IoT" },
                    { jp: "スマートシティ", en: "Smart City" },
                  ],
                  metrics: [
                    { value: "20%", label: { jp: "省エネ効果", en: "Energy Savings" } },
                    { value: "1000+", label: { jp: "IoTセンサー", en: "IoT Sensors" } },
                  ],
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className={`bg-white border border-slate-300 shadow-lg hover:shadow-xl hover:border-teal-400 transition-all duration-500 overflow-hidden group transform hover:-translate-y-2`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title[language]}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-teal-600 text-white text-xs font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                              style={{ transitionDelay: `${tagIndex * 100}ms` }}
                            >
                              {tag[language]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2 leading-relaxed">
                        {project.title[language]}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.period}
                      </p>

                      {/* Project Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center p-3 bg-slate-50 border border-teal-200">
                            <div className="text-2xl font-bold text-teal-600">{metric.value}</div>
                            <div className="text-xs text-slate-600">{metric.label[language]}</div>
                          </div>
                        ))}
                      </div>

                      <div className="text-lg font-bold text-teal-600 mb-4">{project.result[language]}</div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-slate-800 hover:bg-teal-50 hover:border-teal-400 group bg-transparent border-2 transform hover:scale-105 transition-all duration-300"
                      >
                        {language === "jp" ? "詳細を見る" : "View Details"}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {language === "jp" ? "全ての実績を見る" : "View All Projects"}
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & DX Section - Thin Carousel */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Technology & DX</h2>
              <p className="text-xl text-slate-600 mb-8">
                {language === "jp"
                  ? "最新技術を活用したデジタル変革ソリューション"
                  : "Digital transformation solutions utilizing cutting-edge technology"}
              </p>
            </div>

            {/* Thin Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${(activeService % 4) * 100}%)` }}
                >
                  {[
                    {
                      number: "01",
                      title: { jp: "AI・機械学習", en: "AI & Machine Learning" },
                      desc: { jp: "データ分析と予測モデリングによる効率的な意思決定支援", en: "Efficient decision support through data analysis & predictive modeling" },
                    },
                    {
                      number: "02",
                      title: { jp: "クラウド基盤", en: "Cloud Infrastructure" },
                      desc: { jp: "スケーラブルで信頼性の高いクラウドソリューション", en: "Scalable and reliable cloud solutions for modern enterprises" },
                    },
                    {
                      number: "03",
                      title: { jp: "IoT統合", en: "IoT Integration" },
                      desc: { jp: "センサーデータの統合と活用による最適化", en: "Optimization through sensor data integration & utilization" },
                    },
                    {
                      number: "04",
                      title: { jp: "セキュリティ", en: "Security" },
                      desc: { jp: "堅牢な情報セキュリティ対策と脅威対策", en: "Robust information security measures & threat protection" },
                    },
                  ].map((tech, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white shadow-lg p-8 h-32 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-8 flex-1">
                          <div className="w-16 h-16 bg-slate-800 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                            {tech.number}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{tech.title[language]}</h3>
                            <p className="text-slate-600 leading-relaxed">{tech.desc[language]}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-slate-400 flex-shrink-0 ml-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-3 h-3 transition-colors duration-300 ${(activeService % 4) === index ? "bg-teal-600" : "bg-slate-300"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* DX Methodology - Clean Layout with Artistic Numbers */}
            <div className="bg-white p-8 lg:p-12 mt-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center tracking-wide">
                {language === "jp" ? "DX推進メソドロジー" : "DX Promotion Methodology"}
              </h3>

              {/* Box Layout with Center Logo */}
              <div className="relative max-w-4xl mx-auto">
                <div className="grid grid-cols-2 gap-16 lg:gap-24">
                  {/* Top Row */}
                  <div className="text-center relative">
                    {/* Artistic Japanese Number Only */}
                    <div className="absolute -top-8 -left-4 text-8xl font-light text-slate-200 transform -rotate-12 select-none"
                      style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>
                      {language === "jp" ? "一" : "1"}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3 mt-8">
                      {language === "jp" ? "現状分析" : "Current Analysis"}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {language === "jp" ? "業務プロセスの詳細分析" : "Detailed business process analysis"}
                    </p>
                  </div>

                  <div className="text-center relative">
                    {/* Artistic Japanese Number Only */}
                    <div className="absolute -top-8 -right-4 text-8xl font-light text-slate-200 transform rotate-12 select-none"
                      style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>
                      {language === "jp" ? "二" : "2"}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3 mt-8">
                      {language === "jp" ? "戦略策定" : "Strategy Development"}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {language === "jp" ? "最適なDX戦略の立案" : "Optimal DX strategy planning"}
                    </p>
                  </div>

                  {/* Bottom Row */}
                  <div className="text-center relative">
                    {/* Artistic Japanese Number Only */}
                    <div className="absolute -bottom-8 -left-4 text-8xl font-light text-slate-200 transform rotate-12 select-none"
                      style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>
                      {language === "jp" ? "四" : "4"}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">
                      {language === "jp" ? "運用最適化" : "Optimization"}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {language === "jp" ? "継続的な改善とサポート" : "Continuous improvement & support"}
                    </p>
                  </div>

                  <div className="text-center relative">
                    {/* Artistic Japanese Number Only */}
                    <div className="absolute -bottom-8 -right-4 text-8xl font-light text-slate-200 transform -rotate-12 select-none"
                      style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>
                      {language === "jp" ? "三" : "3"}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">
                      {language === "jp" ? "実装支援" : "Implementation"}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {language === "jp" ? "段階的なシステム導入" : "Phased system implementation"}
                    </p>
                  </div>
                </div>

                {/* Center Company Logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-32 h-32 bg-white border-4 border-teal-600 shadow-2xl flex flex-col items-center justify-center">
                    {/* Company Logo */}
                    <div className="w-16 h-16 bg-teal-600 text-white flex items-center justify-center font-bold text-3xl mb-2">
                      A
                    </div>
                    <div className="text-xs font-bold text-slate-800 tracking-wider">AEGIS</div>
                    <div className="text-xs text-slate-600">LLP</div>
                  </div>
                </div>

                {/* Subtle Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {/* Lines to center */}
                  <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#0f766e" strokeWidth="1" opacity="0.3" />
                  <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#0f766e" strokeWidth="1" opacity="0.3" />
                  <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#0f766e" strokeWidth="1" opacity="0.3" />
                  <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#0f766e" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Partnership & Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        {/* Vertical Text Labels */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest opacity-60 font-bold">
            政府認定
          </div>
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest opacity-60 font-bold">
            官民連携
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                {language === "jp" ? "政府認定・官民連携" : "GOVERNMENT PARTNERSHIPS"}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
                {language === "jp" ? "信頼の政府認定パートナー" : "Trusted Government Partner"}
              </h2>
              <div className="w-32 h-1 bg-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 mb-8 font-medium max-w-4xl mx-auto leading-relaxed">
                {language === "jp"
                  ? "経済産業省をはじめとする政府機関との連携により、地方自治体のデジタル変革を支援しています"
                  : "Supporting municipal digital transformation through partnerships with government agencies including METI"}
              </p>
            </div>

            {/* Government Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  name: { jp: "地方創生推進事務局", en: "Regional Revitalization Bureau" },
                  abbr: "RRB",
                  established: "2015",
                  image: "/placeholder.svg?height=120&width=200",
                },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-300 p-6 text-center hover:border-teal-400 transition-colors"
                >
                  <div className="aspect-[3/2] bg-slate-50 mb-4 flex items-center justify-center border border-slate-200">
                    <img
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name[language]}
                      className="max-w-full max-h-full object-contain filter grayscale"
                    />
                  </div>
                  <div className="text-xs font-bold text-slate-800 tracking-wider mb-2">{partner.abbr}</div>
                  <div className="text-sm text-slate-600 font-medium mb-2">{partner.name[language]}</div>
                  <div className="text-xs text-slate-500">
                    {language === "jp" ? "連携開始" : "Partnership Since"} {partner.established}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications & Awards */}
            <div className="bg-white border border-teal-400 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center tracking-wide">
                {language === "jp" ? "認定・資格・表彰" : "CERTIFICATIONS & AWARDS"}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: { jp: "DX認定事業者", en: "DX Certified Business" },
                    issuer: { jp: "経済産業省", en: "METI" },
                    year: "2022",
                    number: "DX-2022-001234",
                    icon: Award,
                  },
                  {
                    title: { jp: "情報セキュリティマネジメント", en: "Information Security Management" },
                    issuer: { jp: "ISO/IEC 27001", en: "ISO/IEC 27001" },
                    year: "2020",
                    number: "ISO27001-2020-5678",
                    icon: Shield,
                  },
                  {
                    title: { jp: "地方創生優良事例表彰", en: "Regional Revitalization Excellence Award" },
                    issuer: { jp: "内閣府", en: "Cabinet Office" },
                    year: "2023",
                    number: "CAO-2023-9012",
                    icon: TrendingUp,
                  },
                ].map((cert, index) => (
                  <div key={index} className="bg-white border border-teal-400 text-center p-6">
                    <div className="w-16 h-16 bg-teal-600 flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{cert.title[language]}</h4>
                    <p className="text-sm text-slate-600 mb-2">{cert.issuer[language]}</p>
                    <div className="text-xs text-slate-500 font-mono mb-2">{cert.number}</div>
                    <div className="text-sm font-bold text-teal-600">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section - Unbalanced Grid with Overlaps */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                {language === "jp" ? "お客様の声" : "CLIENT TESTIMONIALS"}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
                {language === "jp" ? "信頼いただいている自治体様" : "Trusted by Local Governments"}
              </h2>
              <div className="w-32 h-1 bg-slate-800 mx-auto mb-6"></div>
            </div>

            {/* Unbalanced Grid Layout */}
            <div className="grid grid-cols-12 gap-8 mb-16">
              {/* Large Testimonial - Left Side */}
              <div className="col-span-12 lg:col-span-7 relative">
                <div className="bg-white border border-slate-300 shadow-lg p-8 relative z-10">
                  {/* Overlapping Image */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-800 flex items-center justify-center text-white font-bold text-2xl z-20">
                    A
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">A市</h3>
                    <p className="text-slate-600 mb-1">情報政策課長</p>
                    <p className="text-xl font-semibold text-slate-800">田中 太郎 様</p>
                  </div>

                  <blockquote className="text-slate-700 leading-relaxed mb-8 text-lg italic">
                    "AEGIS LLPとの協業により、市民サービスの待ち時間を50%削減することができました。専門的な知識と丁寧なサポートにより、職員のデジタルリテラシー向上も実現しています。デジタル変革は単なる技術導入ではなく、組織全体の意識改革が重要だと実感しました。"
                  </blockquote>

                  <div className="bg-slate-50 p-6 mb-6">
                    <h4 className="text-sm font-bold text-slate-800 mb-2 tracking-wide">プロジェクト</h4>
                    <p className="text-slate-700 font-medium">デジタル窓口システム導入</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 border border-slate-300">
                      <div className="text-3xl font-bold text-slate-800">50%</div>
                      <div className="text-xs text-slate-600 font-medium tracking-wide">待ち時間削減</div>
                    </div>
                    <div className="text-center p-4 border border-slate-300">
                      <div className="text-3xl font-bold text-slate-800">95%</div>
                      <div className="text-xs text-slate-600 font-medium tracking-wide">職員満足度</div>
                    </div>
                    <div className="text-center p-4 border border-slate-300">
                      <div className="text-3xl font-bold text-slate-800">2023</div>
                      <div className="text-xs text-slate-600 font-medium tracking-wide">実施年度</div>
                    </div>
                  </div>
                </div>

                {/* Background SVG Illustration */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 opacity-10 z-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="currentColor" className="text-teal-600" />
                    <path d="M30 50 L45 65 L70 35" stroke="white" strokeWidth="4" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Smaller Cards - Right Side */}
              <div className="col-span-12 lg:col-span-5 space-y-6">
                {/* Second Testimonial */}
                <div className="bg-white border border-slate-300 shadow-lg p-6 relative">
                  <div className="absolute -top-3 -left-3 w-16 h-16 bg-slate-600 flex items-center justify-center text-white font-bold text-lg">
                    B
                  </div>

                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">B県</h3>
                    <p className="text-sm text-slate-600 mb-1">デジタル戦略室長</p>
                    <p className="text-base font-semibold text-slate-800 mb-4">佐藤 花子 様</p>

                    <blockquote className="text-slate-700 leading-relaxed mb-4 text-sm">
                      "県全体のデータ統合プラットフォーム構築において、AEGIS LLPの技術力と実行力は素晴らしいものでした。"
                    </blockquote>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 border border-slate-300">
                        <div className="text-xl font-bold text-slate-800">30%</div>
                        <div className="text-xs text-slate-600">効率向上</div>
                      </div>
                      <div className="text-center p-2 border border-slate-300">
                        <div className="text-xl font-bold text-slate-800">24/7</div>
                        <div className="text-xs text-slate-600">安定運用</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Testimonial */}
                <div className="bg-white border border-slate-300 shadow-lg p-6 relative">
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon points="50,10 90,90 10,90" fill="currentColor" className="text-teal-600" />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-1">C市</h3>
                  <p className="text-sm text-slate-600 mb-1">市長</p>
                  <p className="text-base font-semibold text-slate-800 mb-4">山田 次郎 様</p>

                  <blockquote className="text-slate-700 leading-relaxed mb-4 text-sm">
                    "スマートシティ構想の実現において、市民の生活の質が大幅に向上しました。"
                  </blockquote>

                  <div className="text-center p-3 border border-slate-300">
                    <div className="text-2xl font-bold text-slate-800">20%</div>
                    <div className="text-xs text-slate-600">エネルギー効率改善</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Client Logos with Overlapping Design */}
            <div className="relative">
              <h3 className="text-xl font-bold text-slate-800 mb-8 text-center">
                {language === "jp" ? "その他の協業実績" : "Additional Partnerships"}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from({ length: 12 }, (_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-white border border-slate-300 p-4 flex items-center justify-center relative group hover:z-10 hover:scale-105 hover:border-teal-400 transition-all duration-300"
                    style={{
                      transform: index % 3 === 1 ? "translateY(-8px)" : index % 3 === 2 ? "translateY(8px)" : "translateY(0)",
                    }}
                  >
                    <img
                      src={`/placeholder.svg?height=60&width=60`}
                      alt={`Client ${index + 1}`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />

                    {/* Overlapping text for some items */}
                    {index % 4 === 0 && (
                      <div className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs px-2 py-1 font-bold">
                        NEW
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="10" y="10" width="80" height="80" fill="currentColor" className="text-slate-600" />
                  </svg>
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-20 h-20 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="currentColor" className="text-teal-600" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Documents & Resources Section - Explorer Style with Overlap */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                {language === "jp" ? "企業資料・ダウンロード" : "CORPORATE DOCUMENTS"}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
                {language === "jp" ? "資料ダウンロード" : "Document Downloads"}
              </h2>
              <div className="w-32 h-1 bg-slate-800 mx-auto mb-6"></div>
            </div>

            {/* Explorer-Style Interface with Creative Overlap */}
            <div className="bg-white border border-slate-300 shadow-lg overflow-hidden relative">
              {/* Explorer Header */}
              <div className="bg-slate-100 border-b border-slate-300 p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white border border-slate-300 px-4 py-2 text-sm text-slate-600">
                    AEGIS LLP / Documents / {language === "jp" ? "企業資料" : "Corporate"}
                  </div>
                </div>
              </div>

              {/* Explorer Content */}
              <div className="p-6 pb-32 relative">
                {/* Folder Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { name: { jp: "会社情報", en: "Company Info" }, count: 2 },
                    { name: { jp: "技術資料", en: "Technical" }, count: 2 },
                    { name: { jp: "実績資料", en: "Case Studies" }, count: 1 },
                    { name: { jp: "セキュリティ", en: "Security" }, count: 1 },
                  ].map((folder, index) => (
                    <div key={index} className="bg-slate-50 border border-slate-200 p-4 hover:bg-slate-100 transition-colors cursor-pointer">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-slate-600 mx-auto mb-2 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-slate-800 mb-1">{folder.name[language]}</div>
                        <div className="text-xs text-slate-500">{folder.count} files</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Document List */}
                <div className="space-y-3">
                  {[
                    {
                      title: { jp: "会社案内パンフレット", en: "Company Profile Brochure" },
                      description: {
                        jp: "AEGIS LLPの事業概要と実績をまとめた総合資料",
                        en: "Comprehensive overview of AEGIS LLP's services and achievements",
                      },
                      pages: "24",
                      size: "3.2MB",
                      format: "PDF",
                      category: { jp: "会社情報", en: "Company Info" },
                    },
                    {
                      title: { jp: "DX推進ガイドブック", en: "DX Promotion Guidebook" },
                      description: {
                        jp: "自治体向けデジタル変革の進め方を詳しく解説",
                        en: "Detailed guide on digital transformation for municipalities",
                      },
                      pages: "48",
                      size: "5.8MB",
                      format: "PDF",
                      category: { jp: "技術資料", en: "Technical" },
                    },
                    {
                      title: { jp: "導入事例集", en: "Implementation Case Studies" },
                      description: {
                        jp: "全国の自治体での成功事例を詳細に紹介",
                        en: "Detailed success stories from municipalities nationwide",
                      },
                      pages: "36",
                      size: "4.1MB",
                      format: "PDF",
                      category: { jp: "実績資料", en: "Case Studies" },
                    },
                    {
                      title: { jp: "セキュリティ対策資料", en: "Security Measures Documentation" },
                      description: {
                        jp: "情報セキュリティ対策の詳細と認証情報",
                        en: "Detailed security measures and certification information",
                      },
                      pages: "16",
                      size: "2.3MB",
                      format: "PDF",
                      category: { jp: "セキュリティ", en: "Security" },
                    },
                    {
                      title: { jp: "料金体系・サービス一覧", en: "Service Pricing & Overview" },
                      description: {
                        jp: "各種サービスの詳細と料金体系をご案内",
                        en: "Detailed service descriptions and pricing structure",
                      },
                      pages: "12",
                      size: "1.8MB",
                      format: "PDF",
                      category: { jp: "サービス", en: "Services" },
                    },
                    {
                      title: { jp: "技術仕様書", en: "Technical Specifications" },
                      description: {
                        jp: "システム要件と技術仕様の詳細資料",
                        en: "Detailed system requirements and technical specifications",
                      },
                      pages: "28",
                      size: "3.7MB",
                      format: "PDF",
                      category: { jp: "技術資料", en: "Technical" },
                    },
                  ].map((document, index) => (
                    <div key={index} className="flex items-center p-4 hover:bg-slate-50 border border-slate-200 transition-colors group">
                      <div className="w-8 h-8 bg-slate-600 flex items-center justify-center mr-4">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-800 mb-1">{document.title[language]}</h3>
                            <p className="text-slate-600 mb-2 text-base leading-relaxed">{document.description[language]}</p>
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                              <span className="bg-slate-200 px-2 py-1 text-xs font-medium">{document.category[language]}</span>
                              <span>{document.pages} {language === "jp" ? "ページ" : "pages"}</span>
                              <span>{document.size}</span>
                              <span>{document.format}</span>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="ml-4 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-bold tracking-wider text-sm transition-all duration-300 bg-transparent"
                          >
                            <Download className="mr-2 w-4 h-4" />
                            {language === "jp" ? "ダウンロード" : "DOWNLOAD"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Creative Overlapping Custom Document Section */}
              <div className="absolute bottom-0 left-0 right-0 z-30">
                {/* Diagonal Cut Design */}
                <div className="relative">
                  {/* Top diagonal mask */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-slate-800 via-teal-600 to-slate-800 transform -skew-y-1 origin-top-left"></div>

                  {/* Main content area */}
                  <div className="bg-slate-800 text-white pt-12 pb-8 px-8 relative">
                    {/* Decorative corner elements */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-teal-400"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-teal-400"></div>

                    <div className="max-w-4xl mx-auto text-center relative">
                      {/* Icon and title section */}
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-12 h-12 bg-teal-600 flex items-center justify-center mr-4 transform rotate-45">
                          <FileText className="w-6 h-6 text-white transform -rotate-45" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-wide">
                          {language === "jp" ? "カスタム資料のご依頼" : "Custom Document Requests"}
                        </h3>
                      </div>

                      {/* Description with enhanced typography */}
                      <div className="mb-8 relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-teal-400"></div>
                        <p className="text-lg leading-relaxed opacity-90 font-light max-w-3xl mx-auto pl-8">
                          {language === "jp"
                            ? "お客様の具体的なニーズに合わせた提案資料や技術仕様書の作成も承っております。専門チームが迅速かつ高品質な資料をご提供いたします。"
                            : "We create custom proposal documents and technical specifications tailored to your specific needs. Our expert team delivers high-quality materials quickly and efficiently."}
                        </p>
                      </div>

                      {/* Enhanced CTA button with dual action */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                          size="lg"
                          className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 font-bold text-lg tracking-wider shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <Mail className="mr-3 w-6 h-6" />
                          {language === "jp" ? "カスタム資料を依頼" : "REQUEST CUSTOM DOCUMENTS"}
                        </Button>

                        <div className="text-sm opacity-75 flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {language === "jp" ? "通常3営業日でお届け" : "Usually delivered within 3 business days"}
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div>
                    </div>

                    {/* Decorative bottom corner elements */}
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-teal-400"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-teal-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section - Unified Layout */}
      <section
        className="py-20 bg-white relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "40px 30px, 40px 30px",
          backgroundPosition: "0 0, 0 0",
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-800">
                {language === "jp" ? "お気軽にお問い合わせください" : "Contact Us Today"}
              </h2>
              <p className="text-xl text-slate-600 opacity-90 max-w-3xl mx-auto leading-relaxed">
                {language === "jp"
                  ? "地方自治体のデジタル変革に関するご相談を承ります。専門スタッフが丁寧にサポートいたします。"
                  : "We welcome consultations regarding municipal digital transformation. Our expert staff will provide careful support."}
              </p>
            </div>

            {/* Unified Contact Layout */}
            <div className="bg-white border-2 border-slate-800 shadow-xl overflow-hidden">
              {/* Header Section */}
              <div className="bg-slate-800 text-white p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white text-slate-800 flex items-center justify-center font-bold text-2xl">
                      A
                    </div>
                    <div>
                      <div className="text-2xl font-bold">AEGIS LLP</div>
                      <div className="text-sm opacity-80">
                        {language === "jp" ? "有限責任事業組合" : "Limited Liability Partnership"}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-80">{language === "jp" ? "設立" : "Established"}</div>
                    <div className="text-xl font-bold">1998</div>
                  </div>
                </div>
              </div>

              {/* Main Contact Content */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Contact Information */}
                <div className="p-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                      <Phone className="w-6 h-6 mr-3" />
                      {language === "jp" ? "連絡先情報" : "Contact Information"}
                    </h3>

                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-slate-800 flex items-center justify-center mt-1">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold font-mono text-slate-800">03-1234-5678</div>
                          <div className="text-sm text-slate-600">
                            {language === "jp" ? "平日 9:00-18:00" : "Weekdays 9:00-18:00"}
                          </div>
                          <div className="text-xs text-slate-500">
                            {language === "jp" ? "緊急時は24時間対応" : "24/7 emergency support"}
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-slate-800 flex items-center justify-center mt-1">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-800">info@aegis-llp.co.jp</div>
                          <div className="text-sm text-slate-600">
                            {language === "jp" ? "24時間受付" : "24/7 Available"}
                          </div>
                          <div className="text-xs text-slate-500">
                            {language === "jp" ? "1営業日以内に返信" : "Response within 1 business day"}
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-slate-800 flex items-center justify-center mt-1">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-800">
                            {language === "jp"
                              ? "〒100-0001 東京都千代田区千代田1-1-1"
                              : "1-1-1 Chiyoda, Chiyoda-ku, Tokyo 100-0001"}
                          </div>
                          <div className="text-sm text-slate-600">
                            {language === "jp" ? "JR東京駅より徒歩5分" : "5 minutes walk from JR Tokyo Station"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Card & QR Code Section */}
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t-2 border-slate-200">
                    {/* Digital Business Card */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
                        {language === "jp" ? "デジタル名刺" : "Digital Card"}
                      </h4>
                      <div className="bg-slate-800 text-white p-4 text-xs">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-6 h-6 bg-white text-slate-800 flex items-center justify-center text-xs font-bold">A</div>
                          <div className="text-[10px] opacity-80">AEGIS LLP</div>
                        </div>
                        <div className="text-[10px] font-bold mb-1">営業部長 / Sales Director</div>
                        <div className="text-sm font-bold mb-2">山田 太郎</div>
                        <div className="text-[9px] space-y-1 opacity-90">
                          <div>TEL: 03-1234-5678</div>
                          <div>EMAIL: yamada@aegis-llp.co.jp</div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white text-xs font-bold"
                      >
                        <Download className="mr-2 w-3 h-3" />
                        {language === "jp" ? "vCard" : "vCard"}
                      </Button>
                    </div>

                    {/* QR Code */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
                        {language === "jp" ? "QRコード" : "QR Code"}
                      </h4>
                      <div className="bg-white border-2 border-slate-800 p-4 flex items-center justify-center">
                        <img src="/placeholder.svg?height=80&width=80" alt="QR Code" className="w-16 h-16" />
                      </div>
                      <p className="text-xs text-slate-600 text-center mt-2">
                        {language === "jp" ? "スマートフォンで読み取り" : "Scan with smartphone"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-slate-50 p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">
                    {language === "jp" ? "お問い合わせフォーム" : "Contact Form"}
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                        {language === "jp" ? "お名前" : "Name"}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border-2 border-slate-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:border-teal-600 transition-colors"
                        placeholder={language === "jp" ? "山田太郎" : "Your Name"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                        {language === "jp" ? "メールアドレス" : "Email"}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white border-2 border-slate-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:border-teal-600 transition-colors"
                        placeholder={language === "jp" ? "example@city.lg.jp" : "your@email.com"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                        {language === "jp" ? "お問い合わせ内容" : "Message"}
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-white border-2 border-slate-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:border-teal-600 resize-none transition-colors"
                        placeholder={
                          language === "jp" ? "ご相談内容をお聞かせください" : "Please tell us about your inquiry"
                        }
                      ></textarea>
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 font-bold text-lg tracking-wider">
                      {language === "jp" ? "送信する" : "SEND MESSAGE"}
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Footer CTA Section */}
              <div className="bg-slate-800 text-white p-8">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="mr-3 w-6 h-6" />
                    {language === "jp" ? "会社案内をダウンロード" : "Download Company Profile"}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-2 border-white hover:bg-white hover:text-slate-800 px-8 py-4 font-bold bg-transparent"
                  >
                    <Calendar className="mr-3 w-6 h-6" />
                    {language === "jp" ? "オンライン相談を予約" : "Schedule Online Consultation"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white text-slate-900 flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <span className="text-lg font-bold text-white">AEGIS LLP</span>
                  <div className="text-xs opacity-80">
                    {language === "jp" ? "有限責任事業組合" : "Limited Liability Partnership"}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                {language === "jp"
                  ? "地方自治体のデジタル変革を支援する専門家集団として、持続可能な地域社会の実現を目指しています。"
                  : "As a group of experts supporting municipal digital transformation, we aim to realize sustainable local communities."}
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-700 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-slate-700 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">{language === "jp" ? "サービス" : "Services"}</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {language === "jp" ? "デジタル変革コンサルティング" : "Digital Transformation Consulting"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {language === "jp" ? "スマートシティ構想" : "Smart City Planning"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {language === "jp" ? "システム統合・運用" : "System Integration"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">
                {language === "jp" ? "会社情報" : "Company Info"}
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {language === "jp" ? "会社概要" : "About Us"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {language === "jp" ? "メンバー企業" : "Member Companies"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {language === "jp" ? "採用情報" : "Careers"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {language === "jp" ? "お知らせ" : "News"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">
                {language === "jp" ? "お問い合わせ" : "Contact"}
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="font-mono">03-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>info@aegis-llp.co.jp</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{language === "jp" ? "東京都千代田区千代田1-1-1" : "1-1-1 Chiyoda, Chiyoda-ku, Tokyo"}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{language === "jp" ? "平日 9:00-18:00" : "Weekdays 9:00-18:00"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>
              &copy; 2024 AEGIS LLP. All rights reserved. |{" "}
              {language === "jp" ? "プライバシーポリシー" : "Privacy Policy"} |{" "}
              {language === "jp" ? "利用規約" : "Terms of Service"}
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowRight className="w-6 h-6 transform -rotate-90 group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </div>
  )
}