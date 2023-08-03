import { render } from '@redwoodjs/testing/web'

import ReviewerDashboardPage from './ReviewerDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReviewerDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReviewerDashboardPage />)
    }).not.toThrow()
  })
})
