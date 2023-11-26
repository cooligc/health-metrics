import { Form } from 'react-bootstrap';


import './Metric.css';
import { Counter } from '../core/Counter';

export const Metric = (data) => {

    const onDecrease = (attr) => {
        console.log('Change invoked Decrease ' + attr)
    }

    const onIncrease = (attr) => {
        console.log('Change invoked Increase ' + attr)
    }

    return (
        <div > 
            { data.type === 'range' && <Counter type={data.type} name={data.name} min={data.min} max={data.max} onIncrease= {onIncrease} onDecrease = {onDecrease}/> }
            { data.type === 'checkbox' && <Form.Check type='switch' label={data.name}/> }
        </div>
    )
}