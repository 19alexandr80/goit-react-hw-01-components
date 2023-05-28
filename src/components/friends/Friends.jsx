import PropTypes from 'prop-types';
import defauilImg from 'defaultimq.png';
import {
    TitleFriends,
    AvatarFriends,
    NameFriends,
    StatusFriend,
    FriendsList,
} from './friends.styled';

export const Friends = ({ prop }) => {
    return (
        <section>
            <TitleFriends>Friends</TitleFriends>
            <FriendsList>
                {prop.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li key={id}>
                            <StatusFriend isOnline={isOnline}></StatusFriend>
                            <AvatarFriends
                                src={avatar ?? defauilImg}
                                alt=""
                                width="48"
                            />
                            <NameFriends>{name}</NameFriends>
                        </li>
                    );
                })}
            </FriendsList>
        </section>
    );
};
Friends.propTypes = {
    prop: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
