import { render } from '@redwoodjs/testing/web'

import ProjectLayout from './ProjectLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProjectLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectLayout />)
    }).not.toThrow()
  })
})
