import { render } from '@redwoodjs/testing/web'

import ProjectDetail from './ProjectDetail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProjectDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectDetail />)
    }).not.toThrow()
  })
})
