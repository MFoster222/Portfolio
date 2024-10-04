import ProjectGrid from '@/components/ProjectGrid';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <ProjectGrid />
    </div>
  );
}