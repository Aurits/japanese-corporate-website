"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, ExternalLink, MapPin, Play, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const projects = [
    {
      title: "A市 デジタル窓口システム導入",
      description:
        "市民の利便性向上と行政手続きの効率化を目指し、オンライン窓口システムを構築。待ち時間の削減とペーパーレス化を実現。",
      client: "A市役所",
      period: "2023年4月 - 2024年3月",
      challenge: "市民の窓口での待ち時間が平均2時間を超え、職員の業務負担も増大。紙ベースの申請処理に多大な時間とコストがかかっていました。",
      solution: "AIを活用した受付システムとオンライン申請プラットフォームを導入。職員向けのデジタルツール研修も実施し、業務プロセス全体を最適化。",
      results: ["窓口待ち時間 50% 削減", "オンライン申請率 80% 達成", "年間コスト 1,000万円 削減", "職員満足度 95%"],
      image: "/placeholder.svg?height=600&width=800",
      video: "/2835998-hd_1280_720_24fps.mp4",
      tags: ["デジタル変革", "住民サービス", "効率化"],
      testimonial: {
        quote: "市民からの評価も高く、職員の働き方改革にも繋がりました。",
        author: "A市 情報政策課長",
      },
    },
    {
      title: "B県 統合データプラットフォーム構築",
      description:
        "県内の各部署に散在するデータを統合し、AIを活用した政策立案支援プラットフォームを構築。データに基づいた迅速な意思決定を可能に。",
      client: "B県庁",
      period: "2022年10月 - 2023年9月",
      challenge: "各部署がサイロ化され、データの共有や横断的な分析が困難。政策立案に必要な情報収集に数週間を要していました。",
      solution: "クラウドベースの統合データ基盤を構築し、リアルタイムダッシュボードとAI分析機能を実装。セキュアな情報共有環境を整備。",
      results: ["データ分析時間 70% 短縮", "政策決定サイクル 30% 高速化", "データ活用による新規事業創出", "部署間連携 200% 向上"],
      image: "/placeholder.svg?height=600&width=800",
      tags: ["データ活用", "AI", "政策立案"],
      testimonial: {
        quote: "データドリブンな県政運営が実現し、住民サービスの質が大幅に向上しました。",
        author: "B県 デジタル戦略室長",
      },
    },
    {
      title: "C市 スマートシティ基盤構築",
      description:
        "IoTセンサーネットワークとAI分析を組み合わせ、交通最適化、エネルギー管理、防災システムを統合。持続可能な都市運営を実現。",
      client: "C市役所",
      period: "2023年1月 - 継続中",
      challenge: "都市インフラの老朽化と人口増加により、交通渋滞やエネルギー消費が増大。災害時の情報伝達にも課題がありました。",
      solution: "市内全域にIoTセンサーを設置し、リアルタイムデータ収集システムを構築。AI予測モデルによる最適化と市民向けアプリを開発。",
      results: ["交通渋滞 20% 緩和", "公共施設エネルギー消費 15% 削減", "災害時情報伝達速度 2倍", "市民アプリ利用率 60%"],
      image: "/placeholder.svg?height=600&width=800",
      tags: ["スマートシティ", "IoT", "環境"],
      testimonial: {
        quote: "市民の生活の質が向上し、持続可能な都市運営の基盤ができました。",
        author: "C市長",
      },
    },
  ]

  const currentProject = projects[activeProject]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 8000)
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

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .slant-right {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
        }
        .slant-left {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .slant-both {
          clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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
              プロジェクト
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">実績紹介</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              地方自治体の課題を解決し、未来を創造する私たちのプロジェクト
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

      {/* Featured Project with Video Background */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                注目プロジェクト
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">代表的な実績</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
            </div>

            {/* Project Showcase with Video */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Video */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  {currentProject.video ? (
                    <>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={currentProject.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-transparent"></div>
                    </>
                  ) : (
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group">
                      <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                  {/* Project Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
                    <p className="text-white/80 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {currentProject.client}
                    </p>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <Calendar className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-600">{currentProject.period}</span>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4">
                    {currentProject.results.slice(0, 4).map((result, index) => (
                      <div key={index} className="bg-gradient-to-r from-teal-50 to-white p-4 border-l-4 border-teal-600">
                        <CheckCircle className="w-5 h-5 text-teal-600 mb-2" />
                        <p className="text-sm font-semibold text-slate-800">{result}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Navigation */}
                  <div className="flex items-center space-x-4">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveProject(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeProject === index
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

      {/* Slanting Separator */}
      <div className="relative h-32 bg-white">
        <div className="absolute inset-0 bg-slate-50 slant-right"></div>
      </div>

      {/* Problem → Proposal → Result Section */}
      <section className="py-20 bg-slate-50 relative">
        {/* Vertical Text */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest opacity-60 font-bold">
            課題解決プロセス
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
                解決アプローチ
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">課題解決のプロセス</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            </div>

            {/* Case Study Detail */}
            <div className="bg-white shadow-sm border border-slate-200">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">{currentProject.title}</h3>

                {/* Problem */}
                <div className="mb-12">
                  <div className="flex items-start mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-red-50 flex items-center justify-center">
                        <span className="text-3xl font-bold text-red-600">問</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 text-xs font-bold text-red-400 tracking-wider">PROBLEM</div>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 ml-6 mt-3">課題</h4>
                  </div>
                  <div className="pl-24 relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200"></div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {currentProject.challenge}
                    </p>
                  </div>
                </div>

                {/* Proposal */}
                <div className="mb-12">
                  <div className="flex items-start mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-blue-50 flex items-center justify-center">
                        <span className="text-3xl font-bold text-blue-600">提</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 text-xs font-bold text-blue-400 tracking-wider">PROPOSAL</div>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 ml-6 mt-3">提案</h4>
                  </div>
                  <div className="pl-24 relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {currentProject.solution}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="mb-12">
                  <div className="flex items-start mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-green-50 flex items-center justify-center">
                        <span className="text-3xl font-bold text-green-600">結</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 text-xs font-bold text-green-400 tracking-wider">RESULT</div>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 ml-6 mt-3">結果</h4>
                  </div>
                  <div className="pl-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {currentProject.results.map((result, index) => (
                        <div key={index} className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                          <div className="relative p-4 bg-white border border-teal-200 hover:border-teal-400 transition-colors">
                            <TrendingUp className="w-6 h-6 text-teal-600 mb-2" />
                            <p className="text-sm font-semibold text-slate-800">{result}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                {currentProject.testimonial && (
                  <div className="bg-gradient-to-r from-slate-50 to-white p-8 border-l-4 border-slate-800">
                    <blockquote className="text-lg text-slate-700 italic mb-4">
                      "{currentProject.testimonial.quote}"
                    </blockquote>
                    <cite className="text-sm text-slate-600 not-italic">
                      — {currentProject.testimonial.author}
                    </cite>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slanting Separator */}
      <div className="relative h-32 bg-slate-50">
        <div className="absolute inset-0 bg-white slant-left"></div>
      </div>

      {/* All Projects - Horizontal Book Flip */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                全プロジェクト
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">プロジェクト一覧</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">スクロールして全てのプロジェクトをご覧ください</p>
            </div>

            {/* Horizontal Scroll Container - Full Width */}
            <div className="relative -mx-4 lg:-mx-8 xl:-mx-16">
              {/* Scroll Indicators */}
              <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                <button className="bg-white/90 backdrop-blur-sm p-3 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                  <ArrowRight className="w-6 h-6 text-slate-600 transform rotate-180" />
                </button>
              </div>
              <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                <button className="bg-white/90 backdrop-blur-sm p-3 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                  <ArrowRight className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              {/* Book-style Horizontal Scroll */}
              <div
                className="overflow-x-auto overflow-y-hidden scrollbar-hide px-4 lg:px-16"
                style={{
                  scrollBehavior: 'smooth',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                <div className="flex space-x-6 lg:space-x-8 pb-8" style={{ width: 'max-content' }}>
                  {[...projects,
                  {
                    title: "D町 地域包括ケアシステムDX",
                    client: "D町役場",
                    period: "2024年2月〜",
                    image: "/placeholder.svg?height=600&width=400",
                    tags: ["福祉", "医療連携"],
                    number: "04",
                  },
                  {
                    title: "E市 防災情報システム構築",
                    client: "E市役所",
                    period: "2023年6月〜",
                    image: "/placeholder.svg?height=600&width=400",
                    tags: ["防災", "IoT"],
                    number: "05",
                  },
                  {
                    title: "F県 電子入札システム導入",
                    client: "F県庁",
                    period: "2022年4月〜",
                    image: "/placeholder.svg?height=600&width=400",
                    tags: ["電子化", "業務効率化"],
                    number: "06",
                  },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] group"
                      style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Book Cover Style Card - Light Background */}
                      <div
                        className="relative h-[450px] sm:h-[500px] bg-white border border-slate-200 shadow-xl transition-all duration-700 group-hover:shadow-2xl"
                        style={{
                          transform: 'rotateY(0deg)',
                          transformOrigin: 'left center',
                          transition: 'transform 0.7s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'rotateY(-15deg)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'rotateY(0deg)';
                        }}
                      >
                        {/* Book Spine - Keep Dark */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center shadow-inner">
                          <div className="text-white text-sm font-bold transform -rotate-90 whitespace-nowrap tracking-wider">
                            PROJECT {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Book Cover Content - Light Theme */}
                        <div className="pl-12 h-full flex flex-col relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`
                            }}></div>
                          </div>

                          {/* Cover Image */}
                          <div className="relative h-2/3 overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white"></div>

                            {/* Project Number */}
                            <div className="absolute top-6 right-6 text-6xl font-black text-slate-200">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                          </div>

                          {/* Cover Text */}
                          <div className="flex-1 p-6 flex flex-col justify-between relative z-10 bg-gradient-to-b from-white to-slate-50">
                            <div>
                              <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                                {project.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-slate-600">
                                <span className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1 text-teal-600" />
                                  {project.client}
                                </span>
                                <span className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1 text-teal-600" />
                                  {project.period}
                                </span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 my-4">
                              {project.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium border border-teal-200"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Read More Button */}
                            <Button
                              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold transition-all duration-300 group/btn"
                            >
                              詳細を読む
                              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>

                        {/* Book Edge Effects */}
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-200"></div>
                        <div className="absolute right-1 top-0 bottom-0 w-px bg-slate-100"></div>
                        <div className="absolute top-0 right-0 left-12 h-px bg-slate-200"></div>
                        <div className="absolute bottom-0 right-0 left-12 h-px bg-slate-200"></div>

                        {/* Book Depth Shadow */}
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-200/30"
                          style={{
                            transform: 'translateZ(-5px)',
                            opacity: 0.3,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll Hint */}
            <div className="text-center mt-12">
              <p className="text-sm text-slate-500 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 mr-2 animate-pulse" />
                横にスクロールして他のプロジェクトを見る
                <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slanting Separator with Stats */}
      <div className="relative py-32 bg-white">
        <div className="absolute inset-0 bg-slate-800 slant-both"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-white text-center">
            <h2 className="text-3xl font-bold mb-12">プロジェクト実績</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "完了プロジェクト" },
                { number: "50+", label: "自治体パートナー" },
                { number: "95%", label: "顧客満足度" },
                { number: "30%", label: "平均効率向上" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-bold text-teal-400 mb-2">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              貴自治体のデジタル変革を支援します
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              私たちの専門知識と実績で、持続可能な地域社会の実現に貢献します
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                無料相談を予約
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 font-semibold transition-all duration-300"
              >
                資料をダウンロード
                <ExternalLink className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}