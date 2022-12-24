import { render } from '@testing-library/react'
import React from 'react'
import { Cards } from '.'

test('should be a have cards', () => {
  render(<Cards />)
})
