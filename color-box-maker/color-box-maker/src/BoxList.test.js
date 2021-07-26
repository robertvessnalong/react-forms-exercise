import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('add new item', () => {
  const { getByLabelText, queryByText, getByText } = render(<BoxList />);
  const width = getByLabelText('Width:');
  const height = getByLabelText('Height:');
  const color = getByLabelText('Background Color:');
  const btn = queryByText('Add Box');
  fireEvent.change(width, { target: { value: '100' } });
  fireEvent.change(height, { target: { value: '100' } });
  fireEvent.change(color, { target: { value: 'red' } });
  fireEvent.click(btn);
  const x = getByText('X');
  expect(x).toBeInTheDocument();
});
