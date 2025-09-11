import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { BiUserCheck ,BiListCheck, BiLogoPython, BiLogoDjango, BiLogoAngular, BiLogoReact, BiLogoPostgresql, BiLogoMongodb , BiLogoFirebase , BiLogoWordpress , BiLogoJoomla , BiLogoTailwindCss, BiLogoHtml5, BiLogoJavascript, BiLogoBootstrap, BiLogoNodejs, BiLogoPhp,  } from "react-icons/bi";
import { Lightbulb, Megaphone, Newspaper, TabletSmartphone, ChartColumnBig, Zap } from 'lucide-react';
import { TbBrandNextjs } from "react-icons/tb";
import { SiRubyonrails } from "react-icons/si";
import { FaRegChartBar } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";


// Static project data
const projects = [
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    client: 'TechCorp Solutions',
    duration: '3 months',
    category: 'Development',
    image: '/projects/project1.svg',
    description: 'Explore our diverse range of offerings, from cutting-edge web development to comprehensive digital marketing solutions.',
    overview: 'We developed a comprehensive e-commerce platform for TechCorp Solutions, focusing on creating a seamless shopping experience with modern design patterns and optimized performance.',
    challenge: 'Building a scalable e-commerce solution that handles high traffic while maintaining excellent user experience across all devices.',
    solution: 'Implemented a mobile-first responsive design with optimized performance, integrated payment gateways, and created an intuitive user interface that drives conversions.',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'PostgreSQL'],
    tags: ['e-commerce', 'responsive', 'performance', 'user-experience'],
    challengeImage: '/projects/project1.svg',
  },
  {
    slug: 'architecture-portfolio',
    title: 'Architecture Portfolio',
    client: 'Bombay Architects',
    duration: '2 months',
    category: 'Design',
    image: '/projects/project2.jpg',
    description: 'A stunning portfolio website showcasing architectural excellence with clean, modern design.',
    overview: 'Designed and developed a sophisticated portfolio website for Bombay Architects that showcases their architectural projects with stunning visuals and smooth interactions.',
    challenge: 'Creating a portfolio that effectively showcases large architectural images while maintaining fast loading times and excellent mobile experience.',
    solution: 'Built a responsive portfolio with optimized image loading, implemented lazy loading for performance, and created an intuitive navigation system for project browsing.',
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Cloudinary', 'Vercel'],
    tags: ['<TbBrandNextjs />', '<BiLogoReact />', '<BiLogoTailwindCss />', '<BiLogoPostgresql/>']
  },
  {
    slug: 'book-landing-page',
    title: 'Book Landing Page',
    client: 'Atomic Habits',
    duration: '1 month',
    category: 'Design',
    image: '/projects/project3.svg',
    description: 'A high-converting landing page for the bestselling book with engaging copy and compelling visuals.',
    overview: 'Created a high-converting landing page for the bestselling book Atomic Habits, featuring engaging copy, compelling visuals, and optimized conversion elements.',
    challenge: 'Designing a landing page that effectively communicates the book\'s value proposition while driving pre-orders and building email list.',
    solution: 'Implemented persuasive copywriting with clear CTAs, created engaging visual storytelling, and optimized the page for search engines and social sharing.',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'PostgreSQL'], 
    tags: ['landing-page', 'conversion', 'design', 'marketing']
  },
  {
    slug: 'author-website',
    title: 'Author Website',
    client: 'Ikigai',
    duration: '2 months',
    category: 'Development',
    image: '/placeholder-project.jpg',
    description: 'A comprehensive author website with blog integration and SEO-optimized content strategy.',
    overview: 'Built a comprehensive author website for Ikigai with integrated blog functionality, SEO optimization, and content strategy to build author platform and engage readers.',
    challenge: 'Creating a platform that serves both as a marketing tool for the book and a long-term author brand building solution.',
    solution: 'Developed a content management system with blog integration, implemented SEO best practices, and created a scalable platform for future book releases.',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'PostgreSQL'],
    tags: ['website', 'content', 'seo', 'author-platform']
  },
  {
    slug: 'digital-product',
    title: 'Digital Product',
    client: 'Dopamine Detox',
    duration: '4 months',
    category: 'Development',
    image: '/placeholder-project.jpg',
    description: 'A complete digital product ecosystem with course platform and community features.',
    overview: 'Developed a complete digital product ecosystem for Dopamine Detox including course platform, community features, and membership management system.',
    challenge: 'Building a scalable platform that handles video content, user progress tracking, and community engagement while maintaining high performance.',
    solution: 'Created a robust learning management system with video streaming, progress tracking, community forums, and integrated payment processing.',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'PostgreSQL'],
    tags: ['digital-product', 'course-platform', 'community', 'membership']
  },
  {
    slug: 'brand-identity',
    title: 'Brand Identity',
    client: 'Tech Startup',
    duration: '1 month',
    category: 'Design',
    image: '/placeholder-project.jpg',
    description: 'Complete brand identity design for a tech startup including logo, colors, and guidelines.',
    overview: 'Created a complete brand identity system for a tech startup including logo design, color palette, typography system, and comprehensive brand guidelines.',
    challenge: 'Developing a modern, versatile brand identity that works across digital and print mediums while appealing to both investors and customers.',
    solution: 'Designed a flexible visual identity system with scalable logo variations, comprehensive color palette, and detailed brand guidelines for consistent application.',
    technologies: ['Figma', 'Adobe XD', 'Brand Guidelines', 'Design System'],
    tags: ['branding', 'identity', 'design-system', 'guidelines']
  }
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - ${project.client}`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-[#3c359e] hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

    return (
      <>
        
        <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="bg-[#0A0822] text-white relative overflow-hidden z-10 ">
            <div className="absolute bottom-100 left-2 -z-10 opacity-50">
              <svg width="90" height="107" viewBox="0 0 179 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="56.3906" y="25.8828" width="100" height="100" rx="10" transform="rotate(-15 56.3906 25.8828)" fill="#35327D"/>
                <rect x="72.5625" y="163.469" width="54.9798" height="51.8444" rx="10" transform="rotate(-15 72.5625 163.469)" fill="#35327D"/>
                <rect y="127.617" width="40.0895" height="41.0212" rx="10" transform="rotate(-15 0 127.617)" fill="#35327D"/>
              </svg>
            </div>
            <div className="absolute top-30 right-5 -z-10 rotate-19 overflow-hidden opacity-50">
              <svg width="90" height="107" viewBox="0 0 179 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="56.3906" y="25.8828" width="100" height="100" rx="10" transform="rotate(-15 56.3906 25.8828)" fill="#35327D"/>
                <rect x="72.5625" y="163.469" width="54.9798" height="51.8444" rx="10" transform="rotate(-15 72.5625 163.469)" fill="#35327D"/>
                <rect y="127.617" width="40.0895" height="41.0212" rx="10" transform="rotate(-15 0 127.617)" fill="#35327D"/>
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-6">
                <Link 
                  href="/projects" 
                  className="inline-flex items-center text-white hover:text-gray-300 mb-8 transition-colors"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Back to Projects
                </Link>
              </div>
              <div className="max-w-4xl pb-12 mx-auto">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-8">
                  <Image 
                    src={project.image || "/placeholder-project.jpg"} 
                    alt={project.title} 
                    fill
                    className="object-cover" 
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center">{project.title}</h1>
                <p className="text-xl text-gray-300 text-center">{project.client}</p>
              </div>
              
              {/* Project Details Grid */}
              <section className="pt-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Client</h3>
                    <p className="text-white">{project.client}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
                    <p className="text-white">{project.duration || "Not specified"}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Category</h3>
                    <p className="text-white">{project.category}</p>
                  </div>
                </div>
              </section>
            </div>
          </header>

          {/* Main Content */}
          <main className="">
            {/* Overview Section */}
            <section className="py-20">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-center text-4xl font-bold text-[#564EDD] mb-12">Overview</h2>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.overview || project.description || "Project overview not available."}
                  </p>
                </div>
              </div>
            </section>

            {/* Challenge Section */}
            {project.challenge && (
              <section className="py-20 bg-[#221F4D]">
                <div className="px-14 grid grid-cols-2 md:grid-cols-2 gap-16 md:px-16">
                  <div className=''>
                    <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-8">
                        <Image 
                          src={project.image || "/placeholder-project.jpg"} 
                          alt={project.title} 
                          fill
                          className="object-cover" 
                        />
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Challenge</h2>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Solution Section */}
            {project.solution && (
              <section className="py-20">
                <div className="max-w-4xl mx-auto px-4">
                  <div className="">
                    <h2 className="text-center text-3xl font-bold text-[#564EDD] mb-8">Solution</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </section>
            )}
            {/* Technologies results */}
            <section className="py-16">
              <div className="px-4 grid grid-cols-1 lg:grid-cols-10 gap-16 ">
                <h2 className="text-center text-3xl font-bold text-[#564EDD] mb-8 lg:col-span-4">Results</h2>
                <div className="flex flex-wrap justify-left gap-3 lg:col-span-6">
                  <h3 className='text-2xl font-bold'>Efficiency</h3>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <h3 className='text-2xl font-bold'>Enhanced Compliance</h3>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <h3 className='text-2xl font-bold'>Scalability</h3>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <h3 className='text-2xl font-bold'>Cost Reduction</h3>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <h3 className='text-2xl font-bold'>Improvement in Efficiency</h3>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </section>



            {/* Technologies Section */}
            <section className="py-16">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold text-[#564EDD] mb-8">Technologies Used</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {project.technologies?.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-center w-16 h-16 bg-[#3c359e] text-white rounded-lg hover:bg-[#564EDD] transition-colors cursor-pointer group"
                      title={tech}
                    >
                      {tech === 'React' && <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>}
                      {tech === 'Next.js' && <svg className="w-8 h-8" viewBox="0 0 180 180" fill="currentColor"><path d="M120.7 0L75.6 56.6L43.7 33L90.3 0H120.7zM75.6 65.4L120.7 122H90.3L53.2 75.6L75.6 65.4zM90.3 122h30.4l-30.4 38V122zM0 122h30.4l15.2-19L0 122zM0 0l53.2 75.6L0 122V0z"/></svg>}
                      {tech === 'JavaScript' && <svg className="w-8 h-8" viewBox="0 0 630 630" fill="currentColor"><rect x="0" y="0" width="630" height="630" rx="81.5" fill="#f7df1e"/><path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/></svg>}
                      {tech === 'TypeScript' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path fill="#007acc" d="M56.813 0h14.912l-7.452 8.491L70.918 0h14.912L69.525 13.178 84.828 27.356H69.916l-6.552-7.452L56.813 27.356H41.901l15.303-14.178L56.813 0z"/><path fill="#007acc" d="M24.285 128V24.285h79.43V128H24.285z"/><path fill="#fff" d="M65.016 39.054h-16.32v49.32c0 15.48-7.452 20.988-19.356 20.988-3.096 0-6.708-.516-9.192-1.548l.516-13.692c1.548.516 3.612.516 5.676.516 4.128 0 6.708-1.032 6.708-11.628V39.054zm15.48 26.784c0-11.628-5.16-17.352-15.996-17.352-6.708 0-12.144 2.58-16.32 6.708l-.516-5.676h-14.448v51.9c0 15.48-7.452 20.988-19.356 20.988-3.096 0-6.708-.516-9.192-1.548l.516-13.692c1.548.516 3.612.516 5.676.516 4.128 0 6.708-1.032 6.708-11.628V65.838h16.836c11.628 0 17.868-5.16 17.868-16.32z"/></svg>}
                      {tech === 'Node.js' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path fill="#83cd29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.021-1.584-8.83 0L14.901 30.334C12.031 31.985 10 35.087 10 38.407v51.142c0 3.319 2.021 6.423 4.901 8.083l44.095 25.604c2.79 1.581 6.021 1.581 8.83 0l44.095-25.604c2.88-1.66 4.901-4.763 4.901-8.083V38.407c0-3.319-2.021-6.423-4.901-8.083zM64 97.304c-4.404 0-8-3.596-8-8s3.596-8 8-8 8 3.596 8 8-3.596 8-8 8z"/><path fill="#404137" d="M107.051 42.656c-.283-.916-.876-1.659-1.747-2.143l-44.095-25.604c-.87-.484-1.834-.726-2.797-.726s-1.927.242-2.797.726L11.525 40.513c-.87.484-1.464 1.227-1.747 2.143-.283.916-.212 1.9.212 2.773l44.095 76.349c.283.49.707.916 1.227 1.227.52.311 1.11.466 1.727.466h.071c.617 0 1.207-.155 1.727-.466.52-.311.944-.737 1.227-1.227l44.095-76.349c.424-.873.495-1.857.212-2.773z"/></svg>}
                      {tech === 'Python' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M63.391 1.988c-4.222.02-8.037.933-11.2 2.597-3.2 1.688-5.692 4.323-7.4 7.46-1.692 3.137-2.496 6.787-2.496 10.667 0 3.84.804 7.496 2.496 10.597 1.708 3.137 4.2 5.772 7.4 7.46 3.163 1.664 6.978 2.577 11.2 2.597 4.222-.02 8.054-.933 11.2-2.597 3.2-1.688 5.692-4.323 7.4-7.46 1.692-3.101 2.496-6.757 2.496-10.597 0-3.88-.804-7.53-2.496-10.667-1.708-3.137-4.2-5.772-7.4-7.46-3.146-1.664-6.978-2.577-11.2-2.597zm-11.2 12.174c-1.708 0-3.2.497-4.323 1.456-1.123.96-1.84 2.357-2.197 4.137-.357 1.78-.268 3.84.268 5.957.536 2.117 1.473 4.003 2.797 5.597 1.324 1.594 3.017 2.597 5.054 2.597 1.708 0 3.2-.497 4.323-1.456 1.123-.96 1.84-2.357 2.197-4.137.357-1.78.268-3.84-.268-5.957-.536-2.117-1.473-4.003-2.797-5.597-1.324-1.594-3.017-2.597-5.054-2.597z" fill="#3776ab"/><path d="M126.915 98.483c-2.003-14.597-6.82-25.277-14.45-32.04-7.63-6.763-17.773-9.683-30.43-9.683-5.12 0-9.86.8-14.22 2.4-4.36 1.6-8.24 3.867-11.64 6.8-3.4 2.933-6.12 6.467-8.16 10.6-2.04 4.133-3.06 8.667-3.06 13.6 0 4.8.9 9.067 2.7 12.8 1.8 3.733 4.3 6.933 7.5 9.6 3.2 2.667 7 4.667 11.4 6 4.4 1.333 9.2 2 14.4 2 5.12 0 9.86-.8 14.22-2.4 4.36-1.6 8.24-3.867 11.64-6.8 3.4-2.933 6.12-6.467 8.16-10.6 2.04-4.133 3.06-8.667 3.06-13.6 0-2.4-.2-4.8-.6-7.2h-29.82c.4 1.6.6 3.2.6 4.8 0 3.733-1.02 6.667-3.06 8.8-2.04 2.133-4.76 3.2-8.16 3.2-2.56 0-4.8-.667-6.72-2-1.92-1.333-3.44-3.2-4.56-5.6-1.12-2.4-1.68-5.2-1.68-8.4 0-3.2.56-6 1.68-8.4 1.12-2.4 2.64-4.267 4.56-5.6 1.92-1.333 4.16-2 6.72-2 3.84 0 6.96 1.333 9.36 4 2.4 2.667 3.6 6.4 3.6 11.2h29.82c.4-2.4.6-4.8.6-7.2 0-3.733-1.02-6.667-3.06-8.8-2.04-2.133-4.76-3.2-8.16-3.2-2.56 0-4.8.667-6.72 2-1.92 1.333-3.44 3.2-4.56 5.6-1.12 2.4-1.68 5.2-1.68 8.4 0 3.2.56 6 1.68 8.4 1.12 2.4 2.64 4.267 4.56 5.6 1.92 1.333 4.16 2 6.72 2 3.84 0 6.96-1.333 9.36-4 2.4-2.667 3.6-6.4 3.6-11.2z" fill="#ffd43b"/></svg>}
                      {tech === 'HTML5' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"/><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zm0 35.85l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>}
                      {tech === 'CSS3' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H37.605l-.277-3.108-.63-7.012-.331-3.711h27.711zM64.001 51.429v13.831H50.486l-.277-3.108-.631-7.012-.33-3.711h14.753z"/></svg>}
                      {tech === 'TailwindCSS' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64.004 25.298c-17.673 0-32.018 14.343-32.018 32.015 0 17.673 14.345 32.018 32.018 32.018 17.673 0 32.018-14.345 32.018-32.018 0-17.672-14.345-32.015-32.018-32.015zm0 55.022c-12.686 0-22.97-10.284-22.97-22.97 0-12.686 10.284-22.97 22.97-22.97 12.686 0 22.97 10.284 22.97 22.97 0 12.686-10.284 22.97-22.97 22.97z" fill="#06b6d4"/><path d="M94.017 42.683c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 12.022c-2.49 0-4.522-2.032-4.522-4.522s2.032-4.522 4.522-4.522 4.522 2.032 4.522 4.522-2.032 4.522-4.522 4.522z" fill="#06b6d4"/></svg>}
                      {tech === 'MongoDB' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M88.981 37.271c-2.318-9.61-7.708-17.572-14.954-23.724-7.246-6.152-16.748-10.304-27.047-10.304-10.299 0-19.801 4.152-27.047 10.304-7.246 6.152-12.636 14.114-14.954 23.724-2.318 9.61-1.509 19.922 2.318 29.134 3.827 9.212 10.299 16.748 18.361 21.505l-2.318 4.637c-1.509 3.018-3.018 6.035-4.152 9.212-1.134 3.177-2.318 6.354-2.318 9.531 0 3.177 1.184 6.354 3.177 8.347 1.993 1.993 4.637 3.177 7.654 3.177 3.018 0 5.661-1.184 7.654-3.177 1.993-1.993 3.177-4.637 3.177-7.654 0-3.177-1.184-6.354-2.318-9.531-1.134-3.177-2.643-6.194-4.152-9.212l-2.318-4.637c8.062-4.758 14.534-12.293 18.361-21.505 3.827-9.212 4.637-19.524 2.318-29.134zm-14.954 43.659c-2.318 5.661-6.035 10.419-10.793 13.437-4.758 3.018-10.419 4.637-16.748 4.637-6.329 0-11.99-1.619-16.748-4.637-4.758-3.018-8.475-7.776-10.793-13.437-2.318-5.661-3.018-11.99-1.509-18.361 1.509-6.371 4.637-11.99 9.395-16.748 4.758-4.758 10.793-7.776 17.449-7.776 6.656 0 12.691 3.018 17.449 7.776 4.758 4.758 7.886 10.377 9.395 16.748 1.509 6.371.81 12.7-1.509 18.361z" fill="#47a248"/></svg>}
                      {tech === 'PostgreSQL' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M93.809 42.904c-2.355-1.482-5.386-2.223-9.092-2.223-2.223 0-4.446.371-6.669 1.113-2.223.742-4.075 1.854-5.572 3.336-1.482 1.482-2.594 3.336-3.336 5.572-.742 2.223-1.113 4.446-1.113 6.669 0 2.223.371 4.446 1.113 6.669.742 2.223 1.854 4.075 3.336 5.572 1.482 1.482 3.336 2.594 5.572 3.336 2.223.742 4.446 1.113 6.669 1.113 3.336 0 6.298-.742 8.884-2.223 2.586-1.482 4.632-3.336 6.141-5.572 1.508-2.223 2.262-4.446 2.262-6.669 0-2.223-.754-4.446-2.262-6.669-1.509-2.223-3.555-4.075-6.141-5.572z" fill="#336791"/><path d="M103.901 0C92.857 0 83.809 3.336 76.757 10.008c-7.052 6.672-10.578 15.72-10.578 27.144 0 3.336.371 6.672 1.113 10.008.742 3.336 1.854 6.298 3.336 8.884 1.482 2.586 3.336 4.632 5.572 6.141 2.223 1.509 4.446 2.262 6.669 2.262 1.482 0 2.964-.371 4.446-1.113 1.482-.742 2.964-1.854 4.446-3.336 1.482-1.482 2.594-3.336 3.336-5.572.742-2.223 1.113-4.446 1.113-6.669 0-2.223-.371-4.446-1.113-6.669-.742-2.223-1.854-4.075-3.336-5.572-1.482-1.482-3.336-2.594-5.572-3.336-2.223-.742-4.446-1.113-6.669-1.113-1.482 0-2.964.371-4.446 1.113-1.482.742-2.964 1.854-4.446 3.336-1.482 1.482-2.594 3.336-3.336 5.572-.742 2.223-1.113 4.446-1.113 6.669 0 2.223.371 4.446 1.113 6.669.742 2.223 1.854 4.075 3.336 5.572 1.482 1.482 3.336 2.594 5.572 3.336 2.223.742 4.446 1.113 6.669 1.113z" fill="#336791"/></svg>}
                      {tech === 'AWS' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M36.109 44.445c-1.938 0-3.563.649-4.875 1.938l-1.313 1.75c-.25.5-.375 1-.375 1.5 0 1.125.875 2.188 2.625 3.188 1.75 1 3.625 1.875 5.625 2.625 2 .75 4.188 1.313 6.563 1.688 2.375.375 4.813.563 7.313.563 3.625 0 7.063-.438 10.313-1.313 3.25-.875 6.125-2.25 8.625-4.125 2.5-1.875 4.5-4.313 6-7.313 1.5-3 2.25-6.563 2.25-10.688 0-3.5-.625-6.563-1.875-9.188-1.25-2.625-3-4.875-5.25-6.75-2.25-1.875-4.938-3.375-8.063-4.5-3.125-1.125-6.563-2-10.313-2.625-2.875-.5-5.313-1-7.313-1.5-2-.5-3.625-1.125-4.875-1.875-1.25-.75-2.125-1.688-2.625-2.813-.5-1.125-.75-2.5-.75-4.125 0-1.375.313-2.563.938-3.563.625-1 1.438-1.875 2.438-2.563 1-.688 2.188-1.188 3.563-1.5 1.375-.313 2.813-.438 4.313-.438 2.375 0 4.688.313 6.938.938 2.25.625 4.313 1.625 6.188 3 1.875 1.375 3.563 3.188 5.063 5.438 1.5 2.25 2.813 5 3.938 8.25l14.813-3.75c-1.75-5.5-4.313-10.063-7.688-13.688-3.375-3.625-7.438-6.5-12.125-8.625-4.688-2.125-9.938-3.563-15.75-4.313-5.813-.75-11.875-.563-18.188.563-5.5.938-10.5 2.438-15 4.5-4.5 2.063-8.313 4.688-11.438 7.875-3.125 3.188-5.5 6.875-7.125 11.063-1.625 4.188-2.438 8.688-2.438 13.5 0 6.125 1.063 11.313 3.188 15.563 2.125 4.25 4.938 7.813 8.438 10.688 3.5 2.875 7.563 5.188 12.188 6.938 4.625 1.75 9.438 3.063 14.438 3.938 2.875.5 5.563.938 8.063 1.313 2.5.375 4.75.875 6.75 1.5 2 .625 3.625 1.438 4.875 2.438 1.25 1 1.875 2.375 1.875 4.125 0 1.5-.375 2.813-1.125 3.938-.75 1.125-1.75 2.063-3 2.813-1.25.75-2.688 1.313-4.313 1.688-1.625.375-3.313.563-5.063.563-3.75 0-7.188-.563-10.313-1.688-3.125-1.125-5.813-2.813-8.063-5.063-2.25-2.25-4-5.063-5.25-8.438-1.25-3.375-1.875-7.313-1.875-11.813l-14.813 3.75c.5 6.25 2.063 11.813 4.688 16.688 2.625 4.875 6.063 8.938 10.313 12.188 4.25 3.25 9.188 5.688 14.813 7.313 5.625 1.625 11.625 2.438 18 2.438 5.5 0 10.813-.75 15.938-2.25 5.125-1.5 9.688-3.813 13.688-6.938 4-3.125 7.188-7.063 9.563-11.813 2.375-4.75 3.563-10.313 3.563-16.688 0-5.375-.938-10.063-2.813-14.063-1.875-4-4.438-7.313-7.688-9.938-3.25-2.625-7.063-4.563-11.438-5.813-4.375-1.25-9.063-1.875-14.063-1.875-2.875 0-5.5.188-7.875.563-2.375.375-4.563 1-6.563 1.875-2 .875-3.813 2.063-5.438 3.563-1.625 1.5-3.063 3.313-4.313 5.438-1.25 2.125-2.313 4.563-3.188 7.313-.875 2.75-1.563 5.813-2.063 9.188z" fill="#f90"/></svg>}
                      {tech === 'Docker' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M107.904 52.057c-2.56-1.963-5.797-2.988-9.12-2.988-1.76 0-3.52.224-5.173.672-1.653.448-3.2 1.12-4.64 2.016-1.44.896-2.667 2.016-3.68 3.36-.896 1.344-1.547 2.912-1.963 4.704-.32 1.792-.448 3.696-.448 5.712 0 2.016.128 3.92.448 5.712.416 1.792 1.067 3.36 1.963 4.704 1.013 1.344 2.24 2.464 3.68 3.36 1.44.896 2.987 1.568 4.64 2.016 1.653.448 3.413.672 5.173.672 3.323 0 6.56-1.025 9.12-2.988 2.56-1.963 4.48-4.592 5.76-7.888 1.28-3.296 1.92-7.056 1.92-11.28 0-4.224-.64-7.984-1.92-11.28-1.28-3.296-3.2-5.925-5.76-7.888zm-12.32 27.776c-1.44 0-2.773-.32-4-.96-1.227-.64-2.24-1.547-3.04-2.72-.8-1.173-1.36-2.56-1.68-4.16-.32-1.6-.48-3.36-.48-5.28 0-1.92.16-3.68.48-5.28.32-1.6.88-2.987 1.68-4.16.8-1.173 1.813-2.08 3.04-2.72 1.227-.64 2.56-.96 4-.96 1.44 0 2.773.32 4 .96 1.227.64 2.24 1.547 3.04 2.72.8 1.173 1.36 2.56 1.68 4.16.32 1.6.48 3.36.48 5.28 0 1.92-.16 3.68-.48 5.28-.32 1.6-.88 2.987-1.68 4.16-.8 1.173-1.813 2.08-3.04 2.72-1.227.64-2.56.96-4 .96z" fill="#2396ed"/><path d="M87.584 25.185c-1.44-1.44-3.2-2.24-5.28-2.24-2.08 0-3.84.8-5.28 2.24-1.44 1.44-2.24 3.2-2.24 5.28 0 2.08.8 3.84 2.24 5.28 1.44 1.44 3.2 2.24 5.28 2.24 2.08 0 3.84-.8 5.28-2.24 1.44-1.44 2.24-3.2 2.24-5.28 0-2.08-.8-3.84-2.24-5.28z" fill="#2396ed"/><path d="M67.584 25.185c-1.44-1.44-3.2-2.24-5.28-2.24-2.08 0-3.84.8-5.28 2.24-1.44 1.44-2.24 3.2-2.24 5.28 0 2.08.8 3.84 2.24 5.28 1.44 1.44 3.2 2.24 5.28 2.24 2.08 0 3.84-.8 5.28-2.24 1.44-1.44 2.24-3.2 2.24-5.28 0-2.08-.8-3.84-2.24-5.28z" fill="#2396ed"/><path d="M47.584 25.185c-1.44-1.44-3.2-2.24-5.28-2.24-2.08 0-3.84.8-5.28 2.24-1.44 1.44-2.24 3.2-2.24 5.28 0 2.08.8 3.84 2.24 5.28 1.44 1.44 3.2 2.24 5.28 2.24 2.08 0 3.84-.8 5.28-2.24 1.44-1.44 2.24-3.2 2.24-5.28 0-2.08-.8-3.84-2.24-5.28z" fill="#2396ed"/><path d="M27.584 25.185c-1.44-1.44-3.2-2.24-5.28-2.24-2.08 0-3.84.8-5.28 2.24-1.44 1.44-2.24 3.2-2.24 5.28 0 2.08.8 3.84 2.24 5.28 1.44 1.44 3.2 2.24 5.28 2.24 2.08 0 3.84-.8 5.28-2.24 1.44-1.44 2.24-3.2 2.24-5.28 0-2.08-.8-3.84-2.24-5.28z" fill="#2396ed"/></svg>}
                      {tech === 'Git' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M124.737 58.378L69.621 3.264c-3.328-3.328-8.736-3.328-12.064 0L46.149 14.67l14.404 14.404c3.542-1.188 7.604-.387 10.413 2.422 2.848 2.848 3.624 6.933 2.339 10.485l13.881 13.881c3.552-1.285 7.637-.509 10.485 2.339 3.985 3.985 3.985 10.449 0 14.434-3.985 3.985-10.449 3.985-14.434 0-2.992-2.992-3.747-7.401-2.261-11.093l-12.931-12.931-.003 34.034c.922.453 1.756 1.048 2.456 1.748 3.985 3.985 3.985 10.449 0 14.434-3.985 3.985-10.449 3.985-14.434 0-3.985-3.985-3.985-10.449 0-14.434.719-.719 1.548-1.301 2.456-1.748V64.188c-.908-.495-1.737-1.077-2.456-1.795-3.039-3.039-3.747-7.401-2.261-11.093L46.149 38.944 2.263 82.83c-3.328 3.328-3.328 8.736 0 12.064l55.116 55.116c3.328 3.328 8.736 3.328 12.064 0l54.859-54.859c3.328-3.328 3.328-8.736 0-12.064z" fill="#F05032"/></svg>}
                      {tech === 'Figma' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 112c-26.5 0-48-21.5-48-48S37.5 16 64 16s48 21.5 48 48-21.5 48-48 48z" fill="#1abcfe"/><path d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="#0acf83"/></svg>}
                      {tech === 'Adobe XD' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 112c-26.5 0-48-21.5-48-48S37.5 16 64 16s48 21.5 48 48-21.5 48-48 48z" fill="#ff61f6"/><path d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="#ff61f6"/></svg>}
                      {tech === 'MySQL' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M116.948 97.807c-1.115-1.427-2.588-2.194-4.425-2.194-1.837 0-3.31.767-4.425 2.194-1.115 1.427-1.673 3.31-1.673 5.65 0 2.34.558 4.223 1.673 5.65 1.115 1.427 2.588 2.194 4.425 2.194 1.837 0 3.31-.767 4.425-2.194 1.115-1.427 1.673-3.31 1.673-5.65 0-2.34-.558-4.223-1.673-5.65zm-11.2-17.6c-1.115-1.427-2.588-2.194-4.425-2.194-1.837 0-3.31.767-4.425 2.194-1.115 1.427-1.673 3.31-1.673 5.65 0 2.34.558 4.223 1.673 5.65 1.115 1.427 2.588 2.194 4.425 2.194 1.837 0 3.31-.767 4.425-2.194 1.115-1.427 1.673-3.31 1.673-5.65 0-2.34-.558-4.223-1.673-5.65zm-11.2-17.6c-1.115-1.427-2.588-2.194-4.425-2.194-1.837 0-3.31.767-4.425 2.194-1.115 1.427-1.673 3.31-1.673 5.65 0 2.34.558 4.223 1.673 5.65 1.115 1.427 2.588 2.194 4.425 2.194 1.837 0 3.31-.767 4.425-2.194 1.115-1.427 1.673-3.31 1.673-5.65 0-2.34-.558-4.223-1.673-5.65z" fill="#00618a"/><path d="M28.948 97.807c-1.115-1.427-2.588-2.194-4.425-2.194-1.837 0-3.31.767-4.425 2.194-1.115 1.427-1.673 3.31-1.673 5.65 0 2.34.558 4.223 1.673 5.65 1.115 1.427 2.588 2.194 4.425 2.194 1.837 0 3.31-.767 4.425-2.194 1.115-1.427 1.673-3.31 1.673-5.65 0-2.34-.558-4.223-1.673-5.65zm-11.2-17.6c-1.115-1.427-2.588-2.194-4.425-2.194-1.837 0-3.31.767-4.425 2.194-1.115 1.427-1.673 3.31-1.673 5.65 0 2.34.558 4.223 1.673 5.65 1.115 1.427 2.588 2.194 4.425 2.194 1.837 0 3.31-.767 4.425-2.194 1.115-1.427 1.673-3.31 1.673-5.65 0-2.34-.558-4.223-1.673-5.65zm-11.2-17.6c-1.115-1.427-2.588-2.194-4.425-2.194-1.837 0-3.31.767-4.425 2.194-1.115 1.427-1.673 3.31-1.673 5.65 0 2.34.558 4.223 1.673 5.65 1.115 1.427 2.588 2.194 4.425 2.194 1.837 0 3.31-.767 4.425-2.194 1.115-1.427 1.673-3.31 1.673-5.65 0-2.34-.558-4.223-1.673-5.65z" fill="#00618a"/></svg>}
                      {tech === 'GraphQL' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 112c-26.5 0-48-21.5-48-48S37.5 16 64 16s48 21.5 48 48-21.5 48-48 48z" fill="#e10098"/><path d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="#e10098"/></svg>}
                      {tech === 'Vue.js' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64 0L0 128h26.453L64 51.2 101.547 128H128L64 0z" fill="#4fc08d"/><path d="M64 0L26.453 128h37.094L64 0z" fill="#35495e"/></svg>}
                      {tech === 'Angular' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64 0L21.291 21.291v85.418L64 128l42.709-21.291V21.291L64 0zm-7.111 19.556h14.222l-7.111 42.667-7.111-42.667zm-14.222 7.111h35.556L64 106.667 42.667 26.667z" fill="#dd0031"/><path d="M64 19.556l-21.333 7.111L64 106.667V19.556z" fill="#c3002f"/></svg>}
                      {tech === 'Svelte' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 112c-26.5 0-48-21.5-48-48S37.5 16 64 16s48 21.5 48 48-21.5 48-48 48z" fill="#ff3e00"/><path d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="#ff3e00"/></svg>}
                      {tech === 'Firebase' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 112c-26.5 0-48-21.5-48-48S37.5 16 64 16s48 21.5 48 48-21.5 48-48 48z" fill="#ffca28"/><path d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="#ffca28"/></svg>}
                      {tech === 'Express' && <svg className="w-8 h-8" viewBox="0 0 128 128" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 112c-26.5 0-48-21.5-48-48S37.5 16 64 16s48 21.5 48 48-21.5 48-48 48z" fill="#404d59"/><path d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="#404d59"/></svg>}
                      : <span className="text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>


            {/* CTA Section */}
            {project.website && (
              <section className="py-20 text-center">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#564EDD] text-white rounded-lg hover:bg-[#3c359e] transition-colors"
                >
                  Visit Website
                  <ExternalLink className="ml-2" size={20} />
                </a>
              </section>
            )}
          </main>
        </div>
      </>
    );
  }