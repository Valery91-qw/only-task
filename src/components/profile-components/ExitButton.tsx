import styled from "styled-components";

const Button = styled.button`
padding: 20px 70px;  
font-weight: 700;  
font-size: 18px;
line-height: 22px;  
background-color: #F5F5F5;
border: none;
cursor: pointer;  
`

const ExitButton = () => {
    return(
        <Button>
            Выйти
        </Button>
    )
}
export default ExitButton;