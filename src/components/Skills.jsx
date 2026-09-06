import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  { 
    title: 'Frontend Engineering', 
    desc: 'Crafting responsive and interactive user interfaces using React, JavaScript, HTML5, CSS3, and Tailwind CSS.', 
    tag: 'UI / INTERACTION',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'] 
  },
  { 
    title: 'Backend & Databases', 
    desc: 'Building secure REST APIs, authentication flows, server-side applications, and high-performance database architectures.', 
    tag: 'ARCHITECTURE',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'DQL'] 
  },
  { 
    title: 'AI & Machine Learning', 
    desc: 'Developing intelligent applications leveraging NLP, generative AI workflows, computer vision, and LLM systems.', 
    tag: 'INTELLIGENCE',
    skills: ['NLP', 'Generative AI', 'Computer Vision', 'LLMs', 'AWS AI'] 
  },
  { 
    title: 'Cloud & DevOps', 
    desc: 'Deploying and scaling production-grade applications using Docker containers, GitHub Actions, and CI/CD pipelines.', 
    tag: 'INFRASTRUCTURE',
    skills: ['Docker', 'GitHub', 'CI/CD Pipelines', 'Render', 'Docker Hub'] 
  },
  { 
    title: 'Algorithmic Problem Solving', 
    desc: 'Optimizing data structures and solving complex algorithmic challenges across competitive programming platforms.', 
    tag: 'COMPETITIVE',
    skills: ['Data Structures', 'Algorithms', 'LeetCode', 'CodeChef', 'GFG'] 
  },
  { 
    title: 'Tools & Ecosystem', 
    desc: 'Equipped with industry-grade instruments for version control, productivity extensions, and workflow management.', 
    tag: 'PRODUCTIVITY',
    skills: ['Git', 'Chrome APIs', 'Adobe Express', 'Google Cloud', 'VS Code'] 
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRefs = useRef([]);
  const textRefs = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        cardsRef.current.forEach((card) => {
          if (card) card.style.top = "";
        });

        const updateCards = (p) => {
          cardsRef.current.forEach((card, i) => {
            if (!card) return;
            const offset = i - p;
            
            const radius = 1800; 
            const angleSpread = 18; 
            
            const angle = offset * angleSpread;
            const rad = angle * Math.PI / 180;
            
            const x = Math.sin(rad) * radius;
            const y = radius - (Math.cos(rad) * radius); 
            const z = -Math.abs(offset) * 50; 
            
            const scale = Math.max(0.4, 1 - Math.abs(offset) * 0.15);
            const rotateZ = angle; 
            
            const opacity = Math.max(0.1, 1 - Math.abs(offset) * 0.3);
            const zIndex = Math.round(100 - Math.abs(offset) * 10);

            gsap.set(card, {
              x: x,
              y: y,
              z: z,
              scale: scale,
              rotationZ: rotateZ,
              rotationY: 0, 
              opacity: opacity,
              zIndex: zIndex,
            });
          });

          bgRefs.current.forEach((bg, i) => {
              if (!bg) return;
              const itemOpacity = Math.max(0, 1 - Math.abs(i - p));
              gsap.set(bg, { opacity: itemOpacity });
              
              if (textRefs.current[i]) {
                  gsap.set(textRefs.current[i], { opacity: itemOpacity });
              }
          });
        };

        updateCards(0);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%", 
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress * (skillCategories.length - 1);
            updateCards(p);
          }
        });
      });

      mm.add("(max-width: 768px)", () => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          gsap.set(card, { clearProps: "x,y,z,rotation,scale,opacity" });

          // Sticky stack + slight hide as the next card scrolls over it (same technique as Expertise)
          card.style.top = `${90 + index * 16}px`;
          gsap.set(card, { zIndex: index + 1 });

          if (index === cardsRef.current.length - 1) return; // keep the last card fully focused

          gsap.to(card, {
            scale: 0.94 - index * 0.015,
            y: -12 - index * 6,
            filter: "blur(6px)",
            opacity: 0.4,
            scrollTrigger: {
              trigger: card,
              start: `top ${90 + index * 16}px`,
              end: "bottom top",
              scrub: true,
            }
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills"
      ref={sectionRef} 
      className="relative w-full h-auto md:h-screen bg-[#0b0b0b] text-white overflow-hidden flex flex-col md:items-center md:justify-center md:[perspective:1000px] select-none"
    >
      {/* Dynamic Netflix Dark Background Vignettes (desktop cinematic carousel only) */}
      {skillCategories.map((_, i) => (
        <div
          key={i}
          ref={el => bgRefs.current[i] = el}
          className="hidden md:block absolute inset-0 z-0 pointer-events-none opacity-0 bg-gradient-to-tr from-black via-[#140203] to-black"
        />
      ))}

      {/* Massive Background Typography (desktop cinematic carousel only) */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center z-0 pointer-events-none">
        {skillCategories.map((_, i) => (
          <h1 
            key={`text-${i}`}
            ref={el => textRefs.current[i] = el}
            className="absolute text-[22vw] md:text-[18vw] font-black uppercase text-transparent leading-none tracking-tighter mix-blend-overlay"
            style={{ 
               WebkitTextStroke: `2px ${i % 2 === 0 ? 'rgba(229,9,20,0.3)' : 'rgba(255,255,255,0.15)'}`,
               opacity: 0 
            }}
          >
            SKILLS
          </h1>
        ))}
      </div>

      {/* Mobile Section Title */}
      <div className="md:hidden w-full flex flex-col items-start justify-center text-left px-6 pt-16 pb-6 relative z-10">
        <h2
          className="font-black uppercase tracking-tight leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 9vw, 3rem)' }}
        >
          <span className="text-white">MY TOOLKIT</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_25px_rgba(229,9,20,0.35)]">
            SKILLS
          </span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full h-full flex flex-col gap-6 px-6 pb-16 md:items-center md:justify-center md:gap-0 md:px-0 md:pb-0 z-10 md:[transform-style:preserve-3d] md:overflow-visible"
      >
        {skillCategories.map((category, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="sticky md:absolute w-full md:w-[440px] min-h-[320px] h-auto md:h-[540px] rounded-[32px] p-8 md:p-10 bg-[#141414]/95 backdrop-blur-2xl border border-white/15 flex flex-col justify-between overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.9)] hover:border-red-600/80 transition-colors duration-500"
          >
            {/* Inner Red Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />
            
            {/* Top Card Metadata */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-3 py-1 rounded border border-red-600/20">
                {category.tag}
              </span>
              <span className="text-xs font-mono text-white/40">
                [ 0{i + 1} / 06 ]
              </span>
            </div>

            {/* Middle Title & Description */}
            <div className="space-y-4 relative z-10 my-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                {category.desc}
              </p>
            </div>

            {/* Bottom Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 relative z-10">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-xs font-mono text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded group-hover:border-red-600/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom Glow Accent */}
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#E50914] transition-all" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;