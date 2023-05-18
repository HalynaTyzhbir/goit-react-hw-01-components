import PropTypes from 'prop-types';
import { TransactionTable, TableRow, TableCeil, TableBodyCeil } from './Transaction.styled';

export const TransactionHistory = ({ data }) => {
    return (
<TransactionTable>
  <thead>
    <TableRow>
      <TableCeil>Type</TableCeil>
      <TableCeil>Amount</TableCeil>
      <TableCeil>Currency</TableCeil>
    </TableRow>
  </thead>
    <tbody>
        {data.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
                <TableBodyCeil>{type}</TableBodyCeil>
                <TableBodyCeil>{amount}</TableBodyCeil>
                <TableBodyCeil>{currency}</TableBodyCeil>
            </TableRow>
        ))}
  </tbody>
</TransactionTable>
    );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};