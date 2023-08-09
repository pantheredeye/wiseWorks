// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ApplicationQueue {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ApplicationQueue from './ApplicationQueue'

export const generated = () => {
  const mockApplicants = [
    {
      id: 1,
      name: 'John Doe',
      qualifications: 'Mechanical Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      qualifications: 'Civil Engineer',
    },
    {
      id: 3,
      name: 'Michael Lee',
      qualifications: 'Electrical Engineer',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      qualifications: 'Chemical Engineer',
    },
    {
      id: 5,
      name: 'David Kim',
      qualifications: 'Software Engineer',
    },
  ]

  const handleSelectReviewers = (selectedReviewers) => {
    // Handle the selected reviewers
    console.log(selectedReviewers)
  }

  return (
    <ApplicationQueue
      applicants={mockApplicants}
      onSelectReviewers={handleSelectReviewers}
    />
  )
}

export default {
  title: 'Components/ApplicationQueue',
  component: ApplicationQueue,
}
