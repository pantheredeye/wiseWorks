import { render } from '@redwoodjs/testing/web'

import ProjectDetailsPage from './ProjectDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProjectDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectDetailsPage />)
    }).not.toThrow()
  })
})
