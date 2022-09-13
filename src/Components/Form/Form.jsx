import React, { useEffect, useState } from 'react';

// const clearObj = {
//     firstName: '',
//     lastName: '',
//     location: '',
//     age: '',
//     email: '',
//     number: '',
// }


const Form = () => {
    const [formData, setFormData] = useState({
        firstName: { name },
        lastName: { name },
        location: { name },
        age: { name },
        email: { name },
        number: { name }
    })

    const [arr, setArr] = useState([])
    const [storedList, setStoredList] = useState([]);



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        // console.log(e.target.value)
    }
    // console.log(formData)
    let newUser = window.localStorage.getItem(`User${window.localStorage.length - 1}`)
    let newUserJson = JSON.parse(newUser);
    // setStoredList([newUserJson])
    // console.log(newUser)

    const addToStorage = (e) => {
        setArr([formData])
        // setStoredList(JSON.parse(localStorage.getItem(`User${window.localStorage.length}`)))
        // setStoredList(JSON.parse(newUser))
        // console.log(storedList);
    }

    const clearLocalStorage = () => {
        window.localStorage.clear();
    }


    useEffect(() => {
        localStorage.setItem(`User${window.localStorage.length}`, JSON.stringify(arr))
    }, [arr])




    // let storLeng = window.localStorage.length
    // let storKey = window.localStorage.key(0) // Return key of index 0
    // let storGetItem = window.localStorage.getItem('name') // Return value of key name
    // window.localStorage.setItem('name', 'islom'); // Set a value name:islom
    // window.localStorage.removeItem('name'); // Remove item by the key name
    // window.localStorage.clear(); // invoke clear delete all items inside localStorage



    return (
        <>
            <h2>Registration Form</h2>
            <form>
                <input type='text' name='firstName' placeholder='First name' onChange={handleChange} />
                <input type='text' name='lastName' placeholder='Last name' onChange={handleChange} />
                <input type='text' name='location' placeholder='Location' onChange={handleChange} />
                <input type='text' name='age' placeholder='Age' onChange={handleChange} />
                <input type='email' name='email' placeholder='Email' onChange={handleChange} />
                <input type='text' name='number' placeholder='Number' onChange={handleChange} />
            </form>
            <button onClick={addToStorage} type='submit' className='btn'>Submit</button>
            <button className='btn'>Reset</button>
            <button onClick={clearLocalStorage} className='btn'>Clear local Storage</button>
            <div>
                {window.localStorage.getItem('User0')
                    ? <>
                        <div className='cardJson'>
                            <h3>{newUserJson[0].firstName}</h3>
                            <h3>{newUserJson[0].lastName}</h3>
                            <p>{newUserJson[0].location}</p>
                            <p>{newUserJson[0].age}</p>
                            <p>{newUserJson[0].email}</p>
                            <p>{newUserJson[0].number}</p>
                        </div>
                    </>
                    : 'Cannot found any data in the localStorage '}
            </div>
        </>
    )
}

export default Form