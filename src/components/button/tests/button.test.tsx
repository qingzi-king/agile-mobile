import React from 'react'
import { render, testA11y, screen, fireEvent } from 'testing'
import Button from '../'

const prefixCls = `fam-button`

it('passes a11y test', async () => {
  await testA11y(<Button>test</Button>)
})

test('renders with color', () => {
  const { getByText } = render(
    <>
      <Button color='primary'>Primary</Button>
      <Button color='success'>Success</Button>
      <Button color='danger'>Danger</Button>
      <Button color='warning'>Warning</Button>
    </>
  )
  expect(getByText('Primary')).toHaveClass(`${prefixCls}-primary`)
  expect(getByText('Success')).toHaveClass(`${prefixCls}-success`)
  expect(getByText('Danger')).toHaveClass(`${prefixCls}-danger`)
  expect(getByText('Warning')).toHaveClass(`${prefixCls}-warning`)
})