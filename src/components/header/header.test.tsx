import { render } from '@/test/utils'

import { Header } from '.'

test('renders default state', () => {
  const { container } = render(
    <Header>
      <p>Children</p>
    </Header>
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <header
        class="mb-5 flex flex-col items-center justify-center bg-white shadow-sm"
      >
        <p>
          Children
        </p>
      </header>
    </div>
  `)
})

test('render with custom props', () => {
  const { getByTestId } = render(<Header data-testid="header" />)

  expect(getByTestId('header')).toBeInTheDocument()
})
