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



export default function Home() {
  return (
    <div className="min-h-full bg-transparent">
      {/* Hero Section */}
      <Section 
        className="bg-black/70 py-20 border-b border-red-800"
      >
        <div className="flex flex-col items-center">
          <Avatar 
            src="/ava" // Replace with your actual photo
            alt="Your Name"
            size="xl"
            bordered
            className="mb-8 neon-flicker"
          />
          <Text variant="h1" weight="bold" align="center" className="mb-4 neon-text">
            Your Name
          </Text>
          <Text variant="h3" color="primary" align="center" className="mb-6">
            Full Stack Developer
          </Text>
          <Text variant="body" align="center" className="max-w-2xl mb-8">
            I build exceptional and accessible digital experiences for the web. 
            Specializing in modern JavaScript frameworks and responsive design.
          </Text>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Contact Me</Button>
            <Button variant="outline" size="lg">Download Resume</Button>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Skills & Technologies" subtitle="Technologies I work with" className="border-b border-red-800 bg-black/60">
        <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto mb-12">
          <Badge variant="primary" size="lg">JavaScript</Badge>
          <Badge variant="primary" size="lg">TypeScript</Badge>
          <Badge variant="primary" size="lg">React</Badge>
          <Badge variant="primary" size="lg">Next.js</Badge>
          <Badge variant="secondary" size="lg">Node.js</Badge>
          <Badge variant="secondary" size="lg">Express</Badge>
          <Badge variant="info" size="lg">MongoDB</Badge>
          <Badge variant="info" size="lg">PostgreSQL</Badge>
          <Badge variant="success" size="lg">Docker</Badge>
          <Badge variant="success" size="lg">AWS</Badge>
          <Badge variant="warning" size="lg">Figma</Badge>
          <Badge variant="danger" size="lg">Jest</Badge>
        </div>
      </Section>

      {/* Projects Section */}
      <Section 
        title="Projects" 
        subtitle="Some of my recent work"
        className="border-b border-red-800 bg-black/70"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <Card hoverable>
            <CardHeader>
              <Text variant="h3" color="neon" weight="bold">E-Commerce Platform</Text>
              <Text variant="body-sm" color="muted">React, Node.js, MongoDB</Text>
            </CardHeader>
            <CardContent>
              <Text className="mb-4">
                A full-featured e-commerce platform with cart functionality, 
                user authentication, and payment processing.
              </Text>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between">
                <Button size="sm">View Project</Button>
                <Button variant="outline" size="sm">Source Code</Button>
              </div>
            </CardFooter>
          </Card>

          {/* Project 2 */}
          <Card hoverable>
            <CardHeader>
              <Text variant="h3" color="neon" weight="bold">Task Management App</Text>
              <Text variant="body-sm" color="muted">Next.js, TypeScript, PostgreSQL</Text>
            </CardHeader>
            <CardContent>
              <Text className="mb-4">
                A Kanban-style task management application with drag-and-drop
                functionality and team collaboration features.
              </Text>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between">
                <Button size="sm">View Project</Button>
                <Button variant="outline" size="sm">Source Code</Button>
              </div>
            </CardFooter>
          </Card>

          {/* Project 3 */}
          <Card hoverable>
            <CardHeader>
              <Text variant="h3" color="neon" weight="bold">Weather Dashboard</Text>
              <Text variant="body-sm" color="muted">React, Redux, OpenWeather API</Text>
            </CardHeader>
            <CardContent>
              <Text className="mb-4">
                A responsive weather dashboard that displays current conditions
                and forecasts for multiple locations with interactive charts.
              </Text>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between">
                <Button size="sm">View Project</Button>
                <Button variant="outline" size="sm">Source Code</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        title="Get in Touch"
        subtitle="Interested in working together? Let's connect!"
        className="bg-black/60"
      >
        <div className="max-w-md mx-auto text-center">
          <Text className="mb-6">
            I&#39;m currently open to new opportunities and collaborations.
            Feel free to reach out if you have a project in mind or just want to connect.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" fullWidth>Send Email</Button>
            <Button variant="outline" size="lg" fullWidth>LinkedIn Profile</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
