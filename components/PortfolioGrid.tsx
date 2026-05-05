"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PortfolioGridProps {
  projects: any;
  selectedFilter?: string | null;
}

export function PortfolioGrid({ projects, selectedFilter }: PortfolioGridProps) {
  const router = useRouter();
  
  // Defensive data access
  const projectList = projects?.nodes || (Array.isArray(projects) ? projects : []);

  return (
    <div className="py-12">
      <AnimatePresence mode="wait">
        {!projectList || projectList.length === 0 ? (
          <motion.div 
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-24 text-white/40"
          >
            <p className="text-lg mb-2 tracking-widest uppercase text-xs">No Projects Found</p>
            <p className="text-[10px] uppercase tracking-[0.2em]">Try a different filter or check back later.</p>
          </motion.div>
        ) : (
          <motion.div
            key={selectedFilter || "all"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {projectList.map((project: any, i: number) => {
              const title = project.title || "";
              const slug = project.slug || "";
              const image = project.featuredImage?.node?.sourceUrl || project.featuredImage || null;
              const typeName = project.serviceTypes?.nodes?.[0]?.name || "Architecture";
              const typeSlug = project.serviceTypes?.nodes?.[0]?.slug;

              return (
                <motion.div
                  key={slug || i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="group"
                >
                  <div 
                    className="block relative aspect-[4/5] overflow-hidden bg-[#111] rounded-sm cursor-pointer"
                    onClick={() => {
                      // Only redirect to filter if clicking the label specifically? 
                      // Actually, let's keep the user's logic but make it feel premium.
                      router.push(`/portfolio/${slug}`);
                    }}
                  >
                    {image ? (
                      <motion.img
                        src={image}
                        alt={title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-900" />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                      <div className="mb-4 overflow-hidden">
                        <motion.button
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (typeSlug) router.push(`/portfolio?type=${typeSlug}`);
                          }}
                          className="text-yellow-500 text-[10px] uppercase tracking-[0.25em] font-bold flex items-center gap-2"
                        >
                          {typeName}
                        </motion.button>
                      </div>
                      <Link href={`/portfolio/${slug}`} onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-white font-heading font-medium text-2xl md:text-3xl group-hover:text-yellow-500 transition-colors duration-500 leading-tight">
                          {title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
