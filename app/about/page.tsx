"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Building, CheckCircle, ExternalLink, Globe, MapPin, Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [activeTimelineYear, setActiveTimelineYear] = useState(2024)
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState({})

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
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
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
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>

      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
              ABOUT US
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">AEGIS LLPについて</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              1998年の設立以来、地方自治体のデジタル変革を支援し続けています
            </p>
          </div>
        </div>
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C240 20 480 20 720 60C960 100 1200 100 1440 60V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* LLP Explanation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">有限責任事業組合（LLP）とは</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  有限責任事業組合（LLP）は、経済産業省が認定する事業組織形態です。複数の専門企業が連携し、それぞれの強みを活かしながら、より高品質なサービスを提供することを目的としています。
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-white p-8 border-l-4 border-teal-600">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-600 text-white flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">経済産業省認定</h3>
                      <p className="text-slate-600">
                        当組合は経済産業省の認定を受けた正式な事業組織として、透明性と信頼性を確保しています。
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-8 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  詳しい資料をダウンロード
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square bg-slate-50 p-8">
                  <img src="/placeholder.svg?height=500&width=500" alt="LLP Structure" className="w-full h-full object-contain" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-100 opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-100 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section from Homepage */}
      <section
        id="timeline-section"
        data-animate
        className={`py-20 bg-gradient-to-br from-white via-slate-50 to-white relative transition-all duration-1000 ${isVisible["timeline-section"] ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                OUR HISTORY
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">会社の歩み</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
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
                {/* Timeline Navigation */}
                <div className="flex flex-wrap gap-4">
                  {timelineData.map((item, index) => (
                    <button
                      key={item.year}
                      onClick={() => setActiveTimelineYear(item.year)}
                      className={`px-6 py-3 font-bold transition-all duration-300 transform hover:scale-105 ${activeTimelineYear === item.year
                        ? "bg-teal-600 text-white shadow-lg scale-105"
                        : "bg-white text-slate-600 hover:bg-slate-100 shadow-md hover:shadow-lg border border-slate-200"
                        }`}
                    >
                      {item.year}
                    </button>
                  ))}
                </div>
                {/* Key Achievements */}
                <div className="bg-white border border-slate-200 shadow-sm p-6">
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
              {/* Right Side - Visual Timeline */}
              <div className="relative">
                {/* Large Year Display */}
                <div className="absolute -top-8 right-0 text-8xl lg:text-9xl font-bold text-slate-100 z-0 select-none">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - No Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                MISSION & VISION
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">私たちの使命とビジョン</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="relative p-8 border-l-4 border-teal-600 bg-gradient-to-r from-teal-50 to-white">
                <div className="absolute -left-6 top-8 w-12 h-12 bg-teal-600 text-white flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 pl-8">ミッション</h3>
                <p className="text-lg text-slate-600 leading-relaxed pl-8">
                  地方自治体のデジタル変革を通じて、持続可能で豊かな地域社会の実現に貢献します。最新技術と豊富な経験を活かし、住民サービスの向上と行政効率化を支援します。
                </p>
              </div>

              <div className="relative p-8 border-l-4 border-slate-800 bg-gradient-to-r from-slate-50 to-white">
                <div className="absolute -left-6 top-8 w-12 h-12 bg-slate-800 text-white flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 pl-8">ビジョン</h3>
                <p className="text-lg text-slate-600 leading-relaxed pl-8">
                  100年先の未来を見据え、地方自治体と共に歩み続けるパートナーとして、日本全国の地域社会の発展に貢献し、次世代に誇れる持続可能な社会を築きます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Carousel Style */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                OUR VALUES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">私たちの価値観</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
            </div>

            {/* Auto-playing Values Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${activeService * 100}%)` }}
                >
                  {[
                    {
                      icon: CheckCircle,
                      title: "信頼性",
                      subtitle: "RELIABILITY",
                      description:
                        "26年間の実績に基づく確かな信頼関係。自治体の皆様と共に歩み続けた歴史が、私たちの最大の財産です。",
                      stats: [
                        { value: "26", label: "年の実績" },
                        { value: "150+", label: "プロジェクト" },
                        { value: "100%", label: "満足度" },
                      ],
                    },
                    {
                      icon: Users,
                      title: "協働",
                      subtitle: "COLLABORATION",
                      description:
                        "自治体と共に課題解決に取り組む姿勢。9つの専門企業が一丸となり、包括的なソリューションを提供します。",
                      stats: [
                        { value: "9", label: "メンバー企業" },
                        { value: "85", label: "専門家" },
                        { value: "24/7", label: "サポート" },
                      ],
                    },
                    {
                      icon: Building,
                      title: "革新",
                      subtitle: "INNOVATION",
                      description:
                        "最新技術を活用した創造的なソリューション。AIやIoTなど、先端技術を積極的に導入し、未来の行政を創造します。",
                      stats: [
                        { value: "50+", label: "導入技術" },
                        { value: "30%", label: "効率向上" },
                        { value: "∞", label: "可能性" },
                      ],
                    },
                  ].map((value, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-8">
                          <div className="relative">
                            <div className="absolute -left-8 top-0 w-2 h-full bg-teal-600"></div>
                            <div className="pl-8">
                              <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                                VALUE {String(index + 1).padStart(2, "0")}
                              </div>
                              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                                {value.title}
                              </h3>
                              <p className="text-sm text-slate-500 font-medium tracking-wider mb-6">
                                {value.subtitle}
                              </p>
                              <p className="text-lg text-slate-600 leading-relaxed">
                                {value.description}
                              </p>
                            </div>
                          </div>
                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-6">
                            {value.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="text-center">
                                <div className="text-3xl font-bold text-teal-600">{stat.value}</div>
                                <div className="text-sm text-slate-600">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Right Side - Visual */}
                        <div className="relative">
                          <div className="aspect-square bg-gradient-to-br from-slate-100 to-white p-16 flex items-center justify-center">
                            <div className="w-32 h-32 bg-teal-600 text-white flex items-center justify-center rounded-full">
                              <value.icon className="w-16 h-16" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Carousel Navigation */}
              <div className="flex justify-center space-x-4 mt-12">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-12 h-2 transition-colors duration-300 ${activeService === index ? "bg-teal-600" : "bg-slate-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Companies - Grid without Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                MEMBER COMPANIES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">メンバー企業</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600">9つの専門企業が連携し、包括的なサービスを提供</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 9 }, (_, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white border border-slate-200 p-8 text-center hover:border-teal-400 hover:shadow-lg transition-all duration-300">
                    <div className="w-24 h-24 bg-slate-100 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:bg-teal-50 transition-colors">
                      <img
                        src={`/placeholder.svg?height=60&width=60`}
                        alt={`メンバー企業 ${index + 1}`}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">メンバー企業 {index + 1}</h3>
                    <p className="text-sm text-slate-600 mb-4">専門分野での高い技術力</p>
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-semibold">
                      詳細を見る
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                パートナーシップについて詳しく
                <ExternalLink className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Information - Clean Layout */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                COMPANY INFO
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">会社概要</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm">
              <div className="p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-8">
                    <div className="border-b border-slate-100 pb-6">
                      <dt className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">組合名</dt>
                      <dd className="text-xl font-semibold text-slate-800">AEGIS LLP</dd>
                    </div>
                    <div className="border-b border-slate-100 pb-6">
                      <dt className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">設立年月日</dt>
                      <dd className="text-xl font-semibold text-slate-800">1998年4月1日</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">所在地</dt>
                      <dd className="text-xl font-semibold text-slate-800 flex items-start">
                        <MapPin className="w-5 h-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                        〒100-0001 東京都千代田区千代田1-1-1
                      </dd>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="border-b border-slate-100 pb-6">
                      <dt className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">事業内容</dt>
                      <dd className="text-xl font-semibold text-slate-800">地方自治体向けデジタル変革コンサルティング</dd>
                    </div>
                    <div className="border-b border-slate-100 pb-6">
                      <dt className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">メンバー企業数</dt>
                      <dd className="text-xl font-semibold text-slate-800">9社</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">従業員数</dt>
                      <dd className="text-xl font-semibold text-slate-800">85名</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <p className="text-lg text-slate-600 mb-6">詳しい情報をお求めの方はお気軽にお問い合わせください</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  お問い合わせ
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 font-semibold transition-all duration-300">
                  会社案内をダウンロード
                  <ExternalLink className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}