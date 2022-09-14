import React, { useState } from 'react';

const initialState = {
    fName: '',
    lName: '',
    age: 0,
    location: '',
    email: '',
    number: '',
}


const Form = () => {
    const [formData, setFormData] = useState(initialState);
    const { fName, lName, age, location, email, number } = formData;
    const [objects, setObjects] = useState(JSON.parse(localStorage.getItem('user-data')));



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let localObj = {
            id: Date.now(),
            fName,
            lName,
            age: +age,
            location,
            email,
            number,
        }

        if (localStorage.getItem('users-values')) {
            let localStorageValue = JSON.parse(localStorage.getItem('users-values'));

            localStorageValue.push(localObj);

            localStorage.setItem('users-values', JSON.stringify(localStorageValue));
            setObjects(localStorageValue)
            return;
        } else {

            localStorage.setItem('users-values', JSON.stringify([localObj]));
            setObjects([localObj])
            return;
        }
    }


    const clearLocalStorage = () => {
        localStorage.clear();
    }


    return (
        <>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='fName' value={fName} placeholder='First name' onChange={handleChange} />
                <input type='text' name='lName' value={lName} placeholder='Last name' onChange={handleChange} />
                <input type='text' name='location' value={location} placeholder='Location' onChange={handleChange} />
                <input type='number' name='age' value={age} placeholder='Age' onChange={handleChange} />
                <input type='email' name='email' value={email} placeholder='Email' onChange={handleChange} />
                <input type='text' name='number' value={number} placeholder='Number' onChange={handleChange} />
                <button type='submit' disabled={!fName || !lName || !age} className='btn'>Submit</button>
            </form>
            <button className='btn'
                onClick={() => setFormData(initialState)}
            >Reset</button>
            <button onClick={clearLocalStorage} className='btn'>Clear local Storage</button>
            {objects &&
                <div className='item-container'>
                    {objects.map((item, idx) =>
                        <div className='item' key={item.id}>
                            <p className='id'>{idx}</p>
                            <h2>{item.fName}</h2>
                            <h2>{item.lName}</h2>
                            <h3>{item.age}</h3>
                            <p>{item.location}</p>
                            <p>{item.email}</p>
                            <p>{item.number}</p>
                        </div>
                    )}
                </div>
            }
        </>

    )

}


export default Form

    // let storLeng = window.localStorage.length
    // let storKey = window.localStorage.key(0) // Return key of index 0
    // let storGetItem = window.localStorage.getItem('name') // Return value of key name
    // window.localStorage.setItem('name', 'islom'); // Set a value name:islom
    // window.localStorage.removeItem('name'); // Remove item by the key name
    // window.localStorage.clear(); // invoke clear delete all items inside localStorage

