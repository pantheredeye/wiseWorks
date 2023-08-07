# WiseWorks
WiseWorks is a two-way marketplace for practicing engineers to post jobs for retired engineers to review them. Our platform is designed to connect these two groups in a secure and efficient way, so that practicing engineers can get the feedback they need on their project plans, while retired engineers can use their expertise and experience to make a difference in their field.

## How it Works
On WiseWorks, practicing engineers can post project plans, including relevant documents and other information, and set a budget for the project review. Retired engineers can browse available projects and apply to review them, based on their expertise and experience. Once a review has been accepted, the retired engineer will have access to the project plans and any related documents, and can provide feedback and recommendations to the practicing engineer. The practicing engineer can then rate the retired engineer's performance, creating a feedback loop that ensures the quality of the reviews and helps build a strong community of retired engineers.

## Key Features
* Secure authentication system to protect user data and ensure access control.
* Verification of professional engineering license before being able to post or review jobs, to ensure the quality of work and maintain the ethical standards required by their engineering ethics committee.
* A two-sided marketplace that connects practicing engineers and retired engineers, allowing practicing engineers to post jobs and retired engineers to review them.
* The ability for job posters to upload PDF files for review, and for reviewers to accept jobs and download PDFs.
* A rating system for both job posters and reviewers to provide feedback and establish trust in the community.


## Future Plans
In the future, we plan to expand WiseWorks to include additional features and functionalities, including:

* Advanced search and filtering options, to help retired engineers find projects that match their expertise and interests.
* Collaboration tools that allow practicing and retired engineers to work together on projects and share knowledge and resources.
* Analytics and reporting tools, to help users track their progress and measure the impact of their work on the platform.
* Additional payment options, including the ability to use cryptocurrencies or other alternative payment methods.
* An integrated chat system to facilitate project and community-wide communication.

## Get Started

To get started with WiseWorks, simply create an account, verify your identity, and start browsing available projects or posting your own project plans. If you have any questions or feedback, feel free to reach out to our support team at support@WiseWorks.com.

We believe that WiseWorks has the potential to revolutionize the way that practicing and retired engineers connect and work together, and we're excited to have you on board!

# User Personas

### User from a practicing firm who needs a project plan review
* Name: John
* Age: 32
* Occupation: Mechanical engineer
* Goals: Needs a project plan review to ensure his firm is meeting all the necessary requirements and standards.
* Challenges: Tight deadlines and busy schedule make it difficult to find experienced and knowledgeable retired engineers to review his firm's project plans.
* Motivations: Wants to ensure that his firm is meeting all necessary requirements and standards, and needs to find an efficient and reliable way to get project plans reviewed in a timely manner.
* Personality traits: Detail-oriented, driven, busy, seeks efficiency.

### Retired engineer who wants to review plans in their free time
* Name: Sarah
* Age: 65
* Occupation: Retired civil engineer
* Goals: Wants to use her expertise and experience to help firms meet the necessary standards and requirements for their projects, while also staying active and engaged in her field of expertise.
* Challenges: Limited options for staying involved in her field, and limited opportunities to use her expertise and experience to help others.
* Motivations: Wants to stay involved and engaged in her field, while also making a difference by helping firms meet the necessary requirements and standards for their projects.
* Personality traits: Experienced, detail-oriented, passionate, looking for ways to stay engaged and active in her field.

### Application administrator responsible for verifying identities of users one and two and monitoring activity on the application
* Name: Alex
* Age: 40
* Occupation: Application administrator
* Goals: Ensure the security and integrity of the platform, by verifying the identities of users one and two and monitoring their activity on the application.
* Challenges: Ensuring that users are who they claim to be, and monitoring the platform effectively to prevent fraudulent or malicious activity.
* Motivations: Wants to ensure the security and integrity of the platform, and create a safe and reliable marketplace for retired engineers and firms to connect.
* Personality traits: Detail-oriented, diligent, responsible, focused on security and integrity.

## Project Structure

Layouts:
1. Main Layout
   - Contains the header and footer components that are displayed on every page
   - Provides a consistent look and feel across the app
   - Includes navigation links and global tools

2. User Layout
   - Wraps pages related to user registration, login, and user-specific functionality
   - May include additional components specific to user-related actions

3. Project Layout
   - Wraps pages related to project creation, project details, and project reviews
   - May include additional components specific to project-related actions

Pages:
1. Landing Page (Main Layout)
   - Provides an overview of the app and its key features
   - Includes call-to-action buttons for creating an account or logging in

