import React, { useEffect } from "react";

const WORKS = [
    {
        id: 1,
        title: "簡單旅遊",
        category: "APP 開發",
        description: "一款零廣告、零頁配的旅遊行程規劃 APP，讓旅行可以更簡單。",
        image: "/work1.webp",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        tags: ["APP 開發", "地圖 API 整合", "視覺設計"],
        link: "https://apple.co/4hiCL0k",
    },
    {
        id: 2,
        title: "TBASBTAS",
        category: "官網開發",
        description: "台灣第一間私人飛機地勤代理。",
        image: "/work2.webp",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        tags: ["官網開發", "視覺設計", "品牌設計", "WIX"],
        link: "https://www.tbasbtas.com/",
    },
    {
        id: 3,
        title: "GEOOne",
        category: "SaaS 服務",
        description: "",
        image: "/work3.webp",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        tags: ["SaaS 服務", "金流串接", "視覺設計"],
        link: "https://geoone.tw/",
    },
    {
        id: 4,
        title: "昇雲建設",
        category: "官網開發",
        description: "",
        image: "/work4.webp",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        tags: ["官網開發", "視覺設計", "WIX"],
        link: "https://www.shengyun-tanhua.com/",
    },
    {
        id: 5,
        title: "皇城建設",
        category: "官網開發",
        description: "",
        image: "/work5.webp",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        tags: ["官網開發", "視覺設計", "WIX"],
        link: "https://www.thehiddengemtw.com/",
    },
    {
        id: 6,
        title: "達運機構",
        category: "官網開發",
        description: "",
        image: "/work6.webp",
        gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        tags: ["官網開發", "視覺設計", "Wordpress"],
        link: "https://shishan.huh.tw/",
    },
];

const CATEGORIES = ["全部", "APP 開發", "官網開發", "SaaS 服務"];

function WebDevSVG() {
    return (
        <svg viewBox="0 0 280 190" fill="none" className="service-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Browser frame */}
            <rect x="10" y="10" width="260" height="170" rx="10"
                stroke="#7c3aed" strokeWidth="2.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.9s ease 0s' }} />
            {/* Title bar */}
            <line x1="10" y1="43" x2="270" y2="43"
                stroke="#7c3aed" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.5s ease 0.8s' }} />
            {/* Traffic lights */}
            <circle cx="32" cy="26" r="6" stroke="#ef4444" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.25s ease 1.2s' }} />
            <circle cx="52" cy="26" r="6" stroke="#f59e0b" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.25s ease 1.35s' }} />
            <circle cx="72" cy="26" r="6" stroke="#22c55e" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.25s ease 1.5s' }} />
            {/* URL bar */}
            <rect x="96" y="16" width="138" height="20" rx="10"
                stroke="#a78bfa" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 0.95s' }} />
            {/* Code lines */}
            <line x1="28" y1="66" x2="75" y2="66" stroke="#a78bfa" strokeWidth="3" className="svg-line" style={{ transitionDelay: '1.6s' }} />
            <line x1="83" y1="66" x2="155" y2="66" stroke="#7c3aed" strokeWidth="3" className="svg-line" style={{ transitionDelay: '1.7s' }} />
            <line x1="163" y1="66" x2="205" y2="66" stroke="#e879f9" strokeWidth="3" className="svg-line" style={{ transitionDelay: '1.8s' }} />
            <line x1="44" y1="86" x2="120" y2="86" stroke="#7c3aed" strokeWidth="3" className="svg-line" style={{ transitionDelay: '1.9s' }} />
            <line x1="128" y1="86" x2="185" y2="86" stroke="#a78bfa" strokeWidth="3" className="svg-line" style={{ transitionDelay: '2.0s' }} />
            <line x1="44" y1="106" x2="100" y2="106" stroke="#e879f9" strokeWidth="3" className="svg-line" style={{ transitionDelay: '2.1s' }} />
            <line x1="108" y1="106" x2="168" y2="106" stroke="#7c3aed" strokeWidth="3" className="svg-line" style={{ transitionDelay: '2.2s' }} />
            <line x1="44" y1="126" x2="145" y2="126" stroke="#a78bfa" strokeWidth="3" className="svg-line" style={{ transitionDelay: '2.3s' }} />
            <line x1="44" y1="146" x2="95" y2="146" stroke="#7c3aed" strokeWidth="3" className="svg-line" style={{ transitionDelay: '2.4s' }} />
            <line x1="103" y1="146" x2="175" y2="146" stroke="#e879f9" strokeWidth="3" className="svg-line" style={{ transitionDelay: '2.5s' }} />
            <line x1="44" y1="166" x2="128" y2="166" stroke="#a78bfa" strokeWidth="3" className="svg-line" style={{ transitionDelay: '2.6s' }} />
            {/* Blinking cursor */}
            <rect x="136" y="159" width="3" height="16" fill="#7c3aed" className="svg-cursor" style={{ transitionDelay: '2.65s' }} />
        </svg>
    );
}

