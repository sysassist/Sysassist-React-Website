// src/components/PrivacyPolicy.jsx
// Matches SysAssist existing Tailwind + gray-900 dark theme
// Route: /privacy-policy

import { useEffect, useState } from "react";
import { ChevronRight, Shield, MessageCircle, Database, Lock, Eye, Cookie, Globe, Baby, RefreshCw, Mail } from "lucide-react";

const COMPANY = "SysAssist IT Solution PVT. LTD.";
const WEBSITE = "https://sysassist.co";
const EMAIL = "inquiry@sysassist.co";
const ADDRESS = "739, Sai Kripa Colony, Sai Kripa Main Road 2, Indore, Madhya Pradesh, India, 452010";
const PHONE = "+91 9987986053";
const UPDATED = "March 24, 2026";

const sections = [
    {
        id: "information-we-collect",
        icon: Database,
        title: "Information We Collect",
        content: `We collect information you provide directly to us, including:

• Name, email address, phone number, and company details when you contact us or use our services.
• WhatsApp phone numbers and messaging data when you interact with our WhatsApp Business communications.
• Usage data including IP address, browser type, pages visited, and time spent on our website.
• Payment information (processed securely through third-party payment processors — we do not store card details).
• Any information you voluntarily submit through our contact forms or support channels.`,
    },
    {
        id: "whatsapp-data",
        icon: MessageCircle,
        title: "WhatsApp Business Messaging",
        whatsapp: true,
        content: `SysAssist IT Solution PVT. LTD. uses the WhatsApp Business API (provided by Meta Platforms, Inc.) to communicate with customers and users. In connection with WhatsApp messaging:

• We collect and process your WhatsApp phone number to send you service notifications, support updates, and transactional messages.
• We only send WhatsApp messages to users who have explicitly opted in or requested communication through this channel.
• Message content may be stored securely for customer support, compliance, and service improvement purposes.
• We do not sell or share your WhatsApp contact information with third parties for marketing purposes.
• You may opt out of WhatsApp communications at any time by replying STOP or contacting us at ${EMAIL}.
• Our use of WhatsApp data is governed by Meta's Business Policy available at https://www.whatsapp.com/legal/business-policy.`,
    },
    {
        id: "how-we-use",
        icon: Eye,
        title: "How We Use Your Information",
        content: `We use the information we collect to:

• Provide, maintain, and improve our IT solutions and services.
• Send transactional communications including order confirmations, support responses, and service updates via WhatsApp, email, or SMS.
• Respond to your comments, questions, and requests.
• Send technical notices, security alerts, and administrative messages.
• Monitor and analyze usage patterns to improve user experience.
• Comply with legal obligations under applicable Indian laws including the Information Technology Act, 2000.
• Protect against fraudulent, unauthorized, or illegal activity.`,
    },
    {
        id: "data-sharing",
        icon: Globe,
        title: "Information Sharing & Disclosure",
        content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in these limited circumstances:

• Service Providers: With trusted vendors who assist in operating our website and delivering services (e.g., hosting providers, payment processors, Meta Platforms for WhatsApp API).
• Legal Requirements: When required by law, court order, or governmental authority under Indian jurisdiction.
• Business Transfers: In connection with a merger, acquisition, or sale of company assets, with appropriate confidentiality protections.
• With Your Consent: For any other purpose with your explicit consent.`,
    },
    {
        id: "data-security",
        icon: Lock,
        title: "Data Security",
        content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encrypted data transmission using SSL/TLS protocols.
• Secure access controls and authentication for internal systems.
• Regular security assessments and updates.
• Limited employee access to personal data on a need-to-know basis.

No method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.`,
    },
    {
        id: "data-retention",
        icon: Database,
        title: "Data Retention",
        content: `We retain your personal information for as long as necessary to:

• Provide our services and fulfill the purposes outlined in this policy.
• Comply with legal obligations, resolve disputes, and enforce agreements.
• Maintain business records as required under Indian laws.

WhatsApp message records are retained for a maximum of 2 years unless a longer retention period is required by law. You may request deletion of your data at any time by contacting us at ${EMAIL}.`,
    },
    {
        id: "your-rights",
        icon: Shield,
        title: "Your Rights",
        content: `Under applicable data protection laws, you have the following rights regarding your personal information:

• Access: Request a copy of the personal data we hold about you.
• Correction: Request correction of inaccurate or incomplete data.
• Deletion: Request deletion of your personal data, subject to legal obligations.
• Opt-out: Opt out of marketing communications at any time.
• Portability: Request transfer of your data in a structured, machine-readable format.

To exercise any of these rights, please contact us at ${EMAIL}. We will respond within 30 days.`,
    },
    {
        id: "cookies",
        icon: Cookie,
        title: "Cookies & Tracking",
        content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. We use:

• Essential Cookies: Required for the website to function properly.
• Analytics Cookies: To understand how visitors use our site (e.g., Google Analytics).
• Preference Cookies: To remember your settings and preferences.

You can control cookie settings through your browser. Disabling certain cookies may affect website functionality.`,
    },
    {
        id: "third-party",
        icon: Globe,
        title: "Third-Party Services",
        content: `Our website and services may contain links to third-party websites and integrate with third-party services including:

• Meta Platforms, Inc. (WhatsApp Business API)
• Payment gateway providers
• Cloud hosting and infrastructure providers

These third parties have their own privacy policies. We are not responsible for the privacy practices of third-party services.`,
    },
    {
        id: "children",
        icon: Baby,
        title: "Children's Privacy",
        content: `Our services are not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have inadvertently collected information from a child under 18, please contact us immediately at ${EMAIL} and we will promptly delete that information.`,
    },
    {
        id: "changes",
        icon: RefreshCw,
        title: "Changes to This Policy",
        content: `We may update this Privacy Policy from time to time. When we make changes:

• We will update the "Last Updated" date at the top of this page.
• For significant changes, we will provide prominent notice on our website or notify you directly.
• Your continued use of our services after changes become effective constitutes acceptance of the revised policy.`,
    },
    {
        id: "contact",
        icon: Mail,
        title: "Contact Us",
        content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

Company:  ${COMPANY}
Email:    ${EMAIL}
Phone:    ${PHONE}
Address:  ${ADDRESS}
Website:  ${WEBSITE}`,
    },
];

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Privacy Policy — SysAssist";
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-20% 0px -70% 0px" }
        );
        document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="bg-gray-950 min-h-screen text-white">

            {/* Hero */}
            <div className="bg-gray-900 border-b border-gray-800">
                <div className="container mx-auto px-4 py-16 md:py-20">
                    <div className="flex items-center gap-2 text-blue-400 text-sm mb-4">
                        <Shield size={16} />
                        <span>Legal · {COMPANY}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        We are committed to protecting your privacy and handling your personal
                        data with full transparency — including data processed through our
                        WhatsApp Business communications.
                    </p>
                    <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
                        <span>
                            <span className="text-gray-400 font-medium">Last updated: </span>
                            {UPDATED}
                        </span>
                        <span>
                            <span className="text-gray-400 font-medium">Jurisdiction: </span>
                            India (IT Act, 2000)
                        </span>
                        <span>
                            <span className="text-gray-400 font-medium">Contact: </span>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {EMAIL}
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Body layout */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex gap-10 items-start">

                    {/* Sticky sidebar — desktop only */}
                    <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                            Contents
                        </p>
                        <nav className="space-y-0.5">
                            {sections.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => scrollTo(s.id)}
                                    className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === s.id
                                            ? "bg-blue-600/20 text-blue-400"
                                            : "text-gray-500 hover:text-gray-300 hover:bg-gray-800"
                                        }`}
                                >
                                    <ChevronRight
                                        size={14}
                                        className={`flex-shrink-0 ${activeSection === s.id ? "text-blue-400" : "text-gray-600"
                                            }`}
                                    />
                                    {s.title}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Sections */}
                    <main className="flex-1 min-w-0 space-y-4">
                        {sections.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.id}
                                    id={s.id}
                                    data-section
                                    className="bg-gray-900 border border-gray-800 rounded-2xl p-8 scroll-mt-24"
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.whatsapp ? "bg-green-500/15" : "bg-blue-600/15"
                                                }`}
                                        >
                                            <Icon
                                                size={20}
                                                className={s.whatsapp ? "text-green-400" : "text-blue-400"}
                                            />
                                        </div>
                                        <div>
                                            {s.whatsapp && (
                                                <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full mb-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                                                    WhatsApp Business API
                                                </span>
                                            )}
                                            <h2 className="text-xl font-semibold text-white">{s.title}</h2>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-800 mb-5" />

                                    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                                        {s.content}
                                    </p>
                                </div>
                            );
                        })}
                    </main>
                </div>
            </div>
        </div>
    );
}