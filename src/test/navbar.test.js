import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';
// import NavLinkEl from '../components/NavLinkEl';

test('Test for text contents in links', async () => {
  render(<NavBar />, { wrapper: Router });

  const textElement = screen.getByText('Rockets');
  expect(textElement).toBeInTheDocument();
});

it('Builds the snapchot of the navbar component safely', () => {
  const tree = renderer
    .create(
      <Router>
        <NavBar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
