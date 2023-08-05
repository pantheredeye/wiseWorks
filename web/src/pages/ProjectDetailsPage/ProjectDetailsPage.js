// An effective project details page for WiseWorks should provide comprehensive information about a specific project. It should include project details, relevant documents, and actions that can be taken by both practicing engineers and retired engineers. Here are some elements that an effective project details page could include:

// 1. Project Title: Display the title of the project to provide a clear identification.

// 2. Project Description: Provide a detailed description of the project, including its goals, requirements, and any specific information that retired engineers should know.

// 3. Project Documents: Display any relevant documents or files attached to the project, such as PDFs, images, or other file formats. This allows retired engineers to access and review the necessary materials.

// 4. Budget: Show the allocated budget for the project review. This helps retired engineers understand the financial aspect of the project.

// 5. Expertise Required: Display the specific expertise or skills required from retired engineers for the project review. This helps retired engineers assess their suitability for the project.

// 6. Project Timeline: Show the start and end dates of the project, or any specific milestones or deadlines. This helps retired engineers understand the project's timeline and availability requirements.

// 7. Actions: Provide actions that can be taken by both practicing engineers and retired engineers. This can include buttons or links to apply for the project review, download project documents, or contact the practicing engineer for further clarification.

// In terms of visual layout, it's important to present the project details in a clear and organized manner. Here's a sample React code snippet to help lay out the organization of the project details page:


// This is a basic structure to illustrate the layout of the project details page using React. You can customize the design and styling according to your specific needs and UI framework. Additionally, you may want to handle edge cases, such as when there are no project documents or when the project timeline is not specified.

// Citations:
// [1] https://opentextbc.ca/projectmanagement/chapter/chapter-4-framework-for-project-management-project-management/
// [2] https://www.indeed.com/hire/job-description/project-engineer
// [3] https://benjaminwann.com/blog/what-is-a-project-manager-and-what-do-they-do
// [4] https://www.justinmind.com/ui-design/dashboard-design-best-practices-ux
// [5] https://consultport.com/for-companies/superior-skills-for-project-manager-success/
// [6] https://www.dot.nd.gov/divisions/maintenance/docs/overviewofsea.pdf
import { MetaTags } from '@redwoodjs/web'
import ProjectDetailCell from 'src/components/ProjectDetailCell/ProjectDetailCell'

const ProjectDetailsPage = () => {
  return (
    <>
      <MetaTags title="ProjectDetails" description="ProjectDetails page" />

      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-4xl font-bold">Project Details</h1>
      </header>

      <div className="p-4">
        <ProjectDetailCell id={42} />

        <div className="project-actions">
          {/* Display actions for practicing engineers and retired engineers */}
          <button className="bg-green-600 text-white font-bold py-2 px-4 rounded">
            Apply for Review
          </button>

          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Download Project Documents
          </button>

          <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Contact Practicing Engineer
          </button>
        </div>
      </div>

      <footer className="bg-blue-600 text-white p-4">
        <p>&copy; {new Date().getFullYear()} WiseWorks. All rights reserved.</p>
      </footer>
    </>
  )
}

export default ProjectDetailsPage