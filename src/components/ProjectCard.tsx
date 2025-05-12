type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:underline">Ver más</a>
    </div>
  );
}