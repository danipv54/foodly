import  { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [formState, setFormstate] = useState<any>(initialForm);
    const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/);
   
    const onInputChange = ({ target }: any) => {
        const { value, name } = target;

        setFormstate({
            ...formState,
            [name]: value,
        })
    };

    return {
        ...formState,
        formState,
        onInputChange,
        regex
    }
}