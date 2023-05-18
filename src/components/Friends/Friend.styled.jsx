import styled from 'styled-components';

export const Friends = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
margin: 0 auto;
width: 300px;
padding: 30px;
`;

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 25px;
`;

export const Item = styled.li`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Status = styled.span`
display: block;
border-radius: 50%;
width: 25px;
height: 25px;
`;

export const Name = styled.p`
font-size: 16px;
font-weight: 600;
`;