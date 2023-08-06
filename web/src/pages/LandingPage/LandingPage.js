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

      <header className="bg-primary text-white p-4">
        <h1 className="text-4xl font-bold">Get Expert Feedback on Your Project Plans</h1>
        <p className="text-lg">Connect with retired engineers to get the feedback you need to improve your project plans.</p>
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">Get Started</button>
      </header>


      <section className="p-4">

        <h2 className="text-3xl font-bold">Key Features</h2>

        <div className="grid grid-cols-3 gap-4">

          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg">Secure Authentication</p>
          </div>

          <div className="text-center">
            <img src="checklist-icon.svg" />
            <p>License verification</p>
          </div>
          <div className="text-center">
            <img src="connect-icon.svg" />
            <p>Connect engineers</p>
          </div>
          <div className="text-center">
            <img src="upload-icon.svg" />
            <p>Upload documents</p>
          </div>
          <div className="text-center">
            <img src="download-icon.svg" />
            <p>Download documents</p>
          </div>
          <div className="text-center">
            <img src="rating-icon.svg" />
            <p>Rating system</p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-2xl font-bold">User Personas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="John" />
            <h3 className="text-xl font-bold">Meet John, a Mechanical Engineer Who Needs a Project Plan Review</h3>
            <p>John needs a project plan review to ensure his firm is meeting all the necessary requirements and standards. He has a busy schedule and needs to find an efficient and reliable way to get project plans reviewed in a timely manner.</p>

          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="Sarah" />
            <h3 className="text-xl font-bold">Meet Sarah, a Retired Civil Engineer Who Wants to Review Plans in Her Free Time</h3>
            <p>Sarah wants to use her expertise and experience to help firms meet the necessary standards and requirements for their projects, while also staying active and engaged in her field of expertise. She is looking for ways to stay engaged and active in her field.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="Alex" />
            <h3 className="text-xl font-bold">Meet Alex, an Application Administrator Responsible for Verifying Identities of Users</h3>
            <p>Alex wants to ensure the security and integrity of the platform, by verifying the identities of users and monitoring their activity on the application. He is focused on security and integrity.</p>
          </div>
        </div>
      </section>

      <section className="p-4">

        <h2 className="text-3xl font-bold">How It Works</h2>

        <div className="flex justify-between flex-col md:flex-row md:gap-8">

          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#06b6d4" class="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 012.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            <h4 className="text-lg font-bold">Post a Project</h4>
            <p className="text-gray-700">Describe project and set budget</p>
          </div>

          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#06b6d4" class="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            <h4 className="text-lg font-bold">Get Matched</h4>
            <p className="text-gray-700">Experts apply to your project</p>
          </div>

          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#06b6d4" class="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <h4 className="text-lg font-bold">Get Feedback</h4>
            <p className="text-gray-700">Receive feedback from experts</p>
          </div>
        </div>

      </section>

      <section className="p-4">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="John" />
            <blockquote className="italic">"WiseWorks helped me get the feedback I needed to improve my project plans."</blockquote>
            <cite className="block mt-1">- John, Mechanical Engineer</cite>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="Sarah" />
            <blockquote className="italic">"I love being able to use my expertise to help firms meet the necessary standards and requirements for their projects."</blockquote>
            <cite className="block mt-1">- Sarah, Retired Civil Engineer</cite>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img className="w-32 h-32 mx-auto mb-2 rounded-full" src="https://via.placeholder.com/150" alt="Alex" />
            <blockquote className="italic">"As an application administrator, I appreciate the focus on security and integrity in the platform."</blockquote>
            <cite className="block mt-1">- Alex, Application Administrator</cite>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-2xl font-bold">Get Started</h2>
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">Create an Account</button>
        <button className="bg-primary text-white font-bold py-2 px-4 rounded">Log In</button>
      </section>
    </div>
  );
}

export default LandingPage;

