// An effective project creation page for WiseWorks should provide practicing engineers with a user-friendly interface to post their project plans. It should include relevant fields and options to capture all necessary information. Here are some elements that an effective project creation page could include:

// 1. Project Title: A field for the practicing engineer to enter a descriptive title for their project.

// 2. Project Description: A text area where the practicing engineer can provide a detailed description of the project, including its goals, requirements, and any specific information that retired engineers should know.

// 3. Budget: An input field where the practicing engineer can specify the budget allocated for the project review.

// 4. Relevant Documents: A file upload feature that allows the practicing engineer to attach any relevant documents or files related to the project. This can include PDFs, images, or other file formats.

// 5. Expertise Required: A selection or input field where the practicing engineer can specify the specific expertise or skills required from retired engineers for the project review.

// 6. Project Timeline: Input fields or date pickers to specify the start and end dates of the project, or any specific milestones or deadlines.

// 7. Submit Button: A button that the practicing engineer can click to submit the project for review.

// In terms of visual layout, it's important to keep the project creation page clean, organized, and easy to navigate. Here's a sample code snippet to help lay out the organization of the project creation page:

// This is just a basic structure to illustrate the layout of the project creation page. You can customize the design and styling according to your specific needs and branding guidelines. Additionally, you may want to include form validation and error handling to ensure that all required fields are filled out correctly before submitting the project.

// Citations:
// [1] https://consultport.com/for-companies/superior-skills-for-project-manager-success/
// [2] https://benjaminwann.com/blog/what-is-a-project-manager-and-what-do-they-do
// [3] https://www.justinmind.com/ui-design/dashboard-design-best-practices-ux
// [4] https://support.wix.com/en/article/velo-working-with-dashboard-pages
// [5] https://www.linkedin.com/pulse/10-biggest-mistakes-project-managers-make-keeps-them-st-clair-phd
// [6] https://tms-outsource.com/blog/posts/product-manager-vs-project-manager/
import { MetaTags } from '@redwoodjs/web'

const ProjectCreationPage = () => {
  return (
    <>
      <MetaTags title="Create Project" description="Create new project" />

      <div className="bg-white text-gray-900">
        <header className="bg-primary text-white p-4">
          <h1 className="text-4xl font-bold">Create a New Project</h1>
        </header>

        <section className="p-4">
          <form>
            <h2 className="text-2xl font-bold">Project Details</h2>

            <div className="mb-4">
              <label htmlFor="project-title" className="block font-bold mb-2">
                Project Title:
              </label>
              <input
                type="text"
                id="project-title"
                name="project-title"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="project-description" className="block font-bold mb-2">
                Project Description:
              </label>
              <textarea
                id="project-description"
                name="project-description"
                required
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="budget" className="block font-bold mb-2">
                Budget:
              </label>
              <input
                type="number"
                id="budget"
                name="budget"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="relevant-documents" className="block font-bold mb-2">
                Relevant Documents:
              </label>
              <input
                type="file"
                id="relevant-documents"
                name="relevant-documents"
                accept=".pdf,.doc,.docx"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expertise-required" className="block font-bold mb-2">
                Expertise Required:
              </label>
              <input
                type="text"
                id="expertise-required"
                name="expertise-required"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="project-timeline" className="block font-bold mb-2">
                Project Timeline:
              </label>
              <input
                type="date"
                id="start-date"
                name="start-date"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
              <input
                type="date"
                id="end-date"
                name="end-date"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <button
              className="bg-green-600 text-white py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ProjectCreationPage;