import { Button, Card } from "react-bootstrap"
import { Metric } from "./Metric"
import { useEffect, useState } from "react"
import './MyCard.css';


export const MyCard = (attributes) => {

    let [schema, setSchema] = useState([])
    useEffect(() => {
        setSchema(attributes.schema);
        console.log(attributes);
        console.log(schema);
    })

    return (
        <div className="MyCard">
            <Card>
                <Card.Header as="h5"> {attributes.date} </Card.Header>
                <Card.Body>
                    {
                        schema.map((item, index) => {
                        return <div key={index}>
                            { 
                            item.type === 'checkbox' && <Metric type={item.type} name={item.label} key={index}/>
                            }
                            {
                            item.type === 'range' && <Metric type={item.type} name={item.label} min={item.range.min} max={item.range.max} key={index}/>
                            }   
                        </div>
                        } )
                    }
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}