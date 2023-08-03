// When designing the landing page for your WiseWorks app, it's important to keep in mind the key features and benefits of the app, as well as the user personas and their goals. Here's a suggested layout for the landing page, with some suggested content, section names, and headings:

// 1. Header Section:
//    - Site logo or branding
//    - Navigation links to important sections of the app, such as user registration, login, project creation, and support pages
//    - User profile information and login button

// 2. Hero Section:
//    - Eye-catching headline that highlights the key benefits of the app, such as "Get Expert Feedback on Your Project Plans"
//    - Subheading that provides more details about the app's features and functionality
//    - Call-to-action button that encourages users to create an account or log in

// 3. Features Section:
//    - Overview of the app's key features, such as secure authentication, professional license verification, and two-sided marketplace
//    - Icons or images that represent each feature
//    - Brief descriptions of each feature

// 4. User Personas Section:
//    - Description of the user personas and their goals, such as "Meet John, a Mechanical Engineer Who Needs a Project Plan Review"
//    - Images or illustrations that represent each persona
//    - Brief descriptions of each persona and their motivations

// 5. How It Works Section:
//    - Step-by-step guide on how the app works, such as "Post Your Project Plan" and "Get Expert Feedback"
//    - Images or illustrations that represent each step
//    - Brief descriptions of each step

// 6. Testimonials Section:
//    - Quotes or testimonials from satisfied users, such as "WiseWorks helped me get the feedback I needed to improve my project plans"
//    - Images or illustrations that represent each user
//    - Brief descriptions of each user and their experience with the app

// 7. Call-to-Action Section:
//    - Encourages users to create an account or log in to start using the app
//    - Includes a button or form for creating an account or logging in

// 8. Footer Section:
//    - Copyright information
//    - Legal links to terms of service, privacy policy, and cookie policy
//    - Support/contact information for reaching out to the support team

// Remember to design the landing page in a visually appealing and user-friendly manner to provide a positive first impression of the app. You can use the suggested content and section names as a starting point and customize them based on your specific requirements and the desired user experience.


import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      <h1>LandingPage</h1>
      <p>
        Find me in <code>./web/src/pages/LandingPage/LandingPage.js</code>
      </p>
      <p>
        My default route is named <code>landing</code>, link to me with `
        <Link to={routes.landing()}>Landing</Link>`
      </p>
    </>
  )
}

export default LandingPage
