import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [product, setProduct] = useState({})
    // const location = useLocation();
    const { id } = useParams()

    const getProductDetails = async () => {
        try {
            const res = await fetch(`https://ilkinibadov.com/api/v1/products/${id}/details`)
            if (res.ok) {
                const data = await res.json()
                setProduct(data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProductDetails()
    }, [id])

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </div>
    )
}

export default Details