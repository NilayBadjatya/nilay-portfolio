import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from 'react-icons/fa';

export const email = 'nilayjain8@gmail.com';

// Social Links
export const socialLinks = [
    { icon: FaEnvelope, url: `mailto:${email}` },
    { icon: FaGithub, url: `https://github.com/NilayBadjatya` },
    { icon: FaLinkedin, url: `https://linkedin.com/in/nilay-badjatya` },
];

// Quick message templates for email
export const quickMessages = [
    {
        text: 'Looking to collaborate!',
        subject: 'Collaboration Inquiry',
        body: 'Hi, I came across your work and would love to collaborate on a project. Let’s connect and discuss!',
    },
    {
        text: 'Need some guidance on a project',
        subject: 'Project Guidance',
        body: "Hello, I'm currently working on a project and could use some advice. Would you be open to a quick chat?",
    },
    {
        text: 'Just wanted to say hello!',
        subject: 'Hello!',
        body: "Hey there! I really liked your work and just wanted to say hi. Hope you're having a great day!",
    },
    {
        text: 'Hackathon team-up?',
        subject: 'Hackathon Collaboration',
        body: "Hi! I’m looking to participate in a hackathon and was wondering if you'd like to team up or know anyone looking for teammates.",
    },
    {
        text: 'Let’s grab a virtual coffee! ☕',
        subject: 'Virtual Coffee Chat',
        body: 'Hey! I’d love to connect and chat about tech, projects, or just geek out over coding. Up for a virtual coffee?',
    },
    {
        text: 'Your work is awesome!',
        subject: 'Appreciation Message',
        body: 'Hey! I just wanted to say that I really admire your work. Keep inspiring others!',
    },
    {
        text: 'Interested in open-source projects',
        subject: 'Open Source Contribution',
        body: 'Hey, I’m looking to get into open-source development. Do you know any good projects I can contribute to?',
    },
];
