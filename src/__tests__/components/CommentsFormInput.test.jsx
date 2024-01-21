import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import CommentsFormInput from '../../components/threads/details/CommentsFormInput';

/**
 * skenario testing
 *
 * - CommentsFormInput component
 *   - should handle content typing correctly
 *   - should call comment function when send comments button is clicked
 */

describe('CommentsFormInput component', () => {
  afterEach(() => cleanup());

  it(' should handle content typing correctly', () => {
    // Arrange
    render(<CommentsFormInput comment={() => {}} />);
    const contentEditable = screen.getByTestId('editable-content');

    // Action  Simulate user typing
    fireEvent.input(contentEditable, {
      target: { textContent: 'Hello, World!' },
    });

    // Assert that the contenteditable has been updated
    expect(contentEditable.textContent).toBe('Hello, World!');
  });

  it('should call comment function when send comments button is clicked', () => {
    const mockThread = vi.fn();
    // Arrange
    render(<CommentsFormInput comment={mockThread} />);

    const contentEditable = screen.getByTestId('editable-content');
    const sendCommentsButton = screen.getByRole('button');

    // Action  Simulate user typing
    fireEvent.input(contentEditable, {
      target: { textContent: 'Hello, World!' },
    });

    fireEvent.click(sendCommentsButton);

    expect(mockThread).toBeCalledWith({ content: contentEditable.textContent });
    expect(mockThread).toHaveBeenCalled();
  });
});
