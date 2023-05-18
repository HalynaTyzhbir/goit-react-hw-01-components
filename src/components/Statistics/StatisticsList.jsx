import { StatisticCard } from './StatisticCard';
import PropTypes from 'prop-types';
import { Statistics, StatList, SectionTitle, List } from './Statistics.styled';

export const StatisticsList = ({ title, items }) => {
    return (
<Statistics>
    {title && <SectionTitle>{title}</SectionTitle>}
    <StatList>
      {items.map(item => (
          <List key={item.id} style={{ backgroundColor: getRandomHexColor()}}>
          <StatisticCard item={item} />
        </List>
      ))}
    </StatList>
</Statistics>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}