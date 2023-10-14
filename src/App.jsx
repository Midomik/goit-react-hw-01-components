import { Profile } from 'components/Profile/Profile';
import userData from './components/data/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from './components/data/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friendsData from './components/data/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactionData from './components/data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friendsData} />

      <TransactionHistory transactions={transactionData} />
    </div>
  );
};