function BrandSVG() {
    return (
        <svg viewBox="0 0 280 190" fill="none" className="service-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Artboard */}
            <rect x="40" y="8" width="200" height="138" rx="6"
                stroke="#2563eb" strokeWidth="2.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.8s ease 0s' }} />
            {/* Outer circle */}
            <circle cx="140" cy="77" r="48"
                stroke="#2563eb" strokeWidth="2.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 1s ease 0.8s' }} />
            {/* Inner triangle */}
            <polygon points="140,40 172,94 108,94"
                stroke="#60a5fa" strokeWidth="2" fill="none"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.7s ease 1.7s' }} />
            {/* Spoke lines */}
            <line x1="108" y1="94" x2="140" y2="77"
                stroke="#93c5fd" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 2.3s' }} />
            <line x1="172" y1="94" x2="140" y2="77"
                stroke="#93c5fd" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 2.35s' }} />
            <line x1="140" y1="40" x2="140" y2="77"
                stroke="#93c5fd" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 2.4s' }} />
            {/* Center dot */}
            <circle cx="140" cy="77" r="7" fill="#2563eb" className="svg-dot" style={{ transitionDelay: '2.5s' }} />
            {/* Color swatches */}
            <rect x="40" y="160" width="32" height="22" rx="4" fill="#1e3a8a" className="svg-swatch" style={{ transitionDelay: '2.6s' }} />
            <rect x="80" y="160" width="32" height="22" rx="4" fill="#2563eb" className="svg-swatch" style={{ transitionDelay: '2.7s' }} />
            <rect x="120" y="160" width="32" height="22" rx="4" fill="#60a5fa" className="svg-swatch" style={{ transitionDelay: '2.8s' }} />
            <rect x="160" y="160" width="32" height="22" rx="4" fill="#bfdbfe" className="svg-swatch" style={{ transitionDelay: '2.9s' }} />
            <rect x="200" y="160" width="40" height="22" rx="4" fill="#e0f2fe" className="svg-swatch" style={{ transitionDelay: '3.0s' }} />
        </svg>
    );
}

