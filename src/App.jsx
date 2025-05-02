import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    return (
        <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
            {/* Hero 區塊 */}
            <section
                ref={section1Ref}
                className="h-screen w-screen snap-start flex items-center justify-center bg-white"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="absolute top-2 left-2 w-full h-full bg-black rounded-sm" />
                    <div className="relative border-4 border-black bg-white px-8 py-8 text-black font-semibold text-4xl sm:text-6xl md:text-8xl tracking-wide rounded-sm">
                        YooL.ink
                    </div>
                </motion.div>
            </section>

            {/* 服務區塊 */}
            <section
                ref={section2Ref}
                className="h-screen w-screen snap-start flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-6"
            >
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* 左側說明與聯絡按鈕 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <h2 className="text-4xl font-bold mb-4">What We Do</h2>
                        <p className="text-lg text-gray-600">
                            We build digital experiences that elevate your brand and grow your business.
                        </p>
                        <a
                            href="mailto:support@yool.ink"
                            className="mt-6 inline-block px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                        >
                            Contact Us
                        </a>
                    </motion.div>

                    {/* 右側服務卡片 */}
                    <div className="space-y-6">
                        {[
                            {
                                title: "Website Design & Development",
                                desc: "Modern, responsive websites with powerful performance.",
                            },
                            {
                                title: "Brand Visual Design",
                                desc: "Crafting unique and consistent brand visuals.",
                            },
                            {
                                title: "Marketing & SEO Strategy",
                                desc: "Boost visibility through smart, data-driven strategies.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="bg-white border border-gray-200 shadow-lg p-6 rounded-lg"
                            >
                                <h3 className="text-xl text-gray-600 font-semibold">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer 區塊 */}
            <footer className="w-screen min-h-[20vh] snap-start bg-black text-white py-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* 聯絡資訊 */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <p className="mb-2">
                            Email:{" "}
                            <a href="mailto:support@yool.ink" className="underline">
                                support@yool.ink
                            </a>
                        </p>
                        <img
                            src="https://qr-official.line.me/gs/M_224dwfgd_GW.png?oat_content=qr"
                            alt="LINE QR Code"
                            className="mt-4 w-32 h-32 rounded bg-white p-2"
                        />
                    </div>

                    {/* 社群連結 */}
                    <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <ul className="space-y-3">
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

                <div className="mt-12 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} YooL.ink
                </div>
            </footer>
        </div>
    );
}
