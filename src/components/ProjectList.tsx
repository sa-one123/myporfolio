// components/ProjectList.tsx
import React from 'react';

interface Project {
    title: string;
    description: string;
    // Add more fields as per your project data structure
}

interface ProjectListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-4">Projects</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <li key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                            {/* Add more project details */}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectList;
