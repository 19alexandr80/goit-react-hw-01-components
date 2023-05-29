import PropTypes from 'prop-types';
import { AvatarFriends, NameFriends, StatusFriend } from './friends.styled';
import defaultImg from 'defaultimq.png';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li>
            <StatusFriend isOnline={isOnline}></StatusFriend>
            <AvatarFriends
                src={avatar ?? defaultImg}
                alt="defaultImg"
                width="48"
            />
            <NameFriends>{name}</NameFriends>
        </li>
    );
};
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
