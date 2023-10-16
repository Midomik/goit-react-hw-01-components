import { Profile } from './Profile/Profile';
import userData from './data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './data/data.json';

import { FriendList } from './FriendList/FriendList';
import friendsData from './data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionData from './data/transactions.json';

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
