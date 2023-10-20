import { useState } from "react";
// import { ImSearch } from 'react-icons/im';
// import { toast } from "react-toastify";

export const PokemonForm = ({onSubmit}) => {

const [value, setValue] = useState('');

const handleChange = (e)=>{
    setValue(e.currentTarget.value.toLowerCase())
}
const handleSubmit = (e)=>{
e.preventDefault()
// if (value === '') {
//  return toast.error('Error')
// }
onSubmit(value)
setValue('')
}
    
        return(
            <form onSubmit={handleSubmit} >
                
                <input type="text" value={value} onChange={handleChange}  />
                <button type="submit" > 
                {/* <ImSearch style={{ marginRight: 8 }} /> */}
                Submit
                </button>
            </form>
        )
    
}
