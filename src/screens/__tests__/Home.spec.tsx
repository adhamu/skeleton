import { render, screen } from '@testing-library/react'

import Home from '../Home'

describe('Home', () => {
  it('displays the title', () => {
    render(<Home />)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
