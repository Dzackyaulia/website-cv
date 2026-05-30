export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Website portfolio modern dengan Next.js, Tailwind CSS, dan deployment di Vercel. Menampilkan profil, pengalaman, dan kontak.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Data Processing with Python',
      description: 'Aplikasi pemrosesan data menggunakan Python untuk analisis dataset dan visualisasi hasil.',
      tech: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Java Application Development',
      description: 'Aplikasi desktop menggunakan Java dengan antarmuka user yang intuitif dan fitur lengkap.',
      tech: ['Java', 'Swing', 'MySQL', 'Database'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="gradient-text">Proyek</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-all card-hover flex flex-col"
          >
            <h3 className="text-lg font-semibold text-accent mb-3">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
            
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-2">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                className="flex-1 text-center py-2 bg-accent/20 hover:bg-accent text-accent hover:text-white rounded transition-all text-sm font-medium"
              >
                Github
              </a>
              <a
                href={project.demo}
                className="flex-1 text-center py-2 bg-accent hover:bg-accent/80 text-white rounded transition-all text-sm font-medium"
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
