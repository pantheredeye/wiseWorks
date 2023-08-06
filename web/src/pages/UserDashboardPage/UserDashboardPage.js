// User Profile: Display the user's name, occupation, and relevant information. This can help personalize the dashboard and make it feel more user-centric.
// Project Overview: Provide a summary of the user's posted projects and their current status. This can include information such as project title, review status, and any pending actions.
// Reviewer Overview: Show a list of available projects for retired engineers to review. This can include project details, such as project title, budget, and required expertise. Retired engineers can easily browse and apply for projects they are interested in.
// Notifications: Display any important notifications or updates related to the user's projects or reviews. This can include new review requests, feedback received, or project status changes.
// Actions and Navigation: Provide clear and intuitive navigation options for users to perform common actions. This can include buttons or links to create a new project, browse available projects, view project details, and access the feedback form.
// Ratings and Feedback: Show the user's ratings and feedback received from practicing engineers. This can help establish trust and reputation within the community.
// Support and Help: Include a section with contact information for the support team and links to FAQs or knowledge base resources. This can assist users in getting assistance or finding answers to their questions.
import { MetaTags } from '@redwoodjs/web'
import ProjectsCell from 'src/components/ProjectsCell/ProjectsCell'

const UserDashboardPage = () => {

  return (
    <>
      <MetaTags title="UserDashboard" description="UserDashboard page" />

      <header className="bg-primary text-white p-4">
        <h1 className="text-4xl font-bold">Welcome, John!</h1>
      </header>

      <div className="p-4">

        <section className="project-overview">
          <h2 className="text-2xl font-bold">Your Projects</h2>
          {/* Display project cards or list here */}
        </section>

        <section className="reviewer-overview">
          <h2 className="text-2xl font-bold">Available Projects for Review</h2>
          <ProjectsCell />
        </section>

        <section className="notifications">
          <h2 className="text-2xl font-bold">Notifications</h2>
        </section>

        <section className="actions">
          <h2 className="text-2xl font-bold">Actions</h2>
          {/* Display buttons or links for common actions */}
        </section>

        <section className="payment-details">
          <h2 className="text-2xl font-bold">Your Payment Details</h2>
        </section>

        <section className="ratings-feedback">
          <h2 className="text-2xl font-bold">Your Ratings and Feedback</h2>
        </section>

        <section className="support">
          <h2 className="text-2xl font-bold">Support and Help</h2>
        </section>

      </div>

    </>
  )
}

export default UserDashboardPage