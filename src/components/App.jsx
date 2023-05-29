import { Profile } from 'components/usercard/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { Friends } from 'components/friends/Friends';
import { TransactionHistory } from 'components/transactionhistory/TransactionHistory';

import userData from 'data/user.json';
import dataStat from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';

export const App = () => {
    return (
        <div>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
            <Statistics stats={dataStat} />
            <Friends friends={friendsData} />
            <TransactionHistory items={transactionsData} />
        </div>
    );
};
