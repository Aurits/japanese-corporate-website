"use client"

import { ArrowRight, Clock, Globe, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white text-slate-900 flex items-center justify-center font-bold text-lg">
                A
              </div>
              <div>
                <span className="text-lg font-bold text-white">AEGIS LLP</span>
                <div className="text-xs opacity-80">有限責任事業組合</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              地方自治体のデジタル変革を支援する専門家集団として、持続可能な地域社会の実現を目指しています。
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
            <h4 className="text-white font-semibold mb-4 text-lg">サービス</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  デジタル変革コンサルティング
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  スマートシティ構想
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  システム統合・運用
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">会社情報</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  メンバー企業
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  お知らせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">お問い合わせ</h4>
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
                <span>東京都千代田区千代田1-1-1</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>平日 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; 2025 AEGIS LLP. All rights reserved. | プライバシーポリシー | 利用規約</p>
        </div>
      </div>
    </footer>
  )
}
