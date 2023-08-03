import { render } from '@redwoodjs/testing/web'

import ProjectCreationPage from './ProjectCreationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProjectCreationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectCreationPage />)
    }).not.toThrow()
  })
})