2. User Registration Page (User Layout)
   - Form for creating a new user account
   - Includes verification process for professional engineering license

3. User Login Page (User Layout)
   - Form for logging into the user account

4. User Dashboard (User Layout)
   - Overview of the user's posted projects and reviews
   - Links to create a new project or browse available projects

5. Project Creation Page (Project Layout)
   - Form for practicing engineers to post project plans
   - Includes upload functionality for relevant documents (PDF files)

6. Project Details Page (Project Layout)
   - Display detailed information about a specific project
   - Allows retired engineers to apply for reviewing the project

7. Reviewer Dashboard (Project Layout)
   - Overview of available projects for retired engineers to review
   - Links to accept or decline review requests

8. Project Review Page (Project Layout)
   - Display project plans and related documents for review
   - Provides a feedback form for retired engineers to submit their recommendations

9. Rating and Feedback Page (Project Layout)
   - Allows practicing engineers to rate the performance of retired engineers
   - Provides a feedback loop for continuous improvement

10. Admin Dashboard (Main Layout)
    - Monitoring and verification of user identities
    - Activity monitoring to prevent fraudulent or malicious behavior

11. Support Page (Main Layout)
    - Contact information for reaching out to the support team
    - FAQs or knowledge base for common questions and issues

Questions

------------------

Where do notices to the user go in this layout? How do I make components for that? For instance, when a project is accepted for review, the user should get an email/text/and in-app notification. When the user gets paid, it would be great to have the same update. When a user's license is approved, or company is approved, etc.

Based on reviewing the provided content, here are my thoughts on where user notifications could fit into the project structure:

For in-app notifications, you could have a Notifications component that renders on pages like the User Dashboard and Reviewer Dashboard. It would display a list of notifications relevant to that user.

When certain actions occur (project accepted, payment received, etc), you could dispatch a Redux action to add the notification to the state. The Notifications component could listen for changes in state and automatically display new notifications.

For email/SMS notifications, you'd likely want to integrate with a third-party notification service. When key events occur, you'd trigger the notification by calling the provider's API.

Some options are:

SendGrid for email
Twilio for SMS
AWS SNS for both email and SMS
You'd create these integrations separately from the core app code, likely in an API service layer. Then call the integration from your API when you need to send a notification.

The key is separating concerns - your core app shouldn't have to know about the implementation details of sending notifications. Just dispatch actions and make API calls, and let the integrations handle delivery.

For the license approval specifically, I'd recommend an Admin UI for approving licenses. When approved, dispatch an action to update state, which triggers both in-app and email notifications to the user.


------------------
What are necessary features for a two way marketplace? I want practicing engineers to put plans up for review, and have retired professional engineers review the plans. I want to facilitate payments between buyer and seller. I want to facilitate conversation between them about a project. What else should I have?

Based on your requirements, here are some necessary features for a two-way marketplace:

1. **User Profiles**: Users should be able to create profiles that showcase their skills, experience, and qualifications. This will help buyers find the right professionals to review their plans, and help retired professional engineers find projects that match their expertise.

2. **Project Listings**: Buyers should be able to create listings for their projects, including details such as project scope, budget, and timeline. Professional engineers can then browse these listings and apply to review the plans.

3. **Messaging System**: A messaging system is essential for facilitating communication between buyers and professional engineers. This will allow them to discuss project details, ask questions, and provide feedback.

4. **Payment Gateway**: A payment gateway is necessary to facilitate payments between buyers and professional engineers. This will ensure that transactions are secure and that both parties are compensated fairly for their work.

5. **Review System**: A review system is important for building trust and credibility within the marketplace. Buyers should be able to leave reviews for professional engineers, and vice versa. This will help other users make informed decisions about who to work with.

6. **Search and Filtering**: A search and filtering system will help buyers find the right professional engineers for their projects. This can include filters for skills, experience, location, and availability.

7. **Notifications**: Notifications are important for keeping users informed about project updates, new messages, and other important events within the marketplace.

These are just some of the necessary features for a two-way marketplace. Depending on your specific needs, there may be additional features that you require.

Citations:
[1] https://clockwise.software/blog/build-a-two-sided-marketplace/
[2] https://fourweekmba.com/two-sided-marketplace/
[3] https://www.bitcot.com/two-sided-marketplace-the-biggest-opportunity/
[4] https://francescolelli.info/tutorial/on-building-a-two-sided-marketplace/
[5] https://professional.mit.edu/course-catalog/digital-platforms-designing-two-sided-markets-apis-feature-roadmaps
[6] https://zapier.com/blog/two-sided-marketplace/
------------------
