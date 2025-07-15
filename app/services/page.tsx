"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, CheckCircle, Clock, Database, Network, Shield, TrendingUp, Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState({})

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

      {/* Consistent Page Header */}
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
              SERVICES
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">事業内容・サービス</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              地方自治体のデジタル変革を支援する包括的なソリューション
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

      {/* Services Overview - Carousel Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                OUR SERVICES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">主要サービス</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                26年間の経験と実績に基づき、自治体の課題に応じた最適なソリューションを提供します
              </p>
            </div>

            {/* Enhanced Services Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${activeService * 100}%)` }}
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
                      results: [
                        { metric: "30%", label: "業務効率向上" },
                        { metric: "50%", label: "待ち時間削減" },
                        { metric: "95%", label: "職員満足度" },
                      ],
                      bgImage: "/placeholder.svg?height=600&width=800",
                    },
                    {
                      number: "02",
                      icon: Network,
                      title: "スマートシティ構想",
                      subtitle: "SMART CITY PLANNING",
                      description:
                        "IoT、AI、ビッグデータを活用したスマートシティの企画・設計・実装を一貫してサポート。Society 5.0の実現に向けた包括的なソリューションを提供します。",
                      features: [
                        "IoT基盤構築",
                        "データ分析・活用",
                        "市民参加型プラットフォーム",
                        "持続可能性評価"
                      ],
                      results: [
                        { metric: "20%", label: "エネルギー効率" },
                        { metric: "1000+", label: "IoTセンサー" },
                        { metric: "24/7", label: "監視体制" },
                      ],
                      bgImage: "/placeholder.svg?height=600&width=800",
                    },
                    {
                      number: "03",
                      icon: Shield,
                      title: "システム統合・運用",
                      subtitle: "SYSTEM INTEGRATION",
                      description:
                        "既存システムとの連携を考慮した統合ソリューションと24時間365日の運用サポートを提供。セキュリティと安定性を重視した信頼性の高いシステム運用を実現します。",
                      features: [
                        "24/7監視・サポート",
                        "セキュリティ対策",
                        "災害対策・BCP",
                        "パフォーマンス最適化"
                      ],
                      results: [
                        { metric: "99.9%", label: "稼働率" },
                        { metric: "24/7", label: "サポート" },
                        { metric: "0", label: "セキュリティ事故" },
                      ],
                      bgImage: "/placeholder.svg?height=600&width=800",
                    },
                  ].map((service, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Visual */}
                        <div className="relative">
                          <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                            <img
                              src={service.bgImage || "/placeholder.svg"}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent"></div>
                            {/* Service Number Overlay */}
                            <div className="absolute top-8 left-8">
                              <div className="text-8xl font-black text-white/20 leading-none">{service.number}</div>
                            </div>
                            {/* Icon */}
                            <div className="absolute bottom-8 right-8 w-20 h-20 bg-teal-600 flex items-center justify-center">
                              <service.icon className="w-10 h-10 text-white" />
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
                        <div className="space-y-8">
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
                          <div className="bg-gradient-to-r from-slate-50 to-white border-l-4 border-teal-600 p-6">
                            <h4 className="text-lg font-bold text-slate-800 mb-4 tracking-wide">主要機能</h4>
                            <div className="grid grid-cols-1 gap-3">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-slate-700">
                                  <CheckCircle className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" />
                                  <span className="font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Results */}
                          <div className="grid grid-cols-3 gap-4">
                            {service.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="text-center p-4 bg-white border border-slate-200">
                                <div className="text-2xl font-bold text-teal-600">{result.metric}</div>
                                <div className="text-xs text-slate-600">{result.label}</div>
                              </div>
                            ))}
                          </div>
                          {/* CTA Button */}
                          <div>
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
                    className={`px-6 py-2 font-bold tracking-wider text-sm transition-all duration-300 ${activeService === index
                      ? "bg-teal-600 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
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

      {/* Service Process - Clean Layout */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                OUR PROCESS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">サービス提供プロセス</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
            </div>

            {/* Process Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-600 hidden lg:block"></div>
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "現状分析",
                    description: "業務プロセスの詳細分析と課題の特定",
                    icon: Users,
                    details: "現場の声を聞き、実際の業務フローを詳細に分析します",
                  },
                  {
                    step: "02",
                    title: "戦略策定",
                    description: "最適なDX戦略の立案と実行計画の作成",
                    icon: TrendingUp,
                    details: "自治体の規模や特性に応じた最適な戦略を策定します",
                  },
                  {
                    step: "03",
                    title: "実装支援",
                    description: "段階的なシステム導入と職員研修",
                    icon: Database,
                    details: "スムーズな移行と職員の理解を重視した導入を実施します",
                  },
                  {
                    step: "04",
                    title: "運用最適化",
                    description: "継続的な改善とサポート体制の構築",
                    icon: Shield,
                    details: "導入後も継続的にサポートし、最適化を図ります",
                  },
                ].map((process, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                  >
                    <div className="flex-1 lg:pr-12">
                      <div className={`bg-white p-8 shadow-sm border border-slate-200 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                        }`}>
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                          }`}>
                          <div className="w-12 h-12 bg-teal-600 text-white flex items-center justify-center">
                            <process.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-4xl font-bold text-slate-200">{process.step}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{process.title}</h3>
                        <p className="text-slate-600 mb-2">{process.description}</p>
                        <p className="text-sm text-slate-500">{process.details}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-teal-600 rounded-full hidden lg:flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 lg:pl-12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                WHY AEGIS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">選ばれる理由</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  number: "26+",
                  label: "年の実績",
                  description: "1998年の設立以来、地方自治体との信頼関係を築いてきました",
                  icon: Award,
                },
                {
                  number: "150+",
                  label: "プロジェクト",
                  description: "全国の自治体で成功したデジタル変革プロジェクト",
                  icon: TrendingUp,
                },
                {
                  number: "85+",
                  label: "専門家",
                  description: "各分野の専門資格を持つエキスパートチーム",
                  icon: Users,
                },
                {
                  number: "24/7",
                  label: "サポート",
                  description: "年中無休の運用監視とサポート体制",
                  icon: Clock,
                },
                {
                  number: "95%+",
                  label: "満足度",
                  description: "お客様からの高い評価と継続的な信頼",
                  icon: CheckCircle,
                },
                {
                  number: "30%",
                  label: "効率向上",
                  description: "平均的な業務効率改善実績",
                  icon: TrendingUp,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-8 bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-slate-100 text-slate-600 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-slate-800 mb-3">{stat.label}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                SERVICE PACKAGES
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">サービスパッケージ</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600">自治体の規模とニーズに応じた最適なパッケージをご提供</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "スタートアップ",
                  subtitle: "STARTUP",
                  target: "小規模自治体向け",
                  features: [
                    "基本的なデジタル化支援",
                    "職員研修プログラム",
                    "月次サポート",
                    "基本セキュリティ対策",
                  ],
                  recommended: false,
                },
                {
                  title: "スタンダード",
                  subtitle: "STANDARD",
                  target: "中規模自治体向け",
                  features: [
                    "包括的なDX戦略策定",
                    "システム統合支援",
                    "24時間サポート",
                    "高度なセキュリティ対策",
                    "データ分析ツール",
                  ],
                  recommended: true,
                },
                {
                  title: "エンタープライズ",
                  subtitle: "ENTERPRISE",
                  target: "大規模自治体向け",
                  features: [
                    "完全カスタマイズソリューション",
                    "専任チーム配置",
                    "24/7プレミアムサポート",
                    "最先端セキュリティ",
                    "AI・IoT統合",
                    "継続的な最適化",
                  ],
                  recommended: false,
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className={`relative p-8 bg-white border-2 ${pkg.recommended
                      ? 'border-teal-600 shadow-xl transform scale-105'
                      : 'border-slate-200 hover:border-slate-300'
                    } transition-all duration-300`}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-6 py-1 text-sm font-bold">
                      おすすめ
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <p className="text-xs text-slate-500 font-medium tracking-wider mb-2">{pkg.subtitle}</p>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
                    <p className="text-sm text-slate-600">{pkg.target}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.recommended
                        ? 'bg-teal-600 hover:bg-teal-700'
                        : 'bg-slate-800 hover:bg-slate-700'
                      } text-white font-semibold py-4`}
                  >
                    詳細を見る
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">お気軽にご相談ください</h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              貴自治体の課題に応じた最適なソリューションをご提案いたします
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                無料相談を予約
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 font-semibold transition-all duration-300 bg-transparent"
              >
                資料をダウンロード
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}