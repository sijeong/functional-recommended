import React, {MouseEvent, ReactElement} from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectMetalsStatePlatinum, selectMetalStateGold, selectMetalStateSilverNonMemo, selectMetalStateCopperNonMemo } from './reducers';
import { SetPlatinumAction, setPlatinum } from './actions/metals';

function App() {
  const dispatch = useDispatch()
  const platinum = useSelector(selectMetalsStatePlatinum)
  const gold = useSelector(selectMetalStateGold)
  const silver = useSelector(selectMetalStateSilverNonMemo)
  const copper = useSelector(selectMetalStateCopperNonMemo)

  return (
    <div className="App">
      <header className="App-header">
        <div>
          platinum (memoized) {platinum}
        </div>

        <button onClick={(event: MouseEvent<HTMLButtonElement>): SetPlatinumAction => dispatch(setPlatinum(11))}>
          Set platinum to 11
        </button>
      </header>
    </div>
  );
}

export default App;
