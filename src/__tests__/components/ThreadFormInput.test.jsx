import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadFormInput from '../../components/threads/ThreadFormInput';

/**
 * skenario testing
 *
 * - ThreadFormInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call thread function when create new question button is clicked
 */
describe('ThreadFormInput component', () => {
  afterEach(() => cleanup());

  it('should handle title typing correctly', async () => {
    render(<ThreadFormInput thread={() => {}} />);

    const titleInput = await screen.getByPlaceholderText('Judul Pertanyaan');
    await userEvent.type(titleInput, 'TESTING MENULIS THREAD PERTAMA');

    expect(titleInput.value).toBe('TESTING MENULIS THREAD PERTAMA');
  });

  it('should handle category typing correctly', async () => {
    render(<ThreadFormInput thread={() => {}} />);

    const categoryInput = await screen.getByPlaceholderText(
      'Kategori Terkait cth:pertanyaan'
    );
    await userEvent.type(categoryInput, 'general');

    expect(categoryInput.value).toBe('general');
  });

  it('should handle body typing correctly', async () => {
    render(<ThreadFormInput thread={() => {}} />);

    const contentEditable = screen.getByTestId('editable-content');

    fireEvent.input(contentEditable, {
      target: { textContent: 'Contoh testing pertama' },
    });

    expect(contentEditable.textContent).toBe('Contoh testing pertama');
  });

  it('should call thread function when create new question button is clicked', async () => {
    const mockThread = vi.fn();
    render(<ThreadFormInput thread={mockThread} />);

    const titleInput = await screen.getByPlaceholderText('Judul Pertanyaan');
    await userEvent.type(titleInput, 'TESTING MENULIS THREAD PERTAMA');

    const categoryInput = await screen.getByPlaceholderText(
      'Kategori Terkait cth:pertanyaan'
    );
    await userEvent.type(categoryInput, 'general');

    const contentEditable = screen.getByTestId('editable-content');

    fireEvent.input(contentEditable, {
      target: { textContent: 'Contoh testing pertama' },
    });

    // Find the button in the rendered component
    const createQuestionButton = screen.getByTestId('button-handler'); // Adjust the text accordingly
    // Simulate a button click
    fireEvent.click(createQuestionButton);
    // Assert that the mock function has been called
    expect(mockThread).toBeCalledWith({
      title: titleInput.value,
      category: categoryInput.value,
      body: contentEditable.textContent,
    });

    expect(mockThread).toHaveBeenCalled();
  });
});
