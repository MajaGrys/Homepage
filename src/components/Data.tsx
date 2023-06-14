import React from "react";
import Provider from '../provider/mainDataProvider';
import { useEffect, useState } from "react";

export default function Data() {
    const [data, setData] = useState('')

    useEffect(() => {
        Provider.getData('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(res => {
            if (res.status === 'success') {
                setData(res.message)
            }
        })
    }, [])

    return (
        <>
        {data && <img src = {data} alt='Dog' />}
        </>
    )
}