// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ProjectDetail {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ProjectDetail from './ProjectDetail'

export const generated = () => {
  return <ProjectDetail />
}

export default {
  title: 'Components/ProjectDetail',
  component: ProjectDetail,
}
