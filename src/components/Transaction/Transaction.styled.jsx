import styled from 'styled-components';

export const TransactionTable = styled.table`
background-color: ghostwhite;
padding: 50px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width: 100%;
margin: 0 auto;
`;

export const TableRow = styled.tr`
background-color: lightsteelblue;
&:nth-child(2n){
        background-color: lightblue;
    };
`;

export const TableCeil = styled.th`
padding: 10px;
background-color: lightskyblue;
`;

export const TableBodyCeil = styled.td`
padding: 10px;
`;
