import styled from 'styled-components';

export const Statistics = styled.section`
background-color: azure;
display: flex;
flex-direction: column;
align-items: center;
padding: 50px;
`;

export const StatList = styled.ul`
display: flex;
justify-content: space-evenly;
width: 100%;
`;

export const List = styled.li`
width: 100%;
border: 1px solid black;
`;

export const DataInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
padding: 15px;
width: 100%;
`;

export const Percentage = styled.span`
font-size: 20px;
font-weight: 600;
`;

export const SectionTitle = styled.h2`
font-size: 25px;
font-weight: 800;
background-color: white;
padding: 15px;
width: 100%;
text-align: center;
margin: 0;
border: 1px solid black;
`;