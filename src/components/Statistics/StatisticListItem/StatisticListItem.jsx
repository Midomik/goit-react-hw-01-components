import css from '../Statistics.module.css';

export const StatisticListItem = ({ key_id, label, percentage }) => {
  return (
    <li key={key_id} className={css.item}>
      <span className={css.label}>{label}: </span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};
