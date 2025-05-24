import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const services = [
        { title: "網站設計與開發", desc: "現代、響應式網站，提供強大效能。" },
        { title: "品牌視覺設計", desc: "打造獨特、一致的品牌視覺。" },
        { title: "行銷與 SEO 策略", desc: "透過數據驅動策略，提升能見度。" }
    ];

    const caseStudies = [
        { title: "三隻毛毛蟲模型製研所", image: "/cases/scmmccos.jpg" },
        { title: "TBAS BTAS", image: "/cases/tbasbtas.png" }
    ];

    return (
        <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
            {/* Hero Section: Layered Parallax Stars + Animated Blob */}
            <section
                ref={section1Ref}
                className="relative h-screen w-screen snap-start flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black overflow-hidden"
            >
                {/* Star layers */}
                <div className="absolute inset-0">
                    <div className="stars layer1" />
                    <div className="stars layer2" />
                </div>
                {/* Nebula blob animation */}
                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
                    className="absolute w-80 h-80 bg-gradient-to-tr from-blue-200 via-purple-200 to-indigo-200 opacity-30 rounded-full blur-3xl"
                />
                {/* Logo card */}
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 cursor-pointer"
                >
                    <div className="absolute top-3 left-3 w-full h-full bg-black rounded-md" />
                    <div className="relative border-4 border-black bg-white px-12 py-12 text-black font-bold text-5xl md:text-7xl tracking-wide rounded-md">
                        YooL.<span className="font-normal">ink</span>
                    </div>
                </motion.div>
                {/* Scroll hint animation */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
                    className="absolute bottom-8"
                >
                    <span className="block w-6 h-10 border-2 border-black rounded-full mx-auto" />
                </motion.div>
                <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Services Section: Cards with Tilt & Fade */}
            <section
                ref={section2Ref}
                className="relative h-screen w-screen snap-start flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden px-6"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-8"
                >服務項目</motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 3 }}
                            className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-lg border border-gray-700 shadow-lg cursor-pointer"
                        >
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">{item.title}</h3>
                            <p className="text-gray-300">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent" />
            </section>

            {/* Case Studies Section: Cards Slide & Icon Bounce */}
            <section
                ref={section3Ref}
                className="relative h-screen w-screen snap-start flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black overflow-hidden px-6"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-8"
                >合作案例</motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                    {caseStudies.map((caseItem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.3, duration: 0.6 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition justify-items-center"
                        >
                            <motion.img
                                src={caseItem.image}
                                alt={caseItem.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="h-48 object-cover rounded-md mb-4"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Footer Section */}
            <footer className="w-screen snap-start bg-gray-900 text-white py-12 px-6 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Email: <a href="mailto:support@yool.ink" className="underline">support@yool.ink</a>
                </motion.p>
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mt-4"
                >
                    <p>LINE ID: <span className="font-mono">@yool.ink</span></p>
                    <img
                        src="https://qr-official.line.me/gs/M_224dwfgd_GW.png?oat_content=qr"
                        alt="LINE QR Code"
                        className="mx-auto mt-2 w-32 h-32"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="flex justify-center space-x-6 mt-6 text-3xl"
                >
                    <motion.a href="https://www.instagram.com/yool.ink.offical/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <img alt="instagram" src="./instagram.png" width={32} height={32} />
                    </motion.a>
                    <motion.a href="https://www.facebook.com/yool.ink.offical/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <img alt="facebook" src="./facebook.png" width={32} height={32} />
                    </motion.a>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="mt-6 text-sm"
                >
                    &copy; {new Date().getFullYear()} YooL.ink — All rights reserved.
                </motion.p>
            </footer>

            {/* Global Styles */}
            <style jsx global>
                {`
                    .stars {
                        position: absolute;
                        width: 200%; height: 200%;
                        background: url('https://www.transparenttextures.com/patterns/tiny-grid.png');
                        opacity: 0.1;
                    }
                    .layer1 { animation: moveStars1 120s linear infinite; }
                    .layer2 { animation: moveStars2 200s linear infinite; }
                    @keyframes moveStars1 {
                        from { transform: translate(0,0); }
                        to { transform: translate(-1000px, -500px); }
                    }
                    @keyframes moveStars2 {
                        from { transform: translate(0,0); }
                        to { transform: translate(500px, -1000px); }
                    }
                    .blur-3xl { filter: blur(72px); }
              `}
            </style>
        </div>
    );
}
