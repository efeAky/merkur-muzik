import { courses } from "@/data/courses";

interface CoursesSectionProps {}

export function CoursesSection({}: CoursesSectionProps) {
  return (
    <section id="courses" className="relative scroll-mt-16 bg-background py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div>
            <span className="text-xs uppercase tracking-widest text-secondary">
              Eğitim Programlarımız
            </span>
            <h2 className="mt-4 font-display text-4xl text-on-background md:text-5xl">
              Enstrümanların Büyülü Dünyası
            </h2>
          </div>
        </div>

        {/* 1. md:grid-cols-4: Maintains your 4-column row.
          2. items-stretch: Ensures all columns in a row have the same height. 
        */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 items-stretch">
          {courses.map((course) => (
            /* Added flex flex-col to enable internal alignment */
            <div key={course.id} className="flex flex-col space-y-4">
              <div className="h-64 flex-shrink-0 overflow-hidden rounded-sm border border-outline-variant/30 bg-surface-container-lowest">
                <img
                  className="h-full w-full object-cover"
                  alt={course.imageAlt}
                  src={course.imageSrc}
                />
              </div>
              {/* Added flex-grow so the box stretches to fill the height of the card */}
              <div className="flex flex-grow flex-col border border-secondary/20 bg-surface-container-high p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-secondary" />
                  <span className="text-xs uppercase tracking-[0.2em] text-secondary">
                    {course.category}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl text-on-background">
                  {course.title}
                </h3>
                {/* flex-grow pushes the bottom of the description area down */}
                <p className="text-sm text-on-surface-variant flex-grow">
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