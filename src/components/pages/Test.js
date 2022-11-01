import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Test = (props) => {

    const { isLogged, a, b, id = "te" } = props;

    const navigate = useNavigate();

    let suma = a + b;

    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [e, setE] = useState(0);

    let suma2 = parseInt(c) + parseInt(d);
    let suma3 = parseInt(c) + parseInt(d) - parseInt(e);

    useEffect(() => {
        if (suma2 === 1) {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [suma2]);


    return (
        <>
            {id}
            <input type="text" onChange={(e) => {
                setC(e.target.value);
            }} />
            <input type="text" onChange={(e) => {
                setD(e.target.value);
            }} />
            <input type="text" onChange={(e) => {
                setE(e.target.value);
            }} />
            <div>Is logged ?{isLogged ? 'da' : 'nu'}</div>
            <div>Suma este {suma}</div>
            <div>Suma2 este {suma2}</div>
            <div>Suma3 este {suma3}</div>

            <div>Test</div>
        </>

    );
}

export default Test;