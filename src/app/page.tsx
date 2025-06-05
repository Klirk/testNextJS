import {
    Section,
    Text,
    Button,
    Badge,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Avatar
} from './ui';

import {
    Code,
    Database,
    Server,
    Layers,
    Github,
    Mail,
    Download,
    ExternalLink,
    Terminal,
    TerminalSquare,
    Globe,
    Cpu,
    MonitorSmartphone,
    FileCode,
    Eye,
    MousePointer
} from 'lucide-react';


export default function Home() {
    return (
        <div className="min-h-full bg-transparent">
            {/* Hero Section */}
            <Section
                className="min-h-screen flex items-center bg-black/70 py-20 border-b border-red-800"
                id="home"
            >
                <div className="flex flex-col items-center">
                    <Avatar
                        src="/avatar.jpg" // Replace with your actual photo
                        alt="KLIRK"
                        size="xl"
                        bordered
                        className="mb-8 neon-flicker"
                    />
                    <Text variant="h1" weight="bold" align="center" className="mb-4 neon-text neon-flicker">
                        KLIRK
                    </Text>
                    <div className="flex justify-center">
                        <Text variant="h3" color="primary" align="center" className="mb-6 typewriter">
                            Full Stack Developer
                        </Text>
                    </div>
                    <Text variant="body" align="center" className="max-w-2xl mb-8">
                        I build exceptional and accessible digital experiences for the web.
                        Specializing in modern JavaScript frameworks and responsive design.
                    </Text>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="#contact" className="inline-block">
                            <Button size="lg" className="flex items-center gap-2">
                                <Mail className="w-5 h-5"/>
                                Contact Me
                            </Button>
                        </a>
                        <Button variant="outline" size="lg" className="flex items-center gap-2">
                            <Download className="w-5 h-5"/>
                            Download Resume
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Skills Section */}
            <Section
                title="Skills & Technologies"
                subtitle="Technologies I work with"
                className="min-h-screen flex items-center border-b border-red-800 bg-black/60"
                id="skills"
            >
                <div className="flex flex-col max-w-4xl mx-auto mb-12 w-full">
                    <div className="mb-8">
                        <Text variant="h3" color="neon"
                              className="mb-10 text-center flex items-center justify-center gap-2">
                            <Server className="w-6 h-6 neon-flicker"/> Backend Development
                        </Text>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Badge variant="primary" size="lg" className="neon-flicker-random flex items-center gap-1">
                                <TerminalSquare className="w-4 h-4"/>Python
                            </Badge>
                            <Badge variant="primary" size="lg" className="neon-flicker-fast flex items-center gap-1">
                                <FileCode className="w-4 h-4"/>Flask
                            </Badge>
                            <Badge variant="primary" size="lg" className="neon-flicker-variant flex items-center gap-1">
                                <Globe className="w-4 h-4"/>Django
                            </Badge>
                            <Badge variant="primary" size="lg" className="neon-flicker-slow flex items-center gap-1">
                                <Terminal className="w-4 h-4"/>DjangoREST
                            </Badge>
                            <Badge variant="primary" size="lg" className="neon-flicker flex items-center gap-1">
                                <Cpu className="w-4 h-4"/>FastAPI
                            </Badge>
                            <Badge variant="info" size="lg" className="neon-flicker-fast flex items-center gap-1">
                                <Database className="w-4 h-4"/>MongoDB
                            </Badge>
                            <Badge variant="info" size="lg" className="neon-flicker-variant flex items-center gap-1">
                                <Database className="w-4 h-4"/>PostgreSQL
                            </Badge>
                            <Badge variant="success" size="lg" className="neon-flicker-slow flex items-center gap-1">
                                <Layers className="w-4 h-4"/>Docker
                            </Badge>
                        </div>
                    </div>

                    <div className="mb-8">
                        <Text variant="h3" color="neon"
                              className="mb-10 text-center flex items-center justify-center gap-2">
                            <MonitorSmartphone className="w-6 h-6 neon-flicker-variant"/> Frontend Development
                        </Text>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Badge variant="primary" size="lg" className="neon-flicker-random flex items-center gap-1">
                                <Code className="w-4 h-4"/>JavaScript
                            </Badge>
                            <Badge variant="primary" size="lg" className="neon-flicker flex items-center gap-1">
                                <Code className="w-4 h-4"/>TypeScript
                            </Badge>
                            <Badge variant="primary" size="lg" className="neon-flicker-variant flex items-center gap-1">
                                <Code className="w-4 h-4"/>React
                            </Badge>
                            <Badge variant="primary" size="lg" className="neon-flicker-slow flex items-center gap-1">
                                <Code className="w-4 h-4"/>Next.js
                            </Badge>
                            <Badge variant="info" size="lg" className="neon-flicker-fast flex items-center gap-1">
                                <Code className="w-4 h-4"/>TailwindCSS
                            </Badge>
                            <Badge variant="info" size="lg" className="neon-flicker-variant flex items-center gap-1">
                                <Code className="w-4 h-4"/>HTML/CSS
                            </Badge>
                        </div>
                    </div>

                    <div>
                        <Text variant="h3" color="neon"
                              className="mb-10 text-center flex items-center justify-center gap-2">
                            <Terminal className="w-6 h-6 neon-flicker-slow"/> DevOps & Tools
                        </Text>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Badge variant="success" size="lg" className="neon-flicker flex items-center gap-1">
                                <Github className="w-4 h-4"/>Git
                            </Badge>
                            <Badge variant="success" size="lg" className="neon-flicker-fast flex items-center gap-1">
                                <Terminal className="w-4 h-4"/>Linux
                            </Badge>
                            <Badge variant="success" size="lg" className="neon-flicker-slow flex items-center gap-1">
                                <Server className="w-4 h-4"/>Gunicorn
                            </Badge>
                            <Badge variant="success" size="lg" className="neon-flicker-variant flex items-center gap-1">
                                <Server className="w-4 h-4"/>Unicorn
                            </Badge>
                            <Badge variant="success" size="lg" className="neon-flicker-random flex items-center gap-1">
                                <Server className="w-4 h-4"/>Nginx
                            </Badge>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Projects Section */}
            <Section
                title="Projects"
                subtitle="Some of my recent work"
                className="min-h-screen flex items-center border-b border-red-800 bg-black/70"
                id="projects"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Portfolio Project */}
                    <Card hoverable className="border-2 border-red-800 neon-border flex flex-col h-full">
                        <CardHeader>
                            <Text variant="h3" color="neon" weight="bold"
                                  className="neon-flicker-random flex items-center gap-2">
                                <Globe className="w-6 h-6"/> Portfolio
                            </Text>
                            <Text variant="body-sm" color="muted" className="flex items-center gap-2">
                                <Code className="w-4 h-4"/> React, Next.js, TailwindCSS
                            </Text>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <Text className="mb-4">
                                A cyberpunk-inspired personal showcase featuring responsive design,
                                and dynamic animations. Built with Next.js and styled with TailwindCSS,
                                incorporating custom CSS animations for the retro-futuristic flickering effects.
                            </Text>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <div className="flex justify-between w-full">
                                <Button size="sm" className="neon-flicker-slow flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4"/> Live Demo
                                </Button>
                                <a
                                    href="https://github.com/Klirk/testNextJS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="neon-flicker-variant flex items-center gap-2"
                                    >
                                        <Github className="w-4 h-4"/> Source Code
                                    </Button>
                                </a>
                            </div>
                        </CardFooter>
                    </Card>

                    {/* BlumAI Project */}
                    <Card hoverable className="border-2 border-red-800 neon-border flex flex-col h-full">
                        <CardHeader>
                            <Text variant="h3" color="neon" weight="bold"
                                  className="neon-flicker-variant flex items-center gap-2">
                                <Eye className="w-6 h-6"/> blumAI
                            </Text>
                            <Text variant="body-sm" color="muted" className="flex items-center gap-2">
                                <TerminalSquare className="w-4 h-4"/> Python, OpenCV, YOLO
                            </Text>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <Text className="mb-4">
                                An intelligent automation tool that uses computer vision for screen capture,
                                YOLO object detection to identify elements, and mouse control automation.
                                Perfect for creating bots and automated testing scenarios.
                            </Text>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <div className="flex justify-between w-full">
                                <a
                                    href='https://youtu.be/YiSbWzZWFbo?si=LinPRAe_uKL8v_uL'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button size="sm" className="neon-flicker-fast flex items-center gap-2">
                                        <MousePointer className="w-4 h-4"/> Demo Video
                                    </Button>
                                </a>
                                <a
                                    href="https://github.com/Klirk/blumAI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="neon-flicker-random flex items-center gap-2"
                                    >
                                        <Github className="w-4 h-4"/> Source Code
                                    </Button>
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </Section>

            {/* Contact Section */}
            <Section
                title="Get in Touch"
                subtitle="Interested in working together? Let's connect!"
                className="min-h-screen flex items-center bg-black/60"
                id="contact"
            >
                <div className="max-w-md mx-auto text-center">
                    <Text className="mb-6">
                        I&#39;m currently open to new opportunities and collaborations.
                        Feel free to reach out if you have a project in mind or just want to connect.
                    </Text>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:klirk.ens@gmail.com"
                            className="inline-block w-full"
                        >
                            <Button
                                size="lg"
                                fullWidth
                                className="flex items-center justify-center gap-2 neon-flicker-random"
                            >
                                <Mail className="w-5 h-5"/> Send Email
                            </Button>
                        </a>
                        <a
                            href="https://github.com/Klirk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                fullWidth
                                className="flex items-center justify-center gap-2 neon-flicker-variant"
                            >
                                <Github className="w-5 h-5"/> GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
}
