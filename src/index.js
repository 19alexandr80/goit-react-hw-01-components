import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/usercard/App';
import { Statistics } from 'components/statistics/Statistics';
import { Friends } from 'components/friends/Friends';
import { TransactionHistory } from 'components/transactionhistory/TransactionHistory';
import './index.css';
import pen from './user.json';
import dataStat from './data.json';
import friendsData from './friends.json';
import transactionsData from './transactions.json';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App
            name={pen.username}
            tag={pen.tag}
            location={pen.location}
            avatar={pen.avatar}
            followers={pen.stats.followers}
            views={pen.stats.views}
            likes={pen.stats.likes}
        />
        <Statistics grop={dataStat} />
        <Friends prop={friendsData} />
        <TransactionHistory prop={transactionsData} />
    </React.StrictMode>
);
