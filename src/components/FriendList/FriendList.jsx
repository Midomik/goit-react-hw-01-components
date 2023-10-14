import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  console.log(friends);

  return (
    <section className={css.friends_section}>
      <ul className={css.friend_list}>
        {friends.map(item => {
          const { avatar, name, isOnline, id } = item;
          return (
            <FriendListItem
              key_id={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    </section>
  );
};
