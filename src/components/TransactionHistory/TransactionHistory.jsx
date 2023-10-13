import css from './TransactionHistory.module.css';

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
            <tbody key={id}>
              <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
};
