"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

// Utility function to generate slugs
const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    client: "TechCorp Solutions",
    category: "Development",
    tags: ["E-commerce", "React", "Node.js"],
    image: "/placeholder-project.jpg",
    description: "Explore our diverse range of offerings, from cutting-edge web development to comprehensive digital marketing solutions.",
    slug: "e-commerce-platform"
  },
  {
    id: 2,
    title: "Architecture Portfolio",
    client: "Bombay Architects",
    category: "Design",
    tags: ["Website", "Design", "Portfolio"],
    image: "/placeholder-project.jpg",
    description: "A stunning portfolio website showcasing architectural excellence with clean, modern design.",
    slug: "architecture-portfolio"
  },
  {
    id: 3,
    title: "Book Landing Page",
    client: "Atomic Habits",
    category: "Design",
    tags: ["Landing Page", "Design", "Development"],
    image: "/placeholder-project.jpg",
    description: "A high-converting landing page for the bestselling book with engaging copy and compelling visuals.",
    slug: "book-landing-page"
  },
  {
    id: 4,
    title: "Author Website",
    client: "Ikigai",
    category: "Development",
    tags: ["Website", "Content Writing", "SEO"],
    image: "/placeholder-project.jpg",
    description: "A comprehensive author website with blog integration and SEO-optimized content strategy.",
    slug: "author-website"
  },
  {
    id: 5,
    title: "Digital Product",
    client: "Dopamine Detox",
    category: "Development",
    tags: ["Digital Product", "Marketing", "Development"],
    image: "/placeholder-project.jpg",
    description: "A complete digital product ecosystem with course platform and community features.",
    slug: "digital-product"
  },
  {
    id: 6,
    title: "Brand Identity",
    client: "Tech Startup",
    category: "Design",
    tags: ["Branding", "Design", "Logo"],
    image: "/placeholder-project.jpg",
    description: "Complete brand identity design for a tech startup including logo, colors, and guidelines.",
    slug: "brand-identity"
  }
];

const categories = ["All", "Design", "Development"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(project => project.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <section className="bg-white">
      <div className="w-full mx-auto">
        <div className='bg-gradient-to-b from-[#0A0822] to-[#221F4D] pt-8 relative z-10 overflow-hidden'>
        <div className='absolute top-2 left-2 -z-10'>

            <svg width="90" height="107" viewBox="0 0 179 214" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="56.3906" y="25.8828" width="100" height="100" rx="10" transform="rotate(-15 56.3906 25.8828)" fill="#35327D"/>
<rect x="72.5625" y="163.469" width="54.9798" height="51.8444" rx="10" transform="rotate(-15 72.5625 163.469)" fill="#35327D"/>
<rect y="127.617" width="40.0895" height="41.0212" rx="10" transform="rotate(-15 0 127.617)" fill="#35327D"/>
</svg>
        </div>
        <div className='absolute top-30 -right-10 -z-10 rotate-19 overflow-hidden'>

            <svg width="90" height="107" viewBox="0 0 179 214" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="56.3906" y="25.8828" width="100" height="100" rx="10" transform="rotate(-15 56.3906 25.8828)" fill="#35327D"/>
<rect x="72.5625" y="163.469" width="54.9798" height="51.8444" rx="10" transform="rotate(-15 72.5625 163.469)" fill="#35327D"/>
<rect y="127.617" width="40.0895" height="41.0212" rx="10" transform="rotate(-15 0 127.617)" fill="#35327D"/>
</svg>
        </div>
        {/* Header Section */}
        <div className="text-center mb-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Projects
          </h4>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-4">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3c359e] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#3c359e] text-white shadow-lg shadow-[#3c359e]/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 block"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.client}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-gray-500">{project.client}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{project.title}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Read More Button */}
                <span className="flex items-center text-[#3c359e] font-medium text-sm hover:text-[#3c359e]/80 transition-colors">
                  Read More
                  <ArrowRight className="ml-2" size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}