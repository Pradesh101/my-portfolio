import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MyChat",
    description:
      "Realtime Chat application built with authentication, realtime chat,online status, profile management, and dark mode.",
    image: "/projects/mychat.png",
    tags: ["MERN", "Socket.io", "TailwindCSS", "DaisyUI", "Cloudinary"],
    demoUrl: "https://pradeshchatapp1.onrender.com/login",
    githubUrl: "https://github.com/Pradesh101/mychat-app",
  },
  {
    id: 2,
    title: "Cognera Health",
    description:
      "AI-powered mental health solutions that transform the therapeutic journey. Empowering individuals with personalized support, enabling practitioners to deliver better care, and helping organizations build mentally resilient communities.",
    image: "/projects/cognerahealth.png",
    tags: ["Next.js", "Python", "TailwindCSS", "Supabase", "Flutter"],
    demoUrl: "https://www.cognerahealth.ai/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Gemini Clone",
    description:
      "An advanced AI-powered web application that replicates the functionalities of Google's Gemini AI. This project leverages React.js for a dynamic and responsive frontend, while integrating Google AI API Services and Generative AI to provide intelligent responses and interactions. The UI is crafted using HTML, CSS, and JavaScript, ensuring a sleek and user-friendly experience.",
    image: "/projects/geminiclone.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google AI API",
      "TailwindCSS",
      "Generative AI",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Pradesh101/gemini-clone",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-conver transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Pradesh101"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
