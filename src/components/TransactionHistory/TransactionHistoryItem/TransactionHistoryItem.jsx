export const TransactionHistoryItem = ({ key_id, type, amount, currency }) => {
  return (
    <tbody key={key_id}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};
