import friendListItemStyle from './style.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={friendListItemStyle.item}>
    <span className={`${friendListItemStyle.status} ${isOnline ? friendListItemStyle.online : friendListItemStyle.offline}`}></span>
    <img className={friendListItemStyle.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={friendListItemStyle.name}>{name}</p>
  </li>
);

export default FriendListItem;