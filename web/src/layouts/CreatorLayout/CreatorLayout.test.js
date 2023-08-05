import { render } from '@redwoodjs/testing/web'

import CreatorLayout from './CreatorLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreatorLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatorLayout />)
    }).not.toThrow()
  })
})
