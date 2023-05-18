import { FriendCard } from './FriendCard';
import PropTypes from 'prop-types';
import { Friends, Item } from './Friend.styled';


export const FriendsList = ({ items }) => {
    return (
        <Friends>
        {items.map(item => (
            <Item key={item.id}>
            <FriendCard item={item}/>
        </Item>
        ))}
</Friends>
    );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};