import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';

const ResultsPage = () => {
    const {state,dispatch} = useContext(GlobalContext)
  return <div onClick={() => {
    dispatch({type : 'SCREEN_TYPE' , payload: 'landing'})
  }}>
      {`You have answered ${state.result} out of ${state.data.length} `}
  </div>;
};

export default ResultsPage;
