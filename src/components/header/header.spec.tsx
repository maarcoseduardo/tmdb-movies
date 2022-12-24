import { render } from '@testing-library/react'
import React from 'react'
import { Header } from '.'

test('should be a have cards', () => {
  render(<Header />)
})
