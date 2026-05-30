export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Website portfolio modern dengan Next.js, Tailwind CSS, dan deployment di Vercel. Menampilkan profil, pengalaman, pendidikan, dan kontak.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/Dzackyaulia/website-cv',
      demo: '#',
    },
    {
      title: 'Kecerdasan Artifisial',
      description: 'Implementasi konsep artificial intelligence dan machine learning untuk menyelesaikan berbagai permasalahan kompleks.',
      tech: ['Python', 'Machine Learning', 'AI', 'Jupyter Notebook'],
      github: 'https://github.com/Dzackyaulia/Kecerdasan-artifisial',
      demo: '#',
    },
    {
      title: 'PBO Project',
      description: 'Proyek Pemrograman Berorientasi Objek yang mendemonstrasikan konsep OOP seperti inheritance, polymorphism, dan encapsulation.',
      tech: ['Java', 'OOP', 'Object-Oriented', 'Design Patterns'],
      github: 'https://github.com/Dzackyaulia/pbo',
      demo: '#',
    },
    {
      title: 'IMPAL Project',
      description: 'Proyek implementasi dengan fokus pada pengembangan sistem dan best practices dalam software engineering.',
      tech: ['Java', 'Database', 'OOP', 'Development'],
      github: 'https://github.com/Dzackyaulia/impal',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
      <div className="animate-slide-in-up mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Proyek</span>
        </h2>
        <p className="text-gray-400 text-lg mb-6 animate-fade-in-up animate-delay-100">Berikut adalah beberapa project yang telah saya kerjakan</p>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-underline-expand"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 150}ms` }}
            className="group h-full bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 flex flex-col animate-slide-in-up hover:scale-105 hover-lift"
          >
            <h3 className="text-xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors line-clamp-2 animate-fade-in-up">{project.title}</h3>
            <p className="text-gray-300 group-hover:text-gray-200 text-sm mb-5 flex-1 leading-relaxed animate-fade-in-up animate-delay-100">{project.description}</p>
            
            <div className="mb-6 pb-6 border-b border-slate-600/30 animate-fade-in-up animate-delay-200">
              <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">Teknologi</p>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    style={{ animationDelay: `${(index * 150) + (i * 50)}ms` }}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-blue-500/25 to-purple-500/25 text-blue-200 text-xs rounded-lg font-medium border border-blue-400/30 group-hover:border-blue-400/60 group-hover:bg-gradient-to-r group-hover:from-blue-500/35 group-hover:to-purple-500/35 transition-all animate-fade-in-scale hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                className="flex-1 text-center py-2.5 bg-slate-600/40 hover:bg-blue-600 text-gray-200 hover:text-white rounded-lg transition-all duration-300 text-sm font-semibold border border-slate-500/30 hover:border-blue-500/50 hover-lift-sm"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                className="flex-1 text-center py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/40 text-white rounded-lg transition-all duration-300 text-sm font-semibold hover-lift-sm"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
