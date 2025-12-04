import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api/api';   

const Details = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getProductDetails = async () => {
        try {
            const res = await api.get(`/products/${id}/details`);
            setProduct(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProductDetails();
    }, [id]);

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </div>
    );
};

export default Details;
