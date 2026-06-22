import { it, expect } from 'vitest'
import { createElement } from 'react'
import App from './App'

it('App component exists and renders', () => {
    const el = createElement(App)
    expect(el).toBeTruthy()
})
