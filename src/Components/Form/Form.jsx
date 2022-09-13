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
    // let newUser = window.localStorage.getItem(`User0`)
    // setStoredList(JSON.parse(newUser))
    // console.log(newUser)

    const addToStorage = () => {
        setArr([formData])
        // setStoredList(JSON.parse(localStorage.getItem(`User${window.localStorage.length}`)))
        // setStoredList(JSON.parse(newUser))

        console.log(storedList);
    }
    // window.localStorage.setItem('First Name', arr[0].firstName)
    // window.localStorage.clear();

    const clearLocalStorage = () => {
        window.localStorage.clear();
    }


    useEffect(() => {
        localStorage.setItem(`User${window.localStorage.length}`, JSON.stringify(arr))
        console.log(window.localStorage.length)

    }, [arr])




    // let storLeng = window.localStorage.length
    // let storKey = window.localStorage.key(0) // Return key of index 0
    // let storGetItem = window.localStorage.getItem('name') // Return value of key name
    // window.localStorage.setItem('name', 'islom'); // Set a value name:islom
    // window.localStorage.removeItem('name'); // Remove item by the key name
    // window.localStorage.clear(); // invoke clear delete all items inside localStorage

    // console.log(storLeng)
    // console.log(storKey)
    // console.log(storGetItem)



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
                {/* {window.localStorage.getItem('User0')
                    ? <>
                        <h2>{storedList[0].firstName}</h2>
                        <h3>{storedList[0].lastName}</h3>
                        <p>{storedList[0].location}</p>
                        <p>{storedList[0].age}</p>
                        <p>{storedList[0].email}</p>
                        <p>{storedList[0].number}</p>
                    </>
                    : 'Cannot found any data in the localStorage '} */}
            </div>
        </>
    )
}

export default Form