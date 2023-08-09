import { render } from '@redwoodjs/testing/web'

import ApplicationQueue from './ApplicationQueue'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ApplicationQueue', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationQueue />)
    }).not.toThrow()
  })
})
