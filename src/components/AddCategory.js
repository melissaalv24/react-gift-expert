import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue ]= useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        //para que no haga el refresh del navegador
        e.preventDefault()
        if( inputValue.trim().length > 2){
            
            setCategories( cats => [inputValue, ...cats])
            setInputValue('')

        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                value={ inputValue }
                onChange={ handleInputChange }
            />
            <button onClick={ handleSubmit }>Agregar</button>
        </form>
    )
}
