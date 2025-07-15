"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users
} from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState({})
  const [activeFeature, setActiveFeature] = useState(0)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
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
              CONTACT US
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">お問い合わせ</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              地方自治体のデジタル変革に関するご相談を承ります
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

      {/* Why Contact Us - Feature Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                WHY CONTACT US
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">なぜAEGISを選ぶのか</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
            </div>

            {/* Auto-playing Feature Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${activeFeature * 100}%)` }}
                >
                  {[
                    {
                      icon: Users,
                      title: "専門家による無料相談",
                      description: "各分野の専門家が貴自治体の課題を詳しくヒアリングし、最適なソリューションをご提案します。",
                      benefits: ["初回相談無料", "オンライン対応可", "専門家直接対応", "即日回答可能"],
                    },
                    {
                      icon: Shield,
                      title: "24時間サポート体制",
                      description: "緊急時も安心の24時間365日サポート。貴自治体の安定した運営を全力でバックアップします。",
                      benefits: ["24/7対応", "専用ホットライン", "緊急時即時対応", "多言語サポート"],
                    },
                    {
                      icon: CheckCircle,
                      title: "実績に基づく信頼",
                      description: "26年間、150以上のプロジェクトで培った経験と実績。確かな成果をお約束します。",
                      benefits: ["26年の実績", "150+プロジェクト", "95%満足度", "政府認定"],
                    },
                  ].map((feature, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                          <div className="aspect-square bg-gradient-to-br from-slate-50 to-white p-16 flex items-center justify-center">
                            <div className="w-32 h-32 bg-teal-600 text-white flex items-center justify-center rounded-full shadow-xl">
                              <feature.icon className="w-16 h-16" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div className="relative">
                            <div className="absolute -left-8 top-0 w-2 h-full bg-teal-600"></div>
                            <div className="pl-8">
                              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                                {feature.title}
                              </h3>
                              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center text-slate-700">
                                <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                                <span className="font-medium">{benefit}</span>
                              </div>
                            ))}
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
                    onClick={() => setActiveFeature(index)}
                    className={`w-12 h-2 transition-colors duration-300 ${activeFeature === index ? "bg-teal-600" : "bg-slate-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="writing-mode-vertical text-slate-400 text-sm tracking-widest opacity-60 font-bold">
            お問い合わせ
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-bold tracking-wider mb-6">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">お気軽にお問い合わせください</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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

                  {/* Business Hours */}
                  <div className="pt-8 border-t-2 border-slate-200">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">営業時間</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-slate-50 border border-slate-200">
                        <Clock className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <div className="text-sm font-bold text-slate-800">平日</div>
                        <div className="text-xs text-slate-600">9:00 - 18:00</div>
                      </div>
                      <div className="text-center p-4 bg-slate-50 border border-slate-200">
                        <Shield className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <div className="text-sm font-bold text-slate-800">緊急対応</div>
                        <div className="text-xs text-slate-600">24時間365日</div>
                      </div>
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

      {/* Map Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-800 text-white text-sm font-bold tracking-wider mb-6">
                ACCESS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">アクセス</h2>
              <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="aspect-video bg-slate-100 border-2 border-slate-200 shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030408008!2d139.7649361152589!3d35.6812361801939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f1f01%3A0x2b617249028960!2z5p2x5Lqs6YO95bqB!5e0!3m2!1sja!2sjp!4v1678912345678!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AEGIS LLP Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Access Information */}
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-800 mb-4">交通アクセス</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      JR東京駅 丸の内北口より徒歩5分
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      東京メトロ丸ノ内線 東京駅より徒歩3分
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      都営三田線 大手町駅より徒歩7分
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-800 mb-4">駐車場</h3>
                  <p className="text-sm text-slate-600">
                    ビル内に有料駐車場完備。お車でお越しの際は事前にご連絡ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">共に未来を創造しましょう</h2>
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