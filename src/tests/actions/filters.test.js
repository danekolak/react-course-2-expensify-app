import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});



test('should set text filter with text value', () => {
  const text = 'Something in';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

// test('should generate set text filter with default', () => {
//   const action = setTextFilter();
//   expect(action).toEqual({
//     type: 'SET_TEXT_FILTER',
//     text: ''
//   });
// });

test('should generate set text filter with default', () => {
  expect(setTextFilter()).toEqual(
    {
      type: 'SET_TEXT_FILTER',
      text: ''
    });

});

// test('should generate action object for sort by date', () => {
//   const action = sortByDate();
//   expect(action).toEqual({
//     type: 'SORT_BY_DATE'
//   });
// });

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});


// test('should generate action object for sort by amount', () => {
//   const action = sortByAmount();
//   expect(action).toEqual({
//     type: 'SORT_BY_AMOUNT'
//   });
// });

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});