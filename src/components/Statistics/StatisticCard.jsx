import PropTypes from 'prop-types';
import { DataInfo, Percentage } from './Statistics.styled';


export const StatisticCard = ({
  item: { label, percentage },
}) => {
  return (
      <DataInfo>
    <span>{label}</span>
    <Percentage>{percentage}</Percentage>
    </DataInfo>
  );
};

StatisticCard.propTypes = {
    item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};