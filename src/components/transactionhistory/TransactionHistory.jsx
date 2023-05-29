import PropTypes from 'prop-types';
import {
    Transaction,
    TitleTransaction,
} from 'components/transactionhistory/TransactionHistoryStyle.styled';
export const TransactionHistory = ({ items }) => {
    return (
        <section>
            <TitleTransaction>TransactionHistory</TitleTransaction>
            <Transaction>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({ id, type, amount, currency }) => {
                        return (
                            <tr key={id}>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Transaction>
        </section>
    );
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};