function MarketingSVG() {
    return (
        <svg viewBox="0 0 280 190" fill="none" className="service-svg" xmlns="http://www.w3.org/2000/svg">
            {/* X axis */}
            <line x1="42" y1="158" x2="265" y2="158"
                stroke="#0891b2" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.5s ease 0s' }} />
            {/* Y axis */}
            <line x1="42" y1="20" x2="42" y2="158"
                stroke="#0891b2" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.5s ease 0.3s' }} />
            {/* Grid lines */}
            <line x1="42" y1="120" x2="265" y2="120" stroke="#cffafe" strokeWidth="1" className="svg-line" style={{ transitionDelay: '0.6s' }} />
            <line x1="42" y1="89" x2="265" y2="89" stroke="#cffafe" strokeWidth="1" className="svg-line" style={{ transitionDelay: '0.65s' }} />
            <line x1="42" y1="58" x2="265" y2="58" stroke="#cffafe" strokeWidth="1" className="svg-line" style={{ transitionDelay: '0.7s' }} />
            {/* Tick marks */}
            <line x1="83" y1="158" x2="83" y2="164" stroke="#0891b2" strokeWidth="1.5" className="svg-line" style={{ transitionDelay: '0.75s' }} />
            <line x1="128" y1="158" x2="128" y2="164" stroke="#0891b2" strokeWidth="1.5" className="svg-line" style={{ transitionDelay: '0.8s' }} />
            <line x1="173" y1="158" x2="173" y2="164" stroke="#0891b2" strokeWidth="1.5" className="svg-line" style={{ transitionDelay: '0.85s' }} />
            <line x1="218" y1="158" x2="218" y2="164" stroke="#0891b2" strokeWidth="1.5" className="svg-line" style={{ transitionDelay: '0.9s' }} />
            {/* Bars */}
            <rect x="66" y="98" width="30" height="60" rx="4" fill="#0891b2"
                className="svg-bar" style={{ transitionDelay: '1.0s', transitionDuration: '0.5s' }} />
            <rect x="111" y="73" width="30" height="85" rx="4" fill="#0891b2"
                className="svg-bar" style={{ transitionDelay: '1.2s', transitionDuration: '0.5s' }} />
            <rect x="156" y="103" width="30" height="55" rx="4" fill="#0891b2"
                className="svg-bar" style={{ transitionDelay: '1.4s', transitionDuration: '0.5s' }} />
            <rect x="201" y="40" width="30" height="118" rx="4" fill="#22d3ee"
                className="svg-bar" style={{ transitionDelay: '1.6s', transitionDuration: '0.5s' }} />
            {/* Trend line */}
            <polyline points="81,90 126,68 171,100 216,30"
                stroke="#f59e0b" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.8s ease 2.0s' }} />
            {/* Dots */}
            <circle cx="81" cy="90" r="5" fill="#f59e0b" className="svg-dot" style={{ transitionDelay: '2.1s' }} />
            <circle cx="126" cy="68" r="5" fill="#f59e0b" className="svg-dot" style={{ transitionDelay: '2.25s' }} />
            <circle cx="171" cy="100" r="5" fill="#f59e0b" className="svg-dot" style={{ transitionDelay: '2.4s' }} />
            <circle cx="216" cy="30" r="5" fill="#f59e0b" className="svg-dot" style={{ transitionDelay: '2.55s' }} />
            {/* Up arrow */}
            <path d="M216 22 L223 34 L209 34 Z" fill="#22d3ee" className="svg-dot" style={{ transitionDelay: '2.65s' }} />
        </svg>
    );
}

function PaymentSVG() {
    return (
        <svg viewBox="0 0 280 190" fill="none" className="service-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Card body */}
            <rect x="30" y="40" width="185" height="118" rx="12"
                stroke="#059669" strokeWidth="2.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.9s ease 0s' }} />
            {/* Magnetic stripe */}
            <rect x="30" y="72" width="185" height="22" fill="#059669"
                className="svg-swatch" style={{ transitionDelay: '0.9s' }} />
            {/* Chip */}
            <rect x="55" y="106" width="38" height="30" rx="5"
                stroke="#34d399" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.5s ease 1.1s' }} />
            <line x1="74" y1="106" x2="74" y2="136" stroke="#34d399" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 1.55s' }} />
            <line x1="55" y1="121" x2="93" y2="121" stroke="#34d399" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 1.65s' }} />
            {/* Card number dots */}
            <circle cx="115" cy="121" r="4" fill="#059669" className="svg-dot" style={{ transitionDelay: '1.8s' }} />
            <circle cx="130" cy="121" r="4" fill="#059669" className="svg-dot" style={{ transitionDelay: '1.9s' }} />
            <circle cx="145" cy="121" r="4" fill="#059669" className="svg-dot" style={{ transitionDelay: '2.0s' }} />
            <circle cx="160" cy="121" r="4" fill="#059669" className="svg-dot" style={{ transitionDelay: '2.1s' }} />
            {/* Shield */}
            <path d="M228 14 L252 23 L252 40 Q252 54 228 62 Q204 54 204 40 L204 23 Z"
                stroke="#059669" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.6s ease 2.2s' }} />
            {/* Checkmark */}
            <path d="M218 37 L225 44 L238 30"
                stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 2.7s' }} />
            {/* Flow arrows */}
            <path d="M222 95 Q240 95 248 108 Q256 121 240 128"
                stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.5s ease 3.0s' }} />
            <path d="M235 122 L240 128 L245 120"
                stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 3.4s' }} />
        </svg>
    );
}

