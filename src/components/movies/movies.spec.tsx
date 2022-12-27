import { render } from '@testing-library/react'
import React from 'react'
import { Movies } from '.'

test('should be a have cards', () => {
  render(<Movies />)
})