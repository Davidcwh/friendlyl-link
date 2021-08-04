import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({
    border,
    children
}: ContainerProps) => {
    return (
        <StyledContainer border={border}>
            {children}
        </StyledContainer>
    )
    
}

export default Container;
