import reducer, { fetchAllCoins } from '../redux/slices/coinsSlice';

test('should return the initial state reducer', () => {
  expect(reducer(undefined, {})).toEqual({
    entities: [],
    loading: 'idle',
    status: 'normal',
  });
});

test('should status should be normal', () => {
  expect(reducer(undefined, fetchAllCoins())).toEqual({
    entities: [],
    loading: 'idle',
    status: 'normal',
  });
});
