import React from "react";

export default function LandingPage() {
    return (
        <div className="bg-white text-black">
            <section className="min-h-screen flex items-center justify-center bg-white">
                <div className="relative">
                    <div className="absolute top-2 left-2 w-full h-full bg-black rounded-sm" />
                    <div className="relative border-4 border-black bg-white px-8 py-8 text-black font-semibold text-4xl sm:text-6xl md:text-8xl tracking-wide rounded-sm">
                        YooL.ink
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex items-center justify-center bg-white">
                <div className="max-w-6xl mx-auto p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="/description1.jpg" alt="Description 1" className="rounded mb-4" />
                            <h3 className="text-xl font-semibold">網站開發</h3>
                            <p className="text-gray-600 mt-2">跨領域專業團隊，提供形象網站或專業系統開發與設計。</p>
                        </div>
                        <div className="grid md:grid-rows-2 gap-6">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <img src="/description2.jpg" alt="Description 2" className="rounded mb-4" />
                                <h3 className="text-xl font-semibold">品牌設計</h3>
                                <p className="text-gray-600 mt-2">提供各類型品牌設計與顧問諮詢。</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <img src="/description3.jpg" alt="Description 3" className="rounded mb-4" />
                                <h3 className="text-xl font-semibold">廣告投放與品牌行銷</h3>
                                <p className="text-gray-600 mt-2">根據客戶需求，量身打造多平台廣告與行銷服務。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">想為你的品牌打造專屬網站嗎？</h2>
                    <p className="text-lg mb-6">我們提供從設計到上線的一站式解決方案，立即聯絡我們開始規劃！</p>
                    <a
                        href="mailto:support@yool.ink"
                        className="inline-block bg-white text-black px-6 py-3 font-semibold rounded hover:bg-gray-200 transition"
                    >
                        聯絡我們
                    </a>
                </div>
            </section>
            <footer className="py-10 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-2">聯絡方式</h3>
                        <p>Email：support@yool.ink</p>
                        <p className="mt-2">LINE ID：@yool.ink</p>
                        <img
                            src="https://qr-official.line.me/gs/M_224dwfgd_GW.png?oat_content=qr"
                            alt="LINE QR Code"
                            className="mt-4 w-24 h-24 bg-white p-2 rounded"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">追蹤我們</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://www.instagram.com/yool.ink.offical/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/yool.ink.offical/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} YooL.ink</div>
            </footer>
        </div>
    );
}
