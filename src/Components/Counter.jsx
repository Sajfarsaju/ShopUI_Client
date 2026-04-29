import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../redux/features/counterSlice'



function Counter() {

    const count = useSelector((state) => state.counter.val)

    const dispatch = useDispatch()
    return (
        <div className='min-h-screen'>
            <h1>Count: {count} </h1>

            <button
                className='text-white bg-green-600 rounded-sm px-4 py-2 my-2'
                onClick={() => dispatch( increment() )}
            >Increment
            </button>
            <button
                onClick={() => dispatch( decrement() )}
                className='text-white bg-indigo-600 rounded-sm px-4 py-2 my-2'>
                Decrement
            </button>
            <button
                onClick={() => dispatch(reset())}
                className='text-white bg-red-600 rounded-sm px-4 py-2 my-2'>
                Reset
            </button>
        </div>
    )
}

export default Counter