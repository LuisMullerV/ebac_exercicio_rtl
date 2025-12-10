import { render, screen, fireEvent } from '@testing-library/react'
import Post from './index'

describe('PostComments', () => {
  test('deve permitir a inserção de dois comentários', () => {
    render(<Post />)

    const textarea = screen.getByTestId(
      'comment-textarea'
    ) as HTMLTextAreaElement
    const button = screen.getByTestId('comment-button')

    // 1º comentário
    fireEvent.change(textarea, {
      target: { value: 'Primeiro comentário' }
    })
    fireEvent.click(button)

    // 2º comentário
    fireEvent.change(textarea, {
      target: { value: 'Segundo comentário' }
    })
    fireEvent.click(button)

    // verifica se os dois textos apareceram
    expect(
      screen.getByText('Primeiro comentário')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Segundo comentário')
    ).toBeInTheDocument()

    // e se existem exatamente 2 itens na lista
    const commentItems = screen.getAllByTestId('comment-item')
    expect(commentItems).toHaveLength(2)
  })
})
