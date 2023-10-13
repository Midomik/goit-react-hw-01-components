import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  console.log(friends);

  return (
    <section className={css.friends_section}>
      <ul className={css.friend_list}>
        {friends.map(item => {
          const { avatar, name, isOnline, id } = item;
          return (
            <li key={id} className={css.item}>
              {isOnline ? (
                <span className={css.online_point}></span>
              ) : (
                <span className={css.not_online_point}></span>
              )}

              <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
