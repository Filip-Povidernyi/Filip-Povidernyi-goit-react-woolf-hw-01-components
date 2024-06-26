import user from '../data/user.json'
import Profile from './Profile/Profile'

import data from '../data/data.json'
import Statistics from './Statistics/Statistics'

import friends from '../data/friends.json'
import FriendList from './Friends/FriendList'

import transactions from '../data/transactions.json'
import TransActionHistory from './TransActionHistory/TransActionHistory'


export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data}></Statistics>
      <FriendList friends={friends} />
      <TransActionHistory items={transactions}/>
    </>
  );
}