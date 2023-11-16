import React from "react";
import styles from "./components.module.css";
import { Row, Col } from "react-bootstrap";


const BeerDetail = (props) => {
    return (
        <Row className={`${styles.card} ${styles.cardContent}`}>
            <Row>
                <Col>
                    <h1 className={styles.center}>{props.Temp}&#8451;</h1>
                </Col>
            </Row>
            <Row className={styles.fullWidth}>
                <Col className={styles.detailInfo} sm={4}>
                    (3-6&#8451;)
                </Col>
                <Col  sm={4}>
                    &nbsp;
                </Col>
                <Col className={styles.detailInfo}  sm={4}>
                    {props.Name}
                </Col>
            </Row>
        </Row>
    );
}

export default BeerDetail;
