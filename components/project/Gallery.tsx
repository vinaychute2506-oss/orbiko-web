'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@/lib/api';

interface GalleryProps {
  images: GalleryItem[] | null;
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null || !images) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev! + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images]);

  if (!images || images.length === 0) return null;

  const currentItem = selectedIndex !== null ? images[selectedIndex] : null;
  const currentSrc = currentItem?.image?.node?.sourceUrl ?? '';

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((item, i) => {
          const src = item?.image?.node?.sourceUrl;
          if (!src) return null;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer bg-secondary"
              onClick={() => setSelectedIndex(i)}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={src}
                  alt={item?.image?.node?.altText || item.title || `Project image ${i + 1}`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-75"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {(item.title || item.caption) && (
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  {item.title && (
                    <p className="text-foreground font-heading font-medium text-sm mb-1">{item.title}</p>
                  )}
                  {item.caption && (
                    <p className="text-foreground/60 text-xs leading-relaxed">{item.caption}</p>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && currentSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors z-[10001] p-2"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground z-[10001]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
              }}
            >
              <ChevronLeft size={44} />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground z-[10001]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev! + 1) % images.length);
              }}
            >
              <ChevronRight size={44} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full mx-16 aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentSrc}
                alt={`Image ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
