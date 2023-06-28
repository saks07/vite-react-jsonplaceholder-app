import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { increment, selectCount } from './counterSlice'
import { selectUsers } from '../users/usersSlice'


function CounterComponent() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const usersDataCount = useAppSelector(selectUsers);

  // omit rendering logic
  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>
        count is {count}
      </button>
      <p>Number of users is <strong>{usersDataCount.length}</strong></p>
    </div>
  );
}

export default CounterComponent;