// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/user-profile" page={UserProfilePage} name="userProfile" />
      <Route path="/admin-dashboard" page={AdminDashboardPage} name="adminDashboard" />
      <Route path="/user-registration" page={UserRegistrationPage} name="userRegistration" />
      <Route path="/support" page={SupportPage} name="support" />
      <Route path="/feedback" page={FeedbackPage} name="feedback" />
      <Route path="/project-review" page={ProjectReviewPage} name="projectReview" />
      <Route path="/reviewer-dashboard" page={ReviewerDashboardPage} name="reviewerDashboard" />
      <Route path="/project-details" page={ProjectDetailsPage} name="projectDetails" />
      <Route path="/project-creation" page={ProjectCreationPage} name="projectCreation" />
      <Route path="/user-dashboard" page={UserDashboardPage} name="userDashboard" />
      <Route path="/landing" page={LandingPage} name="landing" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
