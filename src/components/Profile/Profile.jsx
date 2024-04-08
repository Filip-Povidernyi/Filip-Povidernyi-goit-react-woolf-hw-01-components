
import profileStyle from './style.module.css'

const Profile = ({username, avatar, tag, location, stats}) => {
    return (<div className={profileStyle.profile}>
        <div className={profileStyle.container}>
        <div className={profileStyle.description}>
            <img
                src={avatar}
                alt={username}
                className={profileStyle.avatar}
            />
            <p className={profileStyle.name}>{username}</p>
            <p className={profileStyle.tag}>@{tag}</p>
            <p className={profileStyle.location}>{location}</p>
        </div>

        <ul className={profileStyle.stats}>
            <li className={profileStyle.listItem}>
                <span className={profileStyle.label}>Followers</span>
                <span className={profileStyle.quantity}>{stats.followers}</span>
            </li>
            <li className={profileStyle.listItem}>
                <span className={profileStyle.label}>Views</span>
                <span className={profileStyle.quantity}>{stats.views}</span>
            </li>
            <li className={profileStyle.listItem}>
                <span className={profileStyle.label}>Likes</span>
                <span className={profileStyle.quantity}>{stats.likes}</span>
            </li>
            </ul>
        </div>
    </div>)
}

export default Profile
