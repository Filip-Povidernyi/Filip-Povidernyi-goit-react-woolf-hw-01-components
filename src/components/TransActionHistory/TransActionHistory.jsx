import transactionsStyle from './style.module.css'

const TransActionHistory = ({ items }) => {
    return (<table className={transactionsStyle.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) =>
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            )}
        </tbody>
    </table>)
};

export default TransActionHistory