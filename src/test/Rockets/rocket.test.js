import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import { reserved } from '../../Redux/Rockets/rockets';
import Rockets from '../../components/rockets/Rockets';
import RocketCard from '../../components/rockets/RocketCard';

describe('should render with given state from Redux store', () => {
  test('Rockets.js renders correctly', () => {
    let tree = renderer
    .create(
    <Provider store={store}>
      <Rockets>
        <RocketCard />
      </Rockets>
    </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})


describe('My connected react-redux commponents', ( )=> {  
  
  store.dispatch = jest.fn();

  test('It should dispatch an action', () => {
    render(
      <Provider store={store}>       
          <RocketCard />        
      </Provider>
    );  

    let element = screen.getByRole('button');     
    fireEvent.click(element);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(reserved());
  })
});