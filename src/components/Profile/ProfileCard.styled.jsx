import styled from 'styled-components';

export const Profile = styled.div`
background-color: aliceblue;
display: flex;
flex-direction: column;
align-items: center;
padding: 50px;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
background-color: white;
width: 100%;
padding: 20px;
`;

export const Avatar = styled.img`
width: 240px;
height: auto;
border-radius: 50%;
`;

export const Stats = styled.ul`
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
width: 100%;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding: 20px;
width: 100%;
border: 1px solid gray;
`;

export const Name = styled.p`
font-size: 25px;
font-weight: 800;
color: black;
`;

export const Quantity = styled.span`
font-size: 15px;
font-weight: 700;
color: black;
`;