import styled from "styled-components"

const Button = styled.span`
    margin-top: 50px;
    background-color: white;
    font-weight: 500;
    width: 100%;
    color:black;
    padding: 10px 20px;
    border-radius: 50px;
    border:0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    `;

const Logo = styled.img`
    height: 25px;
    `;

export default function GithubButton(){
    return <Button>
        <Logo src= "/github-mark.svg" />
        Continue with Github
    </Button>
}