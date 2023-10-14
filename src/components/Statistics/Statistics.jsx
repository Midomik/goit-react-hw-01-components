import css from './Statistics.module.css';
import { StatisticListItem } from './StatisticListItem/StatisticListItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(item => {
          const { id, label, percentage } = item;
          return (
            <StatisticListItem key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </section>
  );
};
