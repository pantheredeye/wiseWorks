// An effective reviewer dashboard page for WiseWorks should provide retired engineers with a clear overview of available projects for review. It should include relevant project information, filtering options, and actions that can be taken by the retired engineer. Here are some elements that an effective reviewer dashboard page could include:

// 1. Project List: Display a list of available projects for review. Each project should include key information such as project title, budget, expertise required, and project timeline.

// 2. Filtering and Sorting Options: Provide options for retired engineers to filter and sort the project list based on their expertise, interests, or other criteria. This helps them find projects that match their skills and preferences.

// 3. Project Details: Allow retired engineers to view more detailed information about a specific project. This can include the project description, relevant documents, and any additional information provided by the practicing engineer.

// 4. Apply for Review: Include a button or action that allows retired engineers to apply for reviewing a specific project. This initiates the process of reviewing the project and providing feedback.

// 5. Notifications: Display any important notifications or updates related to the retired engineer's review requests or ongoing projects. This can include new review requests, project status changes, or feedback received from practicing engineers.

// 6. Actions: Provide actions that can be taken by the retired engineer, such as accepting or declining review requests, downloading project documents, or contacting the practicing engineer for further clarification.

// In terms of visual layout, it's important to present the reviewer dashboard in a clean and organized manner. Here's a sample React code snippet to help lay out the organization of the reviewer dashboard page:


// This is a basic structure to illustrate the layout of the reviewer dashboard page using React. You can customize the design and styling according to your specific needs and UI framework. Additionally, you may want to handle edge cases, such as when there are no available projects for review or when there are no notifications to display.

// Citations:
// [1] https://www.justinmind.com/ui-design/dashboard-design-best-practices-ux
// [2] https://htmlburger.com/blog/user-dashboard/
// [3] https://support.wix.com/en/article/velo-working-with-dashboard-pages
// [4] https://baymard.com/ecommerce-design-examples/58-account-dashboard
// [5] https://news.ycombinator.com/item?id=20890682
// [6] https://www.egbc.ca/getmedia/ea43ed87-9b15-464c-bfdc-cd9ebd5a6e7b/EGBC-Documented-Field-Reviews-V2-0.pdf.aspx
import { MetaTags } from '@redwoodjs/web'
import ProjectsCell from 'src/components/ProjectsCell/ProjectsCell'

const ReviewerDashboardPage = () => {

  return (
    <>
      <MetaTags
        title="ReviewerDashboard"
        description="ReviewerDashboard page"
      />

      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-4xl font-bold">Reviewer Dashboard</h1>
      </header>

      <div className="p-4">

        <section className="project-list">
          <h2 className="text-2xl font-bold">Available Projects for Review</h2>
          <ProjectsCell />
        </section>

        <section className="filtering-options">
          {/* Display filtering and sorting options */}
        </section>

        <section className="project-details">
          {/* Display detailed information about a specific project */}
        </section>

        <section className="actions">
          {/* Display actions for retired engineers */}
          <button className="bg-green-600 text-white font-bold py-2 px-4 rounded">
            Apply for Review
          </button>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
           Download Project Documents
          </button>
          <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Contact Practicing Engineer
          </button>
        </section>

        <section className="notifications">
          {/* Display notifications for review requests or ongoing projects */}
        </section>

      </div>

      <footer className="bg-blue-600 text-white p-4">
        <p>&copy; {new Date().getFullYear()} WiseWorks. All rights reserved.</p>
      </footer>

    </>
  )
}

export default ReviewerDashboardPage