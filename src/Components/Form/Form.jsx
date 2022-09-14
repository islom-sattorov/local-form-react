import { Button, CardActions, CardContent, TextField, Typography } from '@mui/material';
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
    const [objects, setObjects] = useState(JSON.parse(localStorage.getItem('users-values')));



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
                <TextField sx={{ width: 400 }} id='outlined-basic' label='First Name' variant='outlined' type='text' name='fName' value={fName} placeholder='First name' onChange={handleChange} />
                <TextField sx={{ width: 400 }} id='outlined-basic' label='Last Name' type='text' name='lName' value={lName} placeholder='Last name' onChange={handleChange} />
                <TextField sx={{ width: 400 }} id='outlined-basic' label='Location' type='text' name='location' value={location} placeholder='Location' onChange={handleChange} />
                <TextField sx={{ width: 400 }} id='outlined-number' label='Age' type='number' name='age' value={age} placeholder='Age' onChange={handleChange} />
                <TextField sx={{ width: 400 }} id='outlined-basic' label='Email' type='email' name='email' value={email} placeholder='Email' onChange={handleChange} />
                <TextField sx={{ width: 400 }} id='outlined-basic' label='Number Phone' type='text' name='number' value={number} placeholder='Number Phone' onChange={handleChange} />
                <Button sx={{ width: 400 }} variant='contained' color='success' type='submit' disabled={!fName || !lName || !age} className='btn'>Submit</Button>
            </form>
            <div className='btn-container'>
                <Button sx={{ width: 400 }} variant='contained' className='btn' onClick={() => setFormData(initialState)}
                >Reset</Button>
                <Button sx={{ width: 400 }} variant='outlined' color='error' onClick={clearLocalStorage} className='btn'>Clear local Storage</Button>
            </div>
            {objects &&
                <div className='item-container'>
                    {objects.map((item, idx) =>
                        <div className='item' key={item.id}>
                            <CardContent>
                                <Typography sx={{ fontSize: 30 }} color="text.main" gutterBottom>
                                    {item.fName} {item.lName}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {item.location}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {item.age}
                                </Typography>
                                <Typography variant="body4">
                                    {item.number}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">{item.email}</Button>
                            </CardActions>
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

