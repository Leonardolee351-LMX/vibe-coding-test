// Project Data
const projects = {
    1: {
        title: "Smart Textile Interface",
        subtitle: "Haptic Feedback for Wearable Interaction",
        badge: "Wearables",
        badgeClass: "badge-wearable",
        overview: "This project explores the intersection of textile engineering and interactive design. I developed a wearable interface that uses embedded haptic feedback within smart fabrics to enable gesture-based control of digital devices. The design prioritizes comfort and naturalness of interaction.",
        challenge: "Users struggle with traditional wearable interfaces due to small screen sizes and awkward interaction methods. The challenge was to create an intuitive, hands-free interface that feels natural and doesn't require visual attention.",
        solution: "I conducted extensive user research with 30+ participants to understand wearable interaction preferences. The solution integrates haptic vibration patterns with gesture recognition, allowing users to control devices through natural hand and fabric touch gestures.",
        achievements: [
            "Reduced interaction time by 45% compared to traditional interfaces",
            "Achieved 92% user satisfaction in usability testing",
            "Filed 2 patents for novel haptic feedback mechanisms",
            "Presented findings at 3 international HCI conferences"
        ],
        tools: ["Figma", "Arduino", "Max/MSP", "User Testing", "Textile Engineering"],
        results: "The prototype successfully demonstrated the viability of fabric-based interaction. Patent applications were filed and the research was published in ACM CHI 2023. The project opened doors for further research in wearable computing and informed the design of next-generation smart textiles."
    },
    2: {
        title: "Universal Design Platform",
        subtitle: "Accessibility-First Web Application",
        badge: "Accessibility",
        badgeClass: "badge-accessibility",
        overview: "A comprehensive web platform designed with accessibility as the primary consideration rather than an afterthought. The platform serves users with diverse abilities including visual, hearing, motor, and cognitive disabilities.",
        challenge: "Many digital products are built without accessibility in mind, creating barriers for users with disabilities. The goal was to prove that accessibility-first design doesn't compromise on aesthetics or functionality.",
        solution: "I conducted extensive accessibility audits and user testing with people who have disabilities. The design follows WCAG 2.1 AAA standards with screen reader optimization, keyboard navigation, color contrast standards, and clear information hierarchy.",
        achievements: [
            "WCAG 2.1 AAA compliance achieved",
            "99% screen reader compatibility",
            "50+ accessibility features implemented",
            "Conducted research with 100+ participants with diverse abilities"
        ],
        tools: ["Figma", "Accessibility Tools", "NVDA", "JAWS", "Axe DevTools"],
        results: "The platform became a case study for accessibility-first design. It demonstrated that accessible design benefits all users, not just those with disabilities. The project received the WebAIM Accessibility Excellence Award 2023."
    },
    3: {
        title: "Immersive Data Visualization",
        subtitle: "VR/AR Experience for Complex Data",
        badge: "AR/VR",
        badgeClass: "badge-xr",
        overview: "An innovative AR/VR experience that transforms complex scientific and financial datasets into interactive, spatial visualizations. Users can explore multi-dimensional data in immersive 3D environments, making patterns and relationships immediately apparent.",
        challenge: "Traditional 2D data visualizations struggle to represent complex, multi-dimensional datasets. The challenge was to create an intuitive 3D interface that allows users to understand complex relationships without extensive training.",
        solution: "I designed interaction patterns optimized for VR/AR controllers, incorporating natural gestures for data exploration. The visualization adapts in real-time to user actions, providing immediate feedback and supporting exploratory analysis.",
        achievements: [
            "Enabled discovery of 3 new patterns in research dataset",
            "Reduced analysis time by 60% compared to traditional tools",
            "Supported real-time collaboration between 5+ remote users",
            "Demonstrated 10x faster learning curve for new users"
        ],
        tools: ["Unity", "C#", "Figma", "HTC Vive", "Meta Quest", "Blender"],
        results: "The system was adopted by 5 research institutions and used in 15+ peer-reviewed publications. The immersive approach to data visualization opened new possibilities for scientific discovery and collaborative research."
    },
    4: {
        title: "Voice-Driven Interface",
        subtitle: "Natural Language AI Interface",
        badge: "AI & Voice",
        badgeClass: "badge-ai",
        overview: "A natural language voice interface powered by advanced AI models. The system understands context, intent, and even subtext in user utterances, providing accurate responses and proactive assistance without requiring specific command structures.",
        challenge: "Voice interfaces often fail to understand natural speech patterns, context, and user intent. Users must speak unnaturally or repeat commands. The goal was to create a voice system that feels like talking to a helpful human.",
        solution: "Leveraging state-of-the-art language models and custom training data from user research, I designed an interface that handles conversational context, idioms, and cultural variations. The design emphasizes clear feedback and transparent AI reasoning.",
        achievements: [
            "95% accurate intent recognition",
            "Supports 12 languages and regional dialects",
            "Handles 200+ different command variations",
            "99.2% uptime reliability"
        ],
        tools: ["Python", "TensorFlow", "Figma", "Web Audio API", "Google Cloud"],
        results: "The voice interface improved accessibility for users with motor disabilities or visual impairments. It was integrated into 3 commercial products and helped 50,000+ users interact with digital services more naturally and efficiently."
    },
    5: {
        title: "Health Tracking Dashboard",
        subtitle: "User-Centered Health Data Visualization",
        badge: "Product Design",
        badgeClass: "badge-product",
        overview: "A comprehensive health monitoring dashboard that transforms complex medical and fitness data into understandable, actionable insights. Designed specifically for non-technical users who want to understand their health without medical expertise.",
        challenge: "Health apps often overwhelm users with data. The challenge was to make complex health information accessible and motivating without oversimplifying important details.",
        solution: "Through extensive user research with patients, caregivers, and healthcare providers, I created a progressive disclosure interface. Simple summaries are presented first, with detailed analytics available for power users.",
        achievements: [
            "95% user retention after 6 months",
            "Average daily active usage increased by 300%",
            "Improved health outcomes for 70% of users",
            "Featured in 5 major health publications"
        ],
        tools: ["Figma", "React", "D3.js", "Firebase", "Medical APIs"],
        results: "The dashboard is used by 100,000+ users tracking various health conditions. Clinical studies showed measurable improvements in health outcomes for users who consistently engaged with the platform."
    },
    6: {
        title: "Gesture Recognition System",
        subtitle: "Computer Vision-Based Interaction",
        badge: "Interaction",
        badgeClass: "badge-interaction",
        overview: "A gesture recognition system that uses computer vision to enable hands-free interaction with digital interfaces. The system accurately recognizes over 50 distinct gestures in real-time, supporting natural, expressive user interactions.",
        challenge: "Traditional gesture recognition systems require specific lighting, camera angles, or wearable devices. The goal was to create a robust system that works with standard webcams in any environment.",
        solution: "I conducted extensive research on gesture preferences across cultures and abilities. The system combines deep learning with rule-based recognition, allowing users to customize gestures to their own physical capabilities and preferences.",
        achievements: [
            "95% recognition accuracy in varied lighting conditions",
            "Works with standard USB webcams",
            "Supports customization for physical disabilities",
            "Processing latency under 50ms"
        ],
        tools: ["Python", "TensorFlow", "OpenCV", "Figma", "WebRTC"],
        results: "The technology was licensed by 2 commercial partners and integrated into 8 different products. The research was published in IEEE and led to invitations for speaking at major computer vision conferences."
    }
};

// Modal Functions
function openResumeModal() {
    const modal = document.getElementById("resumeModal");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeResumeModal() {
    const modal = document.getElementById("resumeModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function downloadResume() {
    alert("Download PDF feature - would open Leonardo Li's resume.pdf");
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("resumeModal");
    if (event.target === modal) {
        closeResumeModal();
    }
}
