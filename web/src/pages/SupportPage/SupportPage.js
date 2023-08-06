// An effective support page for WiseWorks should provide users with access to resources and tools that can help them find answers to their questions and resolve issues. It should include elements that facilitate self-service support and provide users with a way to contact the support team. Here are some elements that an effective support page could include:

// 1. Knowledge Base: Provide a collection of useful information, documentation, how-tos, and answers to frequently asked questions. This makes it easy for users to find answers to their problems without needing to contact the support team.

// 2. Contact Information: Display contact information for the support team, including email, phone number, and chat support. This allows users to reach out to the support team for assistance.

// 3. Social Media Support: Include information on how to get support through social media platforms such as Facebook, Instagram, and Twitter. This allows users to get support through their preferred channels.

// 4. Bug Reporting: Provide a way for users to report bugs or issues with the platform. This helps the support team identify and resolve issues quickly.

// In terms of visual layout, it's important to present the support page in a clean and organized manner. Here's a sample React code snippet to help lay out the organization of the support page:


// This is a basic structure to illustrate the layout of the support page using React. You can customize the design and styling according to your specific needs and UI framework. Additionally, you may want to handle edge cases, such as when there are no articles in the knowledge base or when the bug reporting form is not filled out correctly.

// Citations:
// [1] https://youtube.com/watch?v=yKV1IGahXqA
// [2] https://www.helpscout.com/helpu/customer-support-tools-resources/
// [3] https://www.helpscout.com/helpu/knowledge-base-examples/
// [4] https://aspirity.com/blog/good-admin-panel-design
// [5] https://support.zendesk.com/hc/en-us/articles/4408846795674-Getting-started-with-Guide-for-your-help-center-Setting-up
// [6] https://www.justinmind.com/ui-design/dashboard-design-best-practices-ux

import { MetaTags } from '@redwoodjs/web'

const SupportPage = () => {

  return (
    <>
      <MetaTags title="Support" description="Support page" />

      <header className="bg-primary text-white p-4">
        <h1 className="text-4xl font-bold">Support</h1>
      </header>

      <div className="p-4">

        <section className="knowledge-base">
          <h2 className="text-2xl font-bold">Knowledge Base</h2>
          {/* Display links to knowledge base articles */}
        </section>

        <section className="contact-information">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p>Email: support@wiseworks.com</p>
          <p>Phone: 1-800-123-4567</p>
          <p>Chat Support: Click here to chat</p>
        </section>

        <section className="p-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <form>
            {/* FormFields */}
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
          </form>
        </section>

        <section className="social-media-support">
         {/* Links */}
        </section>

        <section className="bug-reporting">
          {/* Link */}
        </section>

      </div>

    </>
  )
}

export default SupportPage