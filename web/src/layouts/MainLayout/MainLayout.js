// Header:
// - Site logo or branding: Display your app's logo or branding to provide visual identity.
// - Navigation links: Include links to important sections of your app, such as the user dashboard, project creation, project browsing, and support pages.
// - User profile: If the user is logged in, display their profile picture or username with a dropdown menu for account settings and logout functionality.
// - Search bar: Provide a search functionality to allow users to search for projects or other content within the app.
// - Global tools: Include any global tools or features that are accessible from any page, such as notifications, settings, or language selection.

// Footer:
// - Copyright information: Display copyright information for your app or company.
// - Legal links: Include links to legal pages such as terms of service, privacy policy, and cookie policy.
// - Support/contact information: Provide contact information for users to reach out for support or inquiries.
// - Social media links: Include links to your app's social media profiles for users to connect and follow.

// Additionally, you can consider including the following elements in the Main Layout:

// - Breadcrumbs: Display a breadcrumb trail to show the user's current location within the app's hierarchy and provide easy navigation.
// - Notifications: Show notifications or alerts for important updates or messages.
// - Language selection: If your app supports multiple languages, provide a language selector to allow users to switch between languages.
// - Theme customization: Allow users to customize the app's theme, such as choosing a light or dark mode or selecting different color schemes.

// * 8. Support Page:
//    - Contact information for reaching out to the support team.
//    - FAQs or knowledge base for common questions and issues.


// Remember to design the header and footer in a consistent and visually appealing manner to provide a cohesive user experience throughout the app.

// Please note that the specific navigation links and global tools will depend on the specific features and functionality of your app. Consider the user personas and their goals to determine the most relevant and useful elements to include in the header and footer.

// Citations:
// [1] https://ionicframework.com/docs/layout/structure
// [2] https://webstyleguide.com/wsg3/6-page-structure/3-site-design.html
// [3] https://learn.microsoft.com/en-us/aspnet/web-pages/overview/ui-layouts-and-themes/3-creating-a-consistent-look
// [4] https://powerbi.microsoft.com/en-us/blog/designing-custom-navigation-for-power-bi-apps-is-now-available/
// [5] https://docs.xperience.io/k10/developing-websites/developing-websites-for-mobile-devices/creating-page-layouts-for-devices
// [6] https://doc.arcgis.com/en/hub/sites/configure-menu-links-and-global-navigation.htm


import Header from "src/components/Header/Header"
import Footer
 from "src/components/Footer/Footer"
const MainLayout = ({ children }) => {
  return <>
  <Header />
  {children}
  <Footer />
  </>
}

export default MainLayout

