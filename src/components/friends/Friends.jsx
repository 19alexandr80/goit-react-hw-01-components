import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friends/FriendListItem';
import { TitleFriends, FriendsList } from 'components/friends/Friends.styled';

export const Friends = ({ friends }) => {
    return (
        <section>
            <TitleFriends>Friends</TitleFriends>
            <FriendsList>
                {friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <FriendListItem
                            key={id}
                            isOnline={isOnline}
                            avatar={avatar}
                            name={name}
                        />
                    );
                })}
            </FriendsList>
        </section>
    );
};
Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};
