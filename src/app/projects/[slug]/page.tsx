import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="bg-[#F6F1E9] min-h-screen">
      {/* Back */}
      <div className="px-8 md:px-16 pt-32 pb-8">
        <Link
          href="/#projects"
          className="font-[family-name:var(--font-jost)] text-[11px] tracking-[0.22em] uppercase text-[#5C5751] hover:text-[#B08D57] transition-colors flex items-center gap-2"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Cover image */}
      <div className="w-full h-[55vh] bg-gradient-to-br from-[#D9CEBC] to-[#B5A688] flex items-center justify-center">
        <div className="relative w-full h-[55vh]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Main info */}
          <div className="md:col-span-2">
            <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#B08D57] mb-3">
              {project.category} · {project.year}
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-[#1A1A1A] mb-8">
              {project.title}
            </h1>
            <p className="font-[family-name:var(--font-jost)] text-[15px] font-light leading-[1.9] text-[#5C5751] mb-8">
              {project.fullDesc}
            </p>

            {/* Image gallery */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`relative aspect-[4/3] ${i === 0 ? "col-span-2" : ""}`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar meta */}
          <div className="flex flex-col gap-8">
            {[
              { label: "Role", value: project.role },
              { label: "Location", value: project.location },
              { label: "Year", value: project.year },
              ...(project.area ? [{ label: "Area", value: project.area }] : []),
            ].map((item) => (
              <div
                key={item.label}
                className="border-b border-[#B08D57]/15 pb-6"
              >
                <div className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.22em] uppercase text-[#B08D57] mb-1">
                  {item.label}
                </div>
                <div className="font-[family-name:var(--font-cormorant)] text-lg text-[#1A1A1A]">
                  {item.value}
                </div>
              </div>
            ))}

            <div>
              <div className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.22em] uppercase text-[#B08D57] mb-3">
                Services
              </div>
              <div className="flex flex-col gap-2">
                {project.services.map((s) => (
                  <div
                    key={s}
                    className="font-[family-name:var(--font-jost)] text-[13px] font-light text-[#5C5751] flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B08D57] flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Back button */}
            <Link
              href="/#projects"
              className="font-[family-name:var(--font-jost)] text-[11px] tracking-[0.22em] uppercase bg-[#1A1A1A] text-[#F6F1E9] px-8 py-4 text-center hover:bg-[#B08D57] transition-colors duration-300 mt-4"
            >
              ← All Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
