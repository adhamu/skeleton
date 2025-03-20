import { render, screen } from '@testing-library/react'

import About from '../About'

describe('About', () => {
  it('displays the title', () => {
    render(<About />)

    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
