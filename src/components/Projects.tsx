import ProjectList from "./ProjectList";
const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' },
    // Add more projects as needed
];

const Projects: React.FC = () => {
    return (
        <div>
            <ProjectList projects={projects} />
            {/* Other content */}
        </div>
    );
};

export default Projects;
