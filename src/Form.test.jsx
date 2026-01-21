
import {test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'

import Form from './Form'

test('displays form information', () => {
    render(<Form />)

    expect(screen.getByText('Form Page')).toBeInTheDocument()
})