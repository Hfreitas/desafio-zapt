import { render, screen } from '../jest/test-utils';

import App from './App';

test('Page Home tests', () => {
  render(<App />);

  expect(screen.getByText('Desafio Zapt')).toBeInTheDocument();
});
