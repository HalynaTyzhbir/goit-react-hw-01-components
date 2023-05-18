import PropTypes from 'prop-types';
import {Status, Container} from './Friend.styled'

export const FriendCard = ({ item: { avatar, name, isOnline } }) => {
    return (
        <Container>
            <Status style={{ background: (isOnline? "green" : "red") }}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>
        </Container>
    );
};

FriendCard.propTypes = {
    item: PropTypes.shape({
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
    }).isRequired
};