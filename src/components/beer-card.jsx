import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import styles from "./components.module.css";
import BeerTitle from "./beer-title";
import BeerDetail from "./beer-details";

// Verify if the beer is in the optimal temperature range (3-6ºC)
// This method is a static one so it's out of the component code for prevent 
// undesirable rerendering
const isBeerOk = (temp) => {
    return  temp >= 3 && temp <= 6
}

const BeerCard = (props) => {
    const [toggleDetail, setToggleDetail] = useState(false);
    const [beerCardClass, setBeerCardClass] = useState();
    const [detail, setDetail] = useState({});

    const fetchDetails = useCallback(() => {
        const url = `https://hasydbj5c4gpa2oozfpjpc677a0hxuob.lambda-url.ap-southeast-2.on.aws/sensor/${props.BeerId}`;
        axios.get(url).then((response) => {
            setDetail(response.data);
            const beerTemp = response.data.temperature;
            // Set card background color 
            setBeerCardClass(isBeerOk(beerTemp) ? styles.beerOk : styles.beerProblem);
        });
    }, [props.BeerId]);

    useEffect(() => {
        fetchDetails();

        // Update the beer detail every three seconds
        const intervalId = setInterval(() => {
            fetchDetails();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [fetchDetails]);

    const handleBeerClick = () => {
        setToggleDetail(!toggleDetail);
    }

    return (
        <Card className={styles.cardBg}>
            <Card.Body className={`${beerCardClass} ${styles.borderRadius} `}onClick={() => handleBeerClick()}>
                {toggleDetail  
                    ? <BeerDetail Name={props.BeerName} Temp={detail.temperature} />                    
                    : <BeerTitle Name={props.BeerName} />
                }
            </Card.Body>
        </Card>
    )
}

export default BeerCard;