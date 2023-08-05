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

import { MetaTags } from '@redwoodjs/web';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <MetaTags title="WiseWorks" description="Connect practicing and retired engineers" />

      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-4xl font-bold">Get Expert Feedback on Your Project Plans</h1>
        <p className="text-lg">Connect with retired engineers to get the feedback you need to improve your project plans.</p>
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">Get Started</button>
      </header>

      <section className="p-4">
        <h2 className="text-2xl font-bold">Key Features</h2>
        <ul className="list-disc list-inside">
          <li>Secure authentication system to protect user data and ensure access control.</li>
          <li>Verification of professional engineering license before being able to post or review jobs, to ensure the quality of work and maintain the ethical standards required by their engineering ethics committee.</li>
          <li>A two-sided marketplace that connects practicing engineers and retired engineers, allowing practicing engineers to post jobs and retired engineers to review them.</li>
          <li>The ability for job posters to upload PDF files for review, and for reviewers to accept jobs and download PDFs.</li>
          <li>A rating system for both job posters and reviewers to provide feedback and establish trust in the community.</li>
        </ul>
      </section>

      <section className="p-4">
        <h2 className="text-2xl font-bold">User Personas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="John" />
            <h3 className="text-xl font-bold">Meet John, a Mechanical Engineer Who Needs a Project Plan Review</h3>
            <p>John needs a project plan review to ensure his firm is meeting all the necessary requirements and standards. He has a busy schedule and needs to find an efficient and reliable way to get project plans reviewed in a timely manner.</p>
          </div>
          <div className="text-center">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="Sarah" />
            <h3 className="text-xl font-bold">Meet Sarah, a Retired Civil Engineer Who Wants to Review Plans in Her Free Time</h3>
            <p>Sarah wants to use her expertise and experience to help firms meet the necessary standards and requirements for their projects, while also staying active and engaged in her field of expertise. She is looking for ways to stay engaged and active in her field.</p>
          </div>
          <div className="text-center">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="Alex" />
            <h3 className="text-xl font-bold">Meet Alex, an Application Administrator Responsible for Verifying Identities of Users</h3>
            <p>Alex wants to ensure the security and integrity of the platform, by verifying the identities of users and monitoring their activity on the application. He is focused on security and integrity.</p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <ol className="list-disc list-inside">
          <li>Practicing engineers post project plans, including relevant documents and other information, and set a budget for the project review.</li>
          <li>Retired engineers browse available projects and apply to review them, based on their expertise and experience.</li>
          <li>Once a review has been accepted, the retired engineer will have access to the project plans and any related documents, and can provide feedback and recommendations to the practicing engineer.</li>
          <li>The practicing engineer can then rate the retired engineer's performance, creating a feedback loop that ensures the quality of the reviews and helps build a strong community of retired engineers.</li>
        </ol>
      </section>
     <section className="p-4">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="John" />
            <blockquote className="italic">"WiseWorks helped me get the feedback I needed to improve my project plans."</blockquote>
            <cite className="block mt-1">- John, Mechanical Engineer</cite>
          </div>
          <div className="text-center">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="Sarah" />
            <blockquote className="italic">"I love being able to use my expertise to help firms meet the necessary standards and requirements for their projects."</blockquote>
            <cite className="block mt-1">- Sarah, Retired Civil Engineer</cite>
          </div>
          <div className="text-center">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="Alex" />
            <blockquote className="italic">"As an application administrator, I appreciate the focus on security and integrity in the platform."</blockquote>
            <cite className="block mt-1">- Alex, Application Administrator</cite>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-2xl font-bold">Get Started</h2>
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">Create an Account</button>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">Log In</button>
      </section>

      <footer className="bg-blue-600 text-white p-4">
        <p>&copy; {new Date().getFullYear()} WiseWorks. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a className="text-white" href="#">Terms of Service</a></li>
            <li><a className="text-white" href="#">Privacy Policy</a></li>
            <li><a className="text-white" href="#">Cookie Policy</a></li>
            <li><a className="text-white" href="#">Support</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default LandingPage;

