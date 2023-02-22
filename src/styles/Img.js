import styled from "styled-components"

export const Img = styled.img`
    width: ${(props)=> props.width || "auto"};
    height: ${(props)=> props.height || "auto"};
    margin: ${(props)=> props.margin || "0"};
    padding: ${(props)=> props.padding || "0"};
    border-radius: ${(props)=> props.border_radius || "none"};
`