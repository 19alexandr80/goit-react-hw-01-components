import PropTypes from 'prop-types';
import { Transaction, TitleTransaction } from './transactionHistory.styled';
export const TransactionHistory = ({ prop }) => {
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
                    {prop.map(({ id, type, amount, currency }) => {
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
    prop: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
