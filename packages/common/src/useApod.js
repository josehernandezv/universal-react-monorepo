import { useState, useEffect } from 'react';

const useApod = () => {
    const [result, setResult] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(
            'https://api.nasa.gov/planetary/apod?api_key=J62nxKBUEFge8BmK0fsn2mgEerbZpyNsjrcYLoGh&date=2020-01-01'
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResult(data);
                setLoading(false);
            });
    }, []);

    return { result, isLoading };
};

export default useApod;
