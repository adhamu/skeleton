import { render, screen } from '@testing-library/react'

import App from '../App'

describe('App', () => {
  it('displays Hello World', () => {
    render(<App />)

    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})
