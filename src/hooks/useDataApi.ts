import {useEffect, useState} from 'react';
import {Auction} from '../models/Auction';

// the s3 has a https certificate problem (probably using a self signed certificate)
// so here copy-pasted the content in an anonymous json api
const BASE_URL = 'https://api.jsonbin.io/b/61f9828d1960493ad1864f2a';

export const useDataApi = () => {

    const [data, setData] = useState<Auction[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(BASE_URL);
                const resultJson = await result.json();
                setData(resultJson);

            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return [data, isLoading, isError] as [Auction[], boolean, boolean];
};
