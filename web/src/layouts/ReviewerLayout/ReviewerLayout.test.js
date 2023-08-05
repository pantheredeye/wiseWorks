import { render } from '@redwoodjs/testing/web'

import ReviewerLayout from './ReviewerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReviewerLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReviewerLayout />)
    }).not.toThrow()
  })
})
