import css from './TransactionHistory.module.css';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <section className={css.transaction_history_section}>
      <table className={css.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {transactions.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </table>
    </section>
  );
};
