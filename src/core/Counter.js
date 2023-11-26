import { useState } from "react"
import { Button, FormLabel } from "react-bootstrap"

export const Counter = (data) => {

    
    let defaultData = data.default ? data.default : data.min;
    let [counter, setCounter] = useState(defaultData)
    
    const decrease = () => {
            setCounter((prevCount) => {
               let cnt =  prevCount - 1 >= data.min ? prevCount - 1 :  data.min;
               return cnt;
            });
            data.onDecrease(counter);
        }
    const increase = () => {
        setCounter((prevCount) => {
            let cnt =  prevCount + 1 <= data.max ? prevCount + 1 :  data.max;
            return cnt;
        })
        data.onIncrease(counter);
    }
    

    return <div> 
        <Button onClick={decrease}> - </Button> &nbsp; <span>{counter}</span> &nbsp;
        <Button onClick={increase}> + </Button> &nbsp;&nbsp;&nbsp;&nbsp;
        <FormLabel> { data.name} </FormLabel>
    </div>
}