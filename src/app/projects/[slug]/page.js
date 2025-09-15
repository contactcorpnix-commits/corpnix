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
    solution: <p>Implemented a <span className="font-bold">mobile-first</span> responsive design with optimized performance, integrated payment gateways, and created an intuitive user interface that drives conversions.</p>,
    technologies: ['Next.js', 'React', 'TailwindCSS', 'PostgreSQL'],
    tags: ['e-commerce', 'responsive', 'performance', 'user-experience'],
    efficiency: <div className='flex flex-wrap flex-col justify-left gap-3 lg:col-span-6 w-full'>
      <div className='flex flex-col justify-left gap-3'>
        <h3 className='text-2xl font-bold'>Efficiency</h3>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h3 className='text-2xl font-bold'>Enhanced Compliance</h3>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>    
                  <h3 className='text-2xl font-bold'>Scalability</h3>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <h3 className='text-2xl font-bold'>Cost Reduction</h3>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <h3 className='text-2xl font-bold'>Improvement in Efficiency</h3>
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>,
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
      <div className="py-20 min-h-screen bg-white flex items-center justify-center">
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
                  <div className="text-lg text-gray-700 leading-relaxed">
                      {project.overview || project.description || "Project overview not available."}
                    </div>
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
                    <div className="text-lg text-gray-200 leading-relaxed">
                      {project.challenge}
                    </div>
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
                    <div className="text-lg text-gray-700 leading-relaxed">
                      {project.solution}
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* Technologies results */}
            <section className="py-16">
              <div className="px-4 grid grid-cols-1 lg:grid-cols-10 gap-16 ">
                <h2 className="text-center text-3xl font-bold text-[#564EDD] mb-8 lg:col-span-4">Results</h2>
                <div className="flex flex-wrap flex-col justify-left gap-3 lg:col-span-6 w-full">
                    {project.efficiency}
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
                  className="inline-flex items-center px-8 py-4 bg-red-500 text-white rounded-lg hover:bg-[#3c359e] transition-colors"
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