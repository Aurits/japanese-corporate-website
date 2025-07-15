"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  Lightbulb,
  Play,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function TechnologyPage() {
  const [activeTech, setActiveTech] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const technologies = [
    {
      icon: Cpu,
      title: "AI・機械学習",
      subtitle: "ARTIFICIAL INTELLIGENCE",
      description: "データ分析、予測モデリング、自動化により、行政業務の効率化と高度な意思決定を支援します。",
      features: ["データマイニング", "自然言語処理", "画像認識", "予測分析"],
      image: "/placeholder.svg?height=600&width=800",
      stats: { efficiency: "40%", accuracy: "95%", time: "80%" },
    },
    {
      icon: Cloud,
      title: "クラウドコンピューティング",
      subtitle: "CLOUD COMPUTING",
      description: "スケーラブルでセキュアなクラウド基盤を構築し、柔軟なシステム運用とコスト最適化を実現します。",
      features: ["IaaS/PaaS/SaaS導入", "ハイブリッドクラウド", "クラウド移行支援", "運用・監視"],
      image: "/placeholder.svg?height=600&width=800",
      stats: { cost: "30%", uptime: "99.9%", scalability: "∞" },
    },
    {
      icon: Globe,
      title: "IoT・センサーネットワーク",
      subtitle: "INTERNET OF THINGS",
      description: "都市インフラや環境データをリアルタイムで収集・分析し、スマートシティの実現を加速します。",
      features: ["センサーデバイス連携", "データ可視化", "リアルタイム監視", "エッジコンピューティング"],
      image: "/placeholder.svg?height=600&width=800",
      stats: { sensors: "1000+", realtime: "24/7", coverage: "100%" },
    },
    {
      icon: Shield,
      title: "情報セキュリティ",
      subtitle: "CYBER SECURITY",
      description: "高度なセキュリティ対策とリスク管理により、自治体の情報資産を脅威から守ります。",
      features: ["サイバー攻撃対策", "データ暗号化", "アクセス管理", "BCP/DRP策定"],
      image: "/placeholder.svg?height=600&width=800",
      stats: { prevention: "99%", response: "< 1分", incidents: "0" },
    },
  ]

  const dxMethodologySteps = [
    {
      step: "一",
      number: "01",
      title: "現状分析",
      description: "自治体の現状業務プロセスを詳細に分析し、デジタル変革のボトルネックとなる課題を明確化します。",
    },
    {
      step: "二",
      number: "02",
      title: "戦略策定",
      description: "特定された課題に基づき、最適なデジタル変革戦略とロードマップを策定。目標設定とKPIを明確にします。",
    },
    {
      step: "三",
      number: "03",
      title: "開発実装",
      description: "戦略に基づき、最適な技術を選定し、システムやサービスの設計・開発を行います。アジャイル開発も導入。",
    },
    {
      step: "四",
      number: "04",
      title: "導入支援",
      description: "新システムの導入から既存システムからのデータ移行、職員研修まで、スムーズな移行をサポートします。",
    },
    {
      step: "五",
      number: "05",
      title: "運用最適化",
      description: "導入後のシステム運用、継続的な改善提案、パフォーマンス最適化により、DX効果を最大化します。",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Intersection Observer
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

  const currentTech = technologies[activeTech]

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
              テクノロジー & DX
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">技術・DXソリューション</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              最新技術と革新的なアプローチで地方自治体の未来を創造
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

      {/* Featured Technology Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                主要技術分野
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">最先端テクノロジー</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
            </div>

            {/* Technology Showcase */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Visual */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                    <img
                      src={currentTech.image || "/placeholder.svg"}
                      alt={currentTech.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent"></div>
                    {/* Icon Overlay */}
                    <div className="absolute bottom-8 right-8 w-20 h-20 bg-teal-600 flex items-center justify-center">
                      <currentTech.icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Stats Overlay */}
                    <div className="absolute top-8 left-8 space-y-4">
                      {Object.entries(currentTech.stats).map(([key, value], index) => (
                        <div key={index} className="bg-white/90 backdrop-blur-sm px-4 py-2">
                          <div className="text-2xl font-bold text-slate-800">{value}</div>
                          <div className="text-xs text-slate-600 uppercase">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-2 h-full bg-teal-600"></div>
                    <div className="pl-8">
                      <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                        TECHNOLOGY {String(activeTech + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                        {currentTech.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium tracking-wider mb-6">
                        {currentTech.subtitle}
                      </p>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">{currentTech.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-gradient-to-r from-slate-50 to-white border-l-4 border-teal-600 p-6">
                    <h4 className="text-lg font-bold text-slate-800 mb-4 tracking-wide">主要機能</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {currentTech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-slate-700">
                          <CheckCircle className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Navigation */}
                  <div className="flex items-center space-x-4">
                    {technologies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTech(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTech === index
                          ? "w-8 bg-teal-600"
                          : "bg-slate-300 hover:bg-slate-400"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Technologies Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                全技術領域
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">包括的な技術ポートフォリオ</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...technologies,
              {
                icon: Database,
                title: "ビッグデータ分析",
                description: "大量のデータを高速で処理・分析し、新たな知見の発見と政策への活用を支援します。",
                features: ["データウェアハウス", "BIツール導入"],
              },
              {
                icon: Lightbulb,
                title: "ブロックチェーン",
                description: "透明性と信頼性の高いデータ管理を実現し、新たな公共サービスの可能性を追求します。",
                features: ["分散型台帳技術", "スマートコントラクト"],
              },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <tech.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{tech.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{tech.description}</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {tech.features.slice(0, 2).map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-teal-600 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DX Methodology - Creative Process Visualization */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                DXメソドロジー
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">DX推進プロセス</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                確かなプロセスで、自治体のデジタル変革を成功に導きます
              </p>
            </div>

            {/* Creative Circular Process Flow */}
            <div className="relative max-w-7xl mx-auto hidden lg:block">
              {/* Increased container height for better spacing */}
              <div className="relative h-[900px] flex items-center justify-center">
                {/* Center Circle - Result */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-56 h-56 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex flex-col items-center justify-center shadow-2xl relative">
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-teal-400 opacity-30 animate-pulse"></div>
                    <div className="text-white text-center relative z-10">
                      <div className="text-4xl font-bold mb-2">成功</div>
                      <div className="text-lg">デジタル変革実現</div>
                    </div>
                  </div>
                </div>

                {/* Process Steps in Circular Arrangement with better spacing */}
                {dxMethodologySteps.map((step, index) => {
                  const angle = (index * 72) - 90; // 5 steps, 72 degrees apart, starting from top
                  const radius = 380; // Increased radius for more space
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                      }}
                    >
                      {/* Animated Connecting Line to Center */}
                      <svg
                        className="absolute top-1/2 left-1/2 -z-10"
                        width="400"
                        height="400"
                        style={{
                          transform: `translate(-50%, -50%)`,
                        }}
                      >
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        <line
                          x1="200"
                          y1="200"
                          x2={200 - x * 0.48}
                          y2={200 - y * 0.48}
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="3"
                          strokeDasharray="5 5"
                          className="animate-pulse"
                          style={{
                            animationDelay: `${index * 0.2}s`,
                          }}
                        />
                      </svg>

                      {/* Step Card with improved spacing */}
                      <div className="relative group">
                        <div className="bg-white p-8 shadow-xl border-2 border-slate-200 hover:border-teal-600 transition-all duration-300 w-72 transform hover:scale-105 hover:shadow-2xl">
                          {/* Japanese Number */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="relative">
                              <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-white border-3 border-teal-600 flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                                <span className="text-4xl font-bold text-teal-600">{step.step}</span>
                              </div>
                              <div className="absolute -bottom-2 -right-2 bg-slate-800 text-white text-xs px-3 py-1 shadow-lg">
                                STEP {step.number}
                              </div>
                            </div>
                            {/* Icon for each step */}
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all">
                              {index === 0 && <Users className="w-6 h-6" />}
                              {index === 1 && <Lightbulb className="w-6 h-6" />}
                              {index === 2 && <Database className="w-6 h-6" />}
                              {index === 3 && <TrendingUp className="w-6 h-6" />}
                              {index === 4 && <Shield className="w-6 h-6" />}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                          <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>

                          {/* Directional Arrow showing flow */}
                          <div
                            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <div
                              className="flex items-center justify-center"
                              style={{
                                transform: `rotate(${angle + 180}deg)`,
                              }}
                            >
                              <ArrowRight className="w-8 h-8 text-teal-600" />
                            </div>
                          </div>
                        </div>

                        {/* Step number indicator on the circle path */}
                        <div
                          className="absolute w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(calc(${-x * 0.52}px - 50%), calc(${-y * 0.52}px - 50%))`,
                          }}
                        >
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Circular Path Visualization */}
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10"
                  viewBox="0 0 600 600"
                >
                  <circle
                    cx="300"
                    cy="300"
                    r="200"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    className="opacity-50"
                  />
                </svg>
              </div>
            </div>

            {/* Mobile/Tablet Vertical Layout */}
            <div className="lg:hidden space-y-8">
              {dxMethodologySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 shadow-lg border-2 border-slate-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-white border-2 border-teal-600 flex items-center justify-center">
                          <span className="text-3xl font-bold text-teal-600">{step.step}</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-slate-800 text-white text-xs px-2 py-0.5">
                          STEP {step.number}
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        {index === 0 && <Users className="w-5 h-5 text-teal-600" />}
                        {index === 1 && <Lightbulb className="w-5 h-5 text-teal-600" />}
                        {index === 2 && <Database className="w-5 h-5 text-teal-600" />}
                        {index === 3 && <TrendingUp className="w-5 h-5 text-teal-600" />}
                        {index === 4 && <Shield className="w-5 h-5 text-teal-600" />}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < dxMethodologySteps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-teal-600 transform rotate-90" />
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile Result */}
              <div className="mt-8">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 text-center shadow-xl">
                  <div className="text-2xl font-bold mb-2">成功</div>
                  <div className="text-sm">デジタル変革実現</div>
                </div>
              </div>
            </div>

            {/* Process Benefits */}
            <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, title: "確実な成果", desc: "実証されたプロセスで確実にゴールへ" },
                { icon: Users, title: "伴走型支援", desc: "各段階で専門チームが徹底サポート" },
                { icon: TrendingUp, title: "継続的改善", desc: "PDCAサイクルで常に最適化" },
              ].map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Research - Video Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Vertical Text */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest opacity-60 font-bold">
            イノベーション
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                研究開発
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">イノベーションと研究開発</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                未来を見据え、常に最先端の技術とソリューションを追求しています
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video Section */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/2835998-hd_1280_720_24fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent"></div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group">
                    <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">共同研究とパートナーシップ</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  大学や研究機関、国内外のテクノロジー企業との共同研究を通じて、新たな技術やソリューションの開発に取り組んでいます。これにより、常に最先端の知見を行政DXに活かしています。
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: TrendingUp, label: "最先端技術", value: "50+" },
                    { icon: Users, label: "研究パートナー", value: "30+" },
                    { icon: Lightbulb, label: "特許取得", value: "15+" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  研究成果を見る
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">技術の力で未来を拓く</h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              貴自治体のデジタル変革を、私たちの確かな技術力でサポートします
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
                技術資料をダウンロード
                <ExternalLink className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}