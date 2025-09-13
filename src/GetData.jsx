import { useEffect, useState} from 'react'

function GetData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
        .then(response => response.json())
        .then(data => setData(data['usd']))


        .catch(error => console.error('Error fetching data:', error));
    }
    , []);
    return data;

}

export default GetData;

