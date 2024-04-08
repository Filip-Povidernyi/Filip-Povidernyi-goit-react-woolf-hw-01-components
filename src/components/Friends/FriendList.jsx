import FriendListItem from "./FriendItem";
import FriendListStyle from './style.module.css'

const FriendList = ({ friends }) => (
  <div className={FriendListStyle.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </div>
);

export default FriendList;