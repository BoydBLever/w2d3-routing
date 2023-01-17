import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Hero = (props) => {

    const [hero, setHero] = useState(null)
    // navigate
    const navigate = useNavigate();

    //grab the url variable
    const { heroId } = useParams();
    console.log(heroId);

    //execute after the component has finished loading
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${heroId}`)
            .then(response => {
                console.log(response.data);
                setHero(response.data);
            })
            .catch(err => {
                console.log(err)
                navigate("/error", { replace: true })
            })
    }, [])
    // goback
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            {
                hero ? (
                    <>
                        <h3>{hero.name}</h3>
                        {/* <img src={hero.images.md} alt={hero.name} height="200" /> */}
                        <button onClick={goBack}>back</button>
                    </>
                ) : <> loading... </>
            }
        </div>
    )
}
export default Hero