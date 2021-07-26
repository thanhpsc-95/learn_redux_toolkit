import { useEffect, useRef, useState } from "react"

const useFetch = (url: string = "", options: any = null) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const isMounted = useRef(true);
    useEffect(() => {
        setLoading(true);
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setData(data);
                    setError(null);
                }
            })
            .catch(error => {
                if (isMounted) {
                    setData([]);
                    setError(error);
                }
            })
            .finally(() => isMounted && setLoading(false))

        return () => {
            isMounted.current = false;
        }
    }, [url, options])
    return { data, error, loading }
}

export default useFetch