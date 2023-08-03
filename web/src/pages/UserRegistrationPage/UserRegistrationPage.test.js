import { render } from '@redwoodjs/testing/web'

import UserRegistrationPage from './UserRegistrationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserRegistrationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserRegistrationPage />)
    }).not.toThrow()
  })
})
