import React from "react";
import beerList from "../data/beers.json";
import { Row, Col } from "react-bootstrap";
import BeerCard from "./beer-card";
import styles from "./components.module.css";

const Board = () => {
    return (
        <Row className="g-3">
            {beerList.beers.map((beer) => {
                return (
                    <Col xs={1} sm={4} md={4} key={`beer_${beer.id}`}>
                        <BeerCard BeerName={beer.name} BeerId={beer.id} />
                    </Col>
                );
            })}
        </Row>
    )
}

export default Board;