function AppDevSVG() {
    return (
        <svg viewBox="0 0 280 190" fill="none" className="service-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Phone frame */}
            <rect x="95" y="6" width="90" height="178" rx="16"
                stroke="#ea580c" strokeWidth="2.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 1s ease 0s' }} />
            {/* Status bar */}
            <line x1="95" y1="32" x2="185" y2="32"
                stroke="#ea580c" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 0.9s' }} />
            {/* Home bar */}
            <line x1="124" y1="172" x2="156" y2="172"
                stroke="#ea580c" strokeWidth="3" strokeLinecap="round"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 1.0s' }} />
            {/* App header */}
            <rect x="103" y="40" width="74" height="18" rx="4" fill="#ea580c"
                className="svg-swatch" style={{ transitionDelay: '1.2s' }} />
            {/* Content card */}
            <rect x="103" y="66" width="74" height="38" rx="6"
                stroke="#fb923c" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.45s ease 1.5s' }} />
            {/* Two small cards */}
            <rect x="103" y="112" width="34" height="34" rx="6"
                stroke="#fb923c" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.75s' }} />
            <rect x="143" y="112" width="34" height="34" rx="6"
                stroke="#fb923c" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.95s' }} />
            {/* Nav dots */}
            <circle cx="120" cy="156" r="4" fill="#ea580c" className="svg-dot" style={{ transitionDelay: '2.1s' }} />
            <circle cx="140" cy="156" r="4" fill="#fb923c" className="svg-dot" style={{ transitionDelay: '2.2s' }} />
            <circle cx="160" cy="156" r="4" fill="#fb923c" className="svg-dot" style={{ transitionDelay: '2.3s' }} />
        </svg>
    );
}

function AiSVG() {
    return (
        <svg viewBox="0 0 280 190" fill="none" className="service-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Center node */}
            <circle cx="140" cy="95" r="20"
                stroke="#7c3aed" strokeWidth="2.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.6s ease 0s' }} />
            <circle cx="140" cy="95" r="9" fill="#7c3aed" className="svg-dot" style={{ transitionDelay: '0.5s' }} />
            {/* Outer nodes */}
            <circle cx="55" cy="40" r="13" stroke="#a78bfa" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 0.8s' }} />
            <circle cx="225" cy="40" r="13" stroke="#a78bfa" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 0.9s' }} />
            <circle cx="25" cy="135" r="13" stroke="#a78bfa" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.0s' }} />
            <circle cx="255" cy="135" r="13" stroke="#a78bfa" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.1s' }} />
            <circle cx="140" cy="172" r="13" stroke="#a78bfa" strokeWidth="2"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.2s' }} />
            {/* Connection lines */}
            <line x1="122" y1="81" x2="66" y2="51" stroke="#7c3aed" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.5s' }} />
            <line x1="158" y1="81" x2="214" y2="51" stroke="#7c3aed" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.6s' }} />
            <line x1="121" y1="107" x2="36" y2="126" stroke="#7c3aed" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.7s' }} />
            <line x1="159" y1="107" x2="244" y2="126" stroke="#7c3aed" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.8s' }} />
            <line x1="140" y1="115" x2="140" y2="159" stroke="#7c3aed" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.4s ease 1.9s' }} />
            {/* Mid nodes */}
            <circle cx="97" cy="148" r="8" stroke="#c4b5fd" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 2.1s' }} />
            <circle cx="183" cy="148" r="8" stroke="#c4b5fd" strokeWidth="1.5"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 2.2s' }} />
            <line x1="140" y1="115" x2="101" y2="142" stroke="#c4b5fd" strokeWidth="1"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 2.3s' }} />
            <line x1="140" y1="115" x2="179" y2="142" stroke="#c4b5fd" strokeWidth="1"
                pathLength="1000" strokeDasharray="1000"
                className="svg-draw" style={{ transition: 'stroke-dashoffset 0.3s ease 2.4s' }} />
            {/* Outer node dots */}
            <circle cx="55" cy="40" r="5" fill="#a78bfa" className="svg-dot" style={{ transitionDelay: '2.5s' }} />
            <circle cx="225" cy="40" r="5" fill="#a78bfa" className="svg-dot" style={{ transitionDelay: '2.6s' }} />
            <circle cx="25" cy="135" r="5" fill="#a78bfa" className="svg-dot" style={{ transitionDelay: '2.7s' }} />
            <circle cx="255" cy="135" r="5" fill="#a78bfa" className="svg-dot" style={{ transitionDelay: '2.8s' }} />
            <circle cx="140" cy="172" r="5" fill="#a78bfa" className="svg-dot" style={{ transitionDelay: '2.9s' }} />
        </svg>
    );
}

function WorkCard({ work, large }) {
    return (
        <div className={`work-card ${large ? "work-card-large" : ""}`}>
            <div className="work-card-img-wrap">
                <div
                    className="work-card-img"
                    style={{
                        background: "#f5f5f5",
                        backgroundImage: `url(${work.image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                />
            </div>
            <div className="work-card-body">
                <span className="work-category-badge">{work.category}</span>
                <h3 className="work-title">{work.title}</h3>
                {work.description && <p className="work-desc">{work.description}</p>}
                <div className="work-footer">
                    <div className="work-tags">
                        {work.tags.map(tag => (
                            <span key={tag} className="work-tag">{tag}</span>
                        ))}
                    </div>
                    {work.link && (
                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-link">
                            查看案例 →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function LandingPage() {
    useEffect(() => {
        const revealObs = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("revealed")),
            { threshold: 0.15 }
        );
        document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

        const serviceObs = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("service-animate")),
            { threshold: 0.4 }
        );
        document.querySelectorAll(".service-card").forEach(el => serviceObs.observe(el));

        return () => { revealObs.disconnect(); serviceObs.disconnect(); };
    }, []);

    const showFeatured = WORKS.length >= 3;
    const featuredItems = showFeatured ? WORKS.slice(0, 3) : [];
    const gridItems = showFeatured ? WORKS.slice(3) : WORKS;

    return (
        <div className="bg-white text-black overflow-x-hidden">
            {/* Hero */}
            <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
                <div className="grid-bg" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="relative">
                        <div className="title-shadow" />
                        <div className="title-box">
                            YooL.ink
                            <div className="title-shine" />
                        </div>
                    </div>
                    <p className="hero-subtitle">網站開發・品牌設計・數位行銷</p>
                    <div className="scroll-hint">
                        <div className="scroll-arrow" />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="min-h-screen flex items-center justify-center bg-white py-20">
                <div className="max-w-7xl mx-auto p-8 w-full">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl font-bold">我們的服務</h2>
                        <p className="text-gray-500 mt-3 text-base">從品牌策略到數位落地，我們陪你走完每一步</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <div className="service-card reveal" style={{ "--accent": "#7c3aed" }}>
                            <WebDevSVG />
                            <span className="service-number" style={{ color: "#7c3aed" }}>01</span>
                            <h3 className="service-title">網站開發</h3>
                            <p className="service-tagline">從概念到上線，一手包辦</p>
                            <ul className="service-features">
                                <li>RWD 響應式設計，各裝置完美呈現</li>
                                <li>SEO 基礎優化，讓搜尋引擎找到你</li>
                                <li>客製 CMS 後台，自行管理內容不求人</li>
                            </ul>
                        </div>
                        <div className="service-card reveal" style={{ "--accent": "#2563eb", transitionDelay: "0.15s" }}>
                            <BrandSVG />
                            <span className="service-number" style={{ color: "#2563eb" }}>02</span>
                            <h3 className="service-title">品牌設計</h3>
                            <p className="service-tagline">讓品牌說話，讓受眾記住</p>
                            <ul className="service-features">
                                <li>Logo 設計與完整視覺識別系統（VI）</li>
                                <li>色彩、字型、設計語言全面制定</li>
                                <li>品牌手冊交付，確保對外一致性</li>
                            </ul>
                        </div>
                        <div className="service-card reveal" style={{ "--accent": "#0891b2", transitionDelay: "0.3s" }}>
                            <MarketingSVG />
                            <span className="service-number" style={{ color: "#0891b2" }}>03</span>
                            <h3 className="service-title">廣告投放與品牌行銷</h3>
                            <p className="service-tagline">精準觸及，把預算花在刀口上</p>
                            <ul className="service-features">
                                <li>Meta、Google 廣告策略規劃與執行</li>
                                <li>受眾分析 × 創意素材雙管齊下</li>
                                <li>定期成效報告，數據透明不打烊</li>
                            </ul>
                        </div>
                        <div className="service-card reveal" style={{ "--accent": "#059669", transitionDelay: "0.1s" }}>
                            <PaymentSVG />
                            <span className="service-number" style={{ color: "#059669" }}>04</span>
                            <h3 className="service-title">金流串接</h3>
                            <p className="service-tagline">安全、快速、無縫的收款體驗</p>
                            <ul className="service-features">
                                <li>信用卡、超商、LINE Pay 等多元支付</li>
                                <li>串接藍新、綠界、Stripe 等主流金流</li>
                                <li>交易紀錄後台，財務一目了然</li>
                            </ul>
                        </div>
                        <div className="service-card reveal" style={{ "--accent": "#ea580c", transitionDelay: "0.25s" }}>
                            <AppDevSVG />
                            <span className="service-number" style={{ color: "#ea580c" }}>05</span>
                            <h3 className="service-title">APP 開發</h3>
                            <p className="service-tagline">把你的服務，裝進每個人的口袋</p>
                            <ul className="service-features">
                                <li>iOS / Android 跨平台開發</li>
                                <li>直覺 UI/UX，讓使用者愛不釋手</li>
                                <li>上架 App Store 與 Google Play 全程協助</li>
                            </ul>
                        </div>
                        <div className="service-card reveal" style={{ "--accent": "#7c3aed", transitionDelay: "0.4s" }}>
                            <AiSVG />
                            <span className="service-number" style={{ color: "#7c3aed" }}>06</span>
                            <h3 className="service-title">AI 工具整合與顧問</h3>
                            <p className="service-tagline">讓 AI 成為你團隊最強的隱形員工</p>
                            <ul className="service-features">
                                <li>ChatGPT、Claude 等 LLM 客製化整合</li>
                                <li>自動化工作流程，降低重複人力成本</li>
                                <li>AI 導入顧問，從評估到落地一手包</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Works */}
            <section className="works-section py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 reveal">作品案例</h2>

                    {/* Featured row */}
                    {showFeatured && (
                        <div className="works-featured reveal">
                            <WorkCard work={featuredItems[0]} large />
                            <div className="works-featured-side">
                                <WorkCard work={featuredItems[1]} />
                                <WorkCard work={featuredItems[2]} />
                            </div>
                        </div>
                    )}

                    {/* Grid */}
                    {gridItems.length > 0 && (
                        <div className={`works-grid ${showFeatured ? "mt-6" : ""}`}>
                            {gridItems.map((work, i) => (
                                <div key={work.id} className="reveal" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                                    <WorkCard work={work} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section py-20 px-6 relative overflow-hidden">
                <div className="cta-orb cta-orb-1" />
                <div className="cta-orb cta-orb-2" />
                <div className="max-w-5xl mx-auto text-center relative z-10 reveal">
                    <h2 className="text-4xl font-bold mb-4 text-white">想為你的品牌打造專屬網站嗎？</h2>
                    <p className="text-lg mb-6 text-white/80">我們提供從設計到上線的一站式解決方案，立即聯絡我們開始規劃！</p>
                    <a href="mailto:support@yool.ink" className="cta-btn">
                        聯絡我們
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="reveal">
                        <h3 className="text-lg font-bold mb-2">聯絡方式</h3>
                        <p>Email：support@yool.ink</p>
                        <p className="mt-2">LINE ID：@yool.ink</p>
                        <img
                            src="https://qr-official.line.me/gs/M_224dwfgd_GW.png?oat_content=qr"
                            alt="LINE QR Code"
                            className="mt-4 w-24 h-24 bg-white p-2 rounded"
                        />
                    </div>
                    <div className="reveal" style={{ transitionDelay: "0.15s" }}>
                        <h3 className="text-lg font-bold mb-2">追蹤我們</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://www.instagram.com/yool.ink.offical/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/yool.ink.offical/" target="_blank" rel="noopener noreferrer" className="social-link">
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
