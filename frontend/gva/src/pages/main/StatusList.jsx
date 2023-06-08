import styled from "styled-components"

export const Empty = styled.input`
    background-color: #CCC;
`
export const Good = styled.input`
    background-color: green;
`
export const Bad = styled.input`
    background-color: orange;
`
export const Critical = styled.input`
    background-color: red;
`

export const StatusList = () => {

    return(
        <Good
            type="radio"
            name="bed"
            value={"good"}
        > o </Good>
    )
}