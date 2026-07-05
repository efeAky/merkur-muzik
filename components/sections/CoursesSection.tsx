import Image from "next/image";
import { courses } from "@/data/courses";

export function CoursesSection() {
  return (
    <section id="courses" className="relative scroll-mt-16 bg-white pb-32 pt-8">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <span className="text-xs uppercase tracking-widest text-orange-500">
              Eğitim Programlarımız
            </span>
            <h2 className="mt-4 font-display text-4xl text-black lg:text-5xl">
              Enstrümanların Büyülü Dünyası
            </h2>
          </div>
        </div>

        {/* 1 column on phone, 2 from 640px (small tablets/phablets)
          through tablet, 4 once the viewport reaches 1220px. items-stretch
          ensures all columns in a row have the same height.
        */}
        <div className="grid grid-cols-1 gap-8 min-[640px]:grid-cols-2 min-[1220px]:grid-cols-4 items-stretch">
          {courses.map((course) => (
            /* Added flex flex-col to enable internal alignment */
            <div
              key={course.id}
              className="flex flex-col overflow-hidden rounded-sm border border-black/10 bg-white"
            >
              <div className="relative h-64 shrink-0">
                <Image
                  fill
                  className="object-cover"
                  sizes="(min-width: 1220px) 25vw, (min-width: 640px) 50vw, 100vw"
                  alt={course.imageAlt}
                  src={course.imageSrc}
                />
              </div>
              {/* Added flex-grow so the box stretches to fill the height of the card */}
              <div className="flex grow flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-orange-500" />
                  <span className="text-xs uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                    {course.category}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl text-black sm:text-2xl">
                  {course.title}
                </h3>
                {/* flex-grow pushes the bottom of the description area down */}
                <p className="text-sm text-black/70 grow sm:text-base">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
