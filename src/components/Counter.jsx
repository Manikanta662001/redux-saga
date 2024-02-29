import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment, incrementAsync, reset } from '../store/slices/counterSlice';
function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counterReducer.count)
  return (
    <div>
        <h5 className="mb-3">{count}</h5>
        <button className="mx-3" onClick={()=>dispatch(increment())}>+</button>
        <button className="mx-3" onClick={()=>dispatch(decrement())}>-</button>
        <button className="mx-3" onClick={()=>dispatch(reset())}>reset</button>
        <button className="mx-3" onClick={()=>dispatch(incrementAsync())}>+ async</button>
    </div>
  )
}

export default Counter