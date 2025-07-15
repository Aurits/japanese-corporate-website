"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Mail,
  MapPin,
  Network,
  Phone,
  Play,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AegisHomepage() {
  const [activeTimelineYear, setActiveTimelineYear] = useState(2024)
  const [activeService, setActiveService] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isVisible, setIsVisible] = useState({})
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    experts: 0,
    support: 24,
  })

  const timelineData = [
    {
      year: 1998,
      title: "AEGIS LLP設立",
      description: "地方自治体向けコンサルティング事業を開始。デジタル化の黎明期から自治体の課題解決に取り組む。",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      year: 2005,
      title: "デジタル化支援事業拡大",
      description: "全国50以上の自治体との協業実績を達成。電子政府構想の推進に貢献。",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      year: 2015,
      title: "スマートシティ構想開始",
      description: "IoT・AI技術を活用した次世代都市計画に着手。Society 5.0実現への取り組みを本格化。",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      year: 2020,
      title: "DX推進体制強化",
      description:
        "コロナ禍における自治体のデジタル変革を全面支援。リモートワーク環境構築とオンライン住民サービスの実現。",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      year: 2024,
      title: "持続可能な未来への挑戦",
      description: "カーボンニュートラル実現に向けた自治体支援を本格化。AI・データ活用による効率的な行政運営の実現。",
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
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }))
          if (entry.target.id === "trust-indicators") {
            animateCounters()
          }
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const countersData = [
      { key: "years", target: 26 },
      { key: "projects", target: 150 },
      { key: "experts", target: 85 },
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
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(current),
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
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>

      {/* Enhanced Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/2835998-hd_1280_720_24fps.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </video>
          {/* Video Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group">
              <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                100年先の未来のために、地方自治体と共に歩む
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 font-medium opacity-90">
                豊かな創造と確かな技術で地域社会に貢献する
              </p>
              <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
                デジタル変革のパートナーとして、持続可能な地域社会の実現を支援します
              </p>
            </div>
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="mr-3 w-6 h-6" />
                提案資料をダウンロード
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 font-semibold backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-3 w-6 h-6" />
                無料相談を予約
              </Button>
            </div>
            {/* Trust Indicators with Counter Animation */}
            <div
              id="trust-indicators"
              data-animate
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${isVisible["trust-indicators"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">{counters.years}+</div>
                <div className="text-sm opacity-80">年の実績</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">{counters.projects}+</div>
                <div className="text-sm opacity-80">プロジェクト</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">{counters.experts}+</div>
                <div className="text-sm opacity-80">専門家</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">{counters.support}/7</div>
                <div className="text-sm opacity-80">サポート</div>
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
        className={`py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden transition-all duration-1000 ${isVisible["statistics-section"] ? "opacity-100" : "opacity-0"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">信頼の実績</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 font-medium">数字で見るAEGISの信頼性</p>
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
                      unit: "年",
                      title: "1998年以来の歴史と実績",
                      description: "地方自治体との信頼関係を築き、持続可能な地域社会の実現に貢献してまいりました。",
                      icon: Award,
                      color: "teal",
                      bgImage: "/placeholder.svg?height=400&width=600",
                    },
                    {
                      number: "150",
                      unit: "件+",
                      title: "全国の地方自治体に根差した活動",
                      description: "成功したデジタル変革プロジェクトで地域の課題を解決し、住民サービスの向上を実現。",
                      icon: TrendingUp,
                      color: "slate",
                      bgImage: "/placeholder.svg?height=400&width=600",
                    },
                    {
                      number: "85",
                      unit: "人",
                      title: "地域を支える高度で多様な技術力",
                      description: "各分野の専門資格を持つエキスパートが最適なソリューションを提供いたします。",
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
                              <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                                実績
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                                {stat.title}
                              </h3>
                              <p className="text-lg text-slate-600 leading-relaxed mb-8">{stat.description}</p>
                            </div>
                          </div>
                          {/* Large Number Display */}
                          <div className="bg-white p-8 border-l-8 border-teal-600">
                            <div className="flex items-baseline space-x-4">
                              <div className="text-8xl lg:text-9xl font-black text-teal-600 leading-none">
                                {stat.number}
                              </div>
                              <div className="text-2xl font-bold text-slate-600 tracking-wider">{stat.unit}</div>
                            </div>
                          </div>
                          {/* Key Metrics */}
                          <div className="grid grid-cols-3 gap-6">
                            {[
                              { value: "100%", label: "満足度" },
                              { value: "24/7", label: "サポート" },
                              { value: "30%", label: "効率向上" },
                            ].map((metric, metricIndex) => (
                              <div key={metricIndex} className="text-center border-t-4 border-slate-300 pt-4">
                                <div className="text-2xl font-bold text-slate-800">{metric.value}</div>
                                <div className="text-sm text-slate-600 font-medium tracking-wide">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Right Side - Visual */}
                        <div className="relative">
                          <div className="aspect-square bg-slate-100 overflow-hidden relative">
                            <img
                              src={stat.bgImage || "/placeholder.svg"}
                              alt={stat.title}
                              className="w-full h-full object-cover filter grayscale"
                            />
                            <div className="absolute inset-0 bg-slate-900/20"></div>
                            <div className="absolute top-8 right-8 w-16 h-16 bg-teal-600 flex items-center justify-center">
                              <stat.icon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          {/* Vertical Text */}
                          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
                            <div className="writing-mode-vertical text-slate-400 text-xs tracking-widest font-bold">
                              専門性
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
        className={`py-20 bg-gradient-to-br from-white via-slate-50 to-white relative transition-all duration-1000 ${isVisible["timeline-section"] ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 border-b-4 border-teal-600 inline-block pb-2">
                AEGIS の歩み
              </h2>
              <p className="text-xl text-slate-600 mb-8">豊かな創造と確かな技術で地域社会に貢献する軌跡</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Content */}
              <div className="space-y-8 lg:sticky lg:top-24">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 leading-relaxed">
                    {currentTimeline.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{currentTimeline.description}</p>
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
                        transitionDelay: `${index * 100}ms`,
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
                    主な成果
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      自治体業務効率化 30% 向上
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      住民満足度 95% 以上達成
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      コスト削減 平均 25% 実現
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
                          transitionDelay: `${index * 150}ms`,
                        }}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${currentTimeline.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Vertical Japanese Text */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
                  <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest">技術革新</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">事業内容</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 mb-8 font-medium max-w-3xl mx-auto leading-relaxed">
                地方自治体のデジタル変革を支援する包括的なサービス
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
                      title: "デジタル変革コンサルティング",
                      subtitle: "DIGITAL TRANSFORMATION",
                      description:
                        "自治体の業務プロセス改善とデジタル化を総合的に支援。住民サービスの向上と業務効率化を実現し、持続可能な行政運営を支援します。",
                      features: [
                        "業務プロセス分析・改善",
                        "システム導入支援",
                        "職員研修・サポート",
                        "効果測定・改善提案",
                      ],
                      bgImage: "/placeholder.svg?height=500&width=700",
                      color: "teal",
                    },
                    {
                      number: "02",
                      icon: Network,
                      title: "スマートシティ構想",
                      subtitle: "SMART CITY PLANNING",
                      description:
                        "IoT、AI、ビッグデータを活用したスマートシティの企画・設計・実装を一貫してサポート。Society 5.0の実現に向けた包括的なソリューションを提供します。",
                      features: ["IoT基盤構築", "データ分析・活用", "市民参加型プラットフォーム", "持続可能性評価"],
                      bgImage: "/placeholder.svg?height=500&width=700",
                      color: "slate",
                    },
                    {
                      number: "03",
                      icon: Shield,
                      title: "システム統合・運用",
                      subtitle: "SYSTEM INTEGRATION",
                      description:
                        "既存システムとの連携を考慮した統合ソリューションと24時間365日の運用サポートを提供。セキュリティと安定性を重視した信頼性の高いシステム運用を実現します。",
                      features: ["24/7監視・サポート", "セキュリティ対策", "災害対策・BCP", "パフォーマンス最適化"],
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
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-slate-900/30"></div>
                            {/* Service Number Overlay */}
                            <div className="absolute top-8 left-8">
                              <div className="text-8xl font-black text-white/20 leading-none">{service.number}</div>
                            </div>
                            {/* Icon */}
                            <div className="absolute bottom-8 right-8 w-16 h-16 bg-slate-800 flex items-center justify-center">
                              <service.icon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          {/* Vertical Text */}
                          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
                            <div className="writing-mode-vertical text-slate-400 text-xs tracking-widest font-bold">
                              {service.subtitle}
                            </div>
                          </div>
                        </div>
                        {/* Right Side - Content */}
                        <div className="space-y-8 order-1 lg:order-2">
                          <div className="relative">
                            <div className="absolute -left-8 top-0 w-2 h-full bg-teal-600"></div>
                            <div className="pl-8">
                              <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                                SERVICE {service.number}
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                                {service.title}
                              </h3>
                              <p className="text-sm text-slate-500 font-medium tracking-wider mb-6">
                                {service.subtitle}
                              </p>
                              <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.description}</p>
                            </div>
                          </div>
                          {/* Service Features */}
                          <div className="bg-white border border-slate-300 shadow-lg p-6">
                            <h4 className="text-lg font-bold text-slate-800 mb-4 tracking-wide">主要サービス</h4>
                            <div className="grid grid-cols-1 gap-3">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-slate-700">
                                  <div className="w-2 h-2 bg-teal-600 mr-4 flex-shrink-0"></div>
                                  <span className="font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* CTA Button */}
                          <div className="pt-4">
                            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                              詳細を見る
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
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">実績紹介</h2>
              <p className="text-xl text-slate-600 mb-8">Problem → Proposal → Result の実証された成果</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "A市デジタル窓口システム",
                  period: "2023年4月 - 2024年3月",
                  result: "待ち時間50%削減",
                  image: "/placeholder.svg?height=250&width=400",
                  tags: ["デジタル化", "住民サービス"],
                  metrics: [
                    { value: "50%", label: "待ち時間削減" },
                    { value: "95%", label: "満足度" },
                  ],
                },
                {
                  title: "B県統合データプラットフォーム",
                  period: "2022年10月 - 2023年9月",
                  result: "業務効率30%向上",
                  image: "/placeholder.svg?height=250&width=400",
                  tags: ["データ統合", "AI活用"],
                  metrics: [
                    { value: "30%", label: "効率向上" },
                    { value: "24/7", label: "運用体制" },
                  ],
                },
                {
                  title: "C市スマートシティ基盤構築",
                  period: "2023年1月 - 継続中",
                  result: "エネルギー効率20%改善",
                  image: "/placeholder.svg?height=250&width=400",
                  tags: ["IoT", "スマートシティ"],
                  metrics: [
                    { value: "20%", label: "省エネ効果" },
                    { value: "1000+", label: "IoTセンサー" },
                  ],
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-white border border-slate-300 shadow-lg hover:shadow-xl hover:border-teal-400 transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
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
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2 leading-relaxed">{project.title}</h3>
                      <p className="text-sm text-slate-600 mb-4 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.period}
                      </p>
                      {/* Project Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center p-3 bg-slate-50 border border-teal-200">
                            <div className="text-2xl font-bold text-teal-600">{metric.value}</div>
                            <div className="text-xs text-slate-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="text-lg font-bold text-teal-600 mb-4">{project.result}</div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-slate-800 hover:bg-teal-50 hover:border-teal-400 group bg-transparent border-2 transform hover:scale-105 transition-all duration-300"
                      >
                        詳細を見る
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
                全ての実績を見る
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
              <p className="text-xl text-slate-600 mb-8">最新技術を活用したデジタル変革ソリューション</p>
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
                      title: "AI・機械学習",
                      desc: "データ分析と予測モデリングによる効率的な意思決定支援",
                    },
                    {
                      number: "02",
                      title: "クラウド基盤",
                      desc: "スケーラブルで信頼性の高いクラウドソリューション",
                    },
                    {
                      number: "03",
                      title: "IoT統合",
                      desc: "センサーデータの統合と活用による最適化",
                    },
                    {
                      number: "04",
                      title: "セキュリティ",
                      desc: "堅牢な情報セキュリティ対策と脅威対策",
                    },
                  ].map((tech, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white shadow-lg p-8 h-32 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-8 flex-1">
                          <div className="w-16 h-16 bg-slate-800 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                            {tech.number}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{tech.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{tech.desc}</p>
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
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center tracking-wide">DX推進メソドロジー</h3>
              {/* Box Layout with Center Logo */}
              <div className="relative max-w-4xl mx-auto">
                <div className="grid grid-cols-2 gap-16 lg:gap-24">
                  {/* Top Row */}
                  <div className="text-center relative">
                    {/* Artistic Japanese Number Only */}
                    <div
                      className="absolute -top-8 -left-4 text-8xl font-light text-slate-200 transform -rotate-12 select-none"
                      style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}
                    >
                      一
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3 mt-8">現状分析</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">業務プロセスの詳細分析</p>
                  </div>
                  <div className="text-center relative">
                    {/* Artistic Japanese Number Only */}
                    <div
                      className="absolute -top-8 -right-4 text-8xl font-light text-slate-200 transform rotate-12 select-none"
                      style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}
                    >
                      二
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3 mt-8">戦略策定</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">最適なDX戦略の立案</p>
                  </div>
                  {/* Bottom Row */}
                  <div className="text-center relative">
                    {/* Artistic Japanese Number Only */}
                    <div
                      className="absolute -bottom-8 -left-4 text-8xl font-light text-slate-200 transform rotate-12 select-none"
                      style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}
                    >
                      四
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">運用最適化</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">継続的な改善とサポート</p>
                  </div>
                  <div className="text-center relative">
                    {/* Artistic Japanese Number Only */}
                    <div
                      className="absolute -bottom-8 -right-4 text-8xl font-light text-slate-200 transform -rotate-12 select-none"
                      style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}
                    >
                      三
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">実装支援</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">段階的なシステム導入</p>
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

      {/* Government Partnership & Certifications Section - Updated */}
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
                政府認定・官民連携
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
                信頼の政府認定パートナー
              </h2>
              <div className="w-32 h-1 bg-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 mb-8 font-medium max-w-4xl mx-auto leading-relaxed">
                経済産業省をはじめとする政府機関との連携により、地方自治体のデジタル変革を支援しています
              </p>
            </div>
            {/* Government Logos Grid - Updated with 4 cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  name: "経済産業省",
                  abbr: "METI",
                  established: "2018",
                  image: "/placeholder.svg?height=120&width=200",
                },
                {
                  name: "地方創生推進事務局",
                  abbr: "RRB",
                  established: "2015",
                  image: "/placeholder.svg?height=120&width=200",
                },
                {
                  name: "総務省",
                  abbr: "MIC",
                  established: "2019",
                  image: "/placeholder.svg?height=120&width=200",
                },
                {
                  name: "デジタル庁",
                  abbr: "JDA",
                  established: "2021",
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
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale"
                    />
                  </div>
                  <div className="text-xs font-bold text-slate-800 tracking-wider mb-2">{partner.abbr}</div>
                  <div className="text-sm text-slate-600 font-medium mb-2">{partner.name}</div>
                  <div className="text-xs text-slate-500">連携開始 {partner.established}</div>
                </div>
              ))}
            </div>
            {/* Certifications & Awards */}
            <div className="bg-white border border-teal-400 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center tracking-wide">認定・資格・表彰</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "DX認定事業者",
                    issuer: "経済産業省",
                    year: "2022",
                    number: "DX-2022-001234",
                    icon: Award,
                  },
                  {
                    title: "情報セキュリティマネジメント",
                    issuer: "ISO/IEC 27001",
                    year: "2020",
                    number: "ISO27001-2020-5678",
                    icon: Shield,
                  },
                  {
                    title: "地方創生優良事例表彰",
                    issuer: "内閣府",
                    year: "2023",
                    number: "CAO-2023-9012",
                    icon: TrendingUp,
                  },
                ].map((cert, index) => (
                  <div key={index} className="bg-white border border-teal-400 text-center p-6">
                    <div className="w-16 h-16 bg-teal-600 flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{cert.title}</h4>
                    <p className="text-sm text-slate-600 mb-2">{cert.issuer}</p>
                    <div className="text-xs text-slate-500 font-mono mb-2">{cert.number}</div>
                    <div className="text-sm font-bold text-teal-600">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section - Updated with circular letters */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                お客様の声
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
                信頼いただいている自治体様
              </h2>
              <div className="w-32 h-1 bg-slate-800 mx-auto mb-6"></div>
            </div>
            {/* Unbalanced Grid Layout */}
            <div className="grid grid-cols-12 gap-8 mb-16">
              {/* Large Testimonial - Left Side */}
              <div className="col-span-12 lg:col-span-7 relative">
                <div className="bg-white border border-slate-300 shadow-lg p-8 relative z-10">
                  {/* Overlapping Circle */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-2xl z-20">
                    A
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">A市</h3>
                    <p className="text-slate-600 mb-1">情報政策課長</p>
                    <p className="text-xl font-semibold text-slate-800">田中 太郎 様</p>
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed mb-8 text-lg italic">
                    "AEGIS
                    LLPとの協業により、市民サービスの待ち時間を50%削減することができました。専門的な知識と丁寧なサポートにより、職員のデジタルリテラシー向上も実現しています。デジタル変革は単なる技術導入ではなく、組織全体の意識改革が重要だと実感しました。"
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
                  <div className="absolute -top-3 -left-3 w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    B
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">B県</h3>
                    <p className="text-sm text-slate-600 mb-1">デジタル戦略室長</p>
                    <p className="text-base font-semibold text-slate-800 mb-4">佐藤 花子 様</p>
                    <blockquote className="text-slate-700 leading-relaxed mb-4 text-sm">
                      "県全体のデータ統合プラットフォーム構築において、AEGIS
                      LLPの技術力と実行力は素晴らしいものでした。"
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
              <h3 className="text-xl font-bold text-slate-800 mb-8 text-center">その他の協業実績</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from({ length: 12 }, (_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-white border border-slate-300 p-4 flex items-center justify-center relative group hover:z-10 hover:scale-105 hover:border-teal-400 transition-all duration-300"
                    style={{
                      transform:
                        index % 3 === 1 ? "translateY(-8px)" : index % 3 === 2 ? "translateY(8px)" : "translateY(0)",
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

      {/* Corporate Documents & Resources Section - Minimal Directory Style */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                企業資料
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight">資料ダウンロード</h2>
              <div className="w-32 h-1 bg-slate-800 mx-auto mb-6"></div>
            </div>

            {/* Minimal Directory Layout */}
            <div className="bg-white border border-slate-200 shadow-sm">
              {/* Directory Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-800">資料一覧</h3>
                  <span className="text-sm text-slate-600">6 files</span>
                </div>
              </div>

              {/* Directory List */}
              <div className="divide-y divide-slate-200">
                {[
                  {
                    title: "会社案内パンフレット",
                    description: "AEGIS LLPの事業概要と実績",
                    size: "3.2MB",
                    type: "PDF",
                    category: "会社情報",
                  },
                  {
                    title: "DX推進ガイドブック",
                    description: "自治体向けデジタル変革の進め方",
                    size: "5.8MB",
                    type: "PDF",
                    category: "技術資料",
                  },
                  {
                    title: "導入事例集",
                    description: "全国の自治体での成功事例",
                    size: "4.1MB",
                    type: "PDF",
                    category: "実績資料",
                  },
                  {
                    title: "セキュリティ対策資料",
                    description: "情報セキュリティ対策と認証情報",
                    size: "2.3MB",
                    type: "PDF",
                    category: "セキュリティ",
                  },
                  {
                    title: "料金体系・サービス一覧",
                    description: "各種サービスの詳細と料金体系",
                    size: "1.8MB",
                    type: "PDF",
                    category: "サービス",
                  },
                  {
                    title: "技術仕様書",
                    description: "システム要件と技術仕様",
                    size: "3.7MB",
                    type: "PDF",
                    category: "技術資料",
                  },
                ].map((document, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-slate-50 transition-colors group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                          <FileText className="w-5 h-5 text-slate-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-semibold text-slate-800 mb-1">{document.title}</h4>
                          <p className="text-sm text-slate-600 mb-2">{document.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-slate-500">
                            <span className="bg-slate-100 px-2 py-0.5 rounded">{document.category}</span>
                            <span>{document.type}</span>
                            <span>{document.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-4 text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Document Request CTA - Matching your design */}
            <div className="mt-16 bg-slate-800 text-white p-12 relative overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-teal-400 opacity-20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-teal-400 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-teal-400 opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-teal-400 opacity-20"></div>

              <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Icon and title */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-teal-600 transform rotate-45 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white transform -rotate-45" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6">Request custom materials</h3>

                {/* Description with left accent */}
                <div className="relative mb-10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400"></div>
                  <p className="text-lg leading-relaxed opacity-90 pl-8 text-left max-w-3xl mx-auto">
                    We can also create proposal documents and technical specifications tailored to your specific needs. Our specialized team will provide you with high-quality documents quickly.
                  </p>
                </div>

                {/* CTA Button and delivery info */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="mr-3 w-6 h-6" />
                    Request Custom Materials
                  </Button>
                  <div className="text-sm opacity-75 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Usually delivered within 3 business days
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-10 w-32 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section - Full Width */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-800">お気軽にお問い合わせください</h2>
            <p className="text-xl text-slate-600 opacity-90 max-w-3xl mx-auto leading-relaxed">
              地方自治体のデジタル変革に関するご相談を承ります。専門スタッフが丁寧にサポートいたします。
            </p>
          </div>
          {/* Full Width Contact Layout */}
          <div className="bg-white border-2 border-slate-800 shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-slate-800 text-white p-8">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white text-slate-800 flex items-center justify-center font-bold text-2xl">
                    A
                  </div>
                  <div>
                    <div className="text-2xl font-bold">AEGIS LLP</div>
                    <div className="text-sm opacity-80">有限責任事業組合</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-80">設立</div>
                  <div className="text-xl font-bold">1998</div>
                </div>
              </div>
            </div>
            {/* Main Contact Content */}
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Contact Information */}
                <div className="p-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                      <Phone className="w-6 h-6 mr-3" />
                      連絡先情報
                    </h3>
                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-slate-800 flex items-center justify-center mt-1">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold font-mono text-slate-800">03-1234-5678</div>
                          <div className="text-sm text-slate-600">平日 9:00-18:00</div>
                          <div className="text-xs text-slate-500">緊急時は24時間対応</div>
                        </div>
                      </div>
                      {/* Email */}
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-slate-800 flex items-center justify-center mt-1">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-800">info@aegis-llp.co.jp</div>
                          <div className="text-sm text-slate-600">24時間受付</div>
                          <div className="text-xs text-slate-500">1営業日以内に返信</div>
                        </div>
                      </div>
                      {/* Address */}
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-slate-800 flex items-center justify-center mt-1">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-800">
                            〒100-0001 東京都千代田区千代田1-1-1
                          </div>
                          <div className="text-sm text-slate-600">JR東京駅より徒歩5分</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Business Card & QR Code Section */}
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t-2 border-slate-200">
                    {/* Digital Business Card */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">デジタル名刺</h4>
                      <div className="bg-slate-800 text-white p-4 text-xs">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-6 h-6 bg-white text-slate-800 flex items-center justify-center text-xs font-bold">
                            A
                          </div>
                          <div className="text-[10px] opacity-80">AEGIS LLP</div>
                        </div>
                        <div className="text-[10px] font-bold mb-1">営業部長</div>
                        <div className="text-sm font-bold mb-2">山田 太郎</div>
                        <div className="text-[9px] space-y-1 opacity-90">
                          <div>TEL: 03-1234-5678</div>
                          <div>EMAIL: yamada@aegis-llp.co.jp</div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white text-xs font-bold bg-transparent"
                      >
                        <Download className="mr-2 w-3 h-3" />
                        vCard
                      </Button>
                    </div>
                    {/* QR Code */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">QRコード</h4>
                      <div className="bg-white border-2 border-slate-800 p-4 flex items-center justify-center">
                        <img src="/placeholder.svg?height=80&width=80" alt="QR Code" className="w-16 h-16" />
                      </div>
                      <p className="text-xs text-slate-600 text-center mt-2">スマートフォンで読み取り</p>
                    </div>
                  </div>
                </div>
                {/* Right Side - Contact Form */}
                <div className="bg-slate-50 p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">お問い合わせフォーム</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                        お名前
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border-2 border-slate-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:border-teal-600 transition-colors"
                        placeholder="山田太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                        メールアドレス
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white border-2 border-slate-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:border-teal-600 transition-colors"
                        placeholder="example@city.lg.jp"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
                        お問い合わせ内容
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-white border-2 border-slate-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:border-teal-600 resize-none transition-colors"
                        placeholder="ご相談内容をお聞かせください"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 font-bold text-lg tracking-wider">
                      送信する
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            {/* Footer CTA Section */}
            <div className="bg-slate-800 text-white p-8">
              <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="mr-3 w-6 h-6" />
                  会社案内をダウンロード
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-2 border-white hover:bg-white hover:text-slate-800 px-8 py-4 font-bold bg-transparent"
                >
                  <Calendar className="mr-3 w-6 h-6" />
                  オンライン相談を予約
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
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