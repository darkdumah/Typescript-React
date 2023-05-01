import { useReducer } from "react";
import '../state/style.css'

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement';
    payload: number;
}

type ResetAction = {
    type: 'reset';
}

type CounterAction = UpdateAction | ResetAction


const initialCount = {count: 0}

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
        return {count: state.count + action.payload}
    case 'decrement':
        return {count: state.count - action.payload}
    case 'reset':
        return initialCount
  default:
    return state
  }
}



export const Reduce = () => {

const [state, dispatch] = useReducer(reducer, initialCount)

  return (
    <>
    Count: {state.count}
    <button className="logButton" onClick=
    {() => dispatch(
        {
            type: 'decrement', 
            payload: 1
        }
        )
    }>Decrement
    </button>
    <button className="logButton" onClick=
    {() => dispatch(
        {
            type: 'reset'
        }
        )
    }>Reset
    </button>
    <button className="logButton" onClick=
    {() => dispatch(
        {   
           type: 'increment', 
           payload: 1
        }
        )
        }>Increment
    </button>
    </>
  )
}
