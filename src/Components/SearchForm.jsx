import React from 'react'
import { Form } from 'react-router-dom'

function SearchForm() {
    return (
        <Form method='get' className='my-10'>
            <input
                type="text"
                name='query'
                defaultValue={""}
                placeholder='Search products'
                className='border p-2 mr-2'
            />
            <button className='bg-indigo-600 text-white px-4 py-2'>Search</button>
        </Form>
    )
}

export default SearchForm