import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
test('App', () => {
  // todo: useSelector 조작
  const tasks = [
    { id: 1, title: '아무 것도 안함 #1' },
    { id: 2, title: '아무 것도 안함 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무 것도 안함 #1/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
