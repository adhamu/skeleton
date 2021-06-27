import * as React from 'react'
import App from '../App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('displays Hello World', () => {
    render(<App />)

    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})
