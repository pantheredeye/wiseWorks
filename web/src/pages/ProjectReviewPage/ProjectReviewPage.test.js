import { render } from '@redwoodjs/testing/web'

import ProjectReviewPage from './ProjectReviewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProjectReviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectReviewPage />)
    }).not.toThrow()
  })
})
