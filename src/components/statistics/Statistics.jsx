import PropTypes from 'prop-types';
import { StatisticsList } from './statistics.styled';

export const Statistics = ({ grop, title }) => {
    return (
        <section>
            {title && <h2>Upload stats</h2>}
            <StatisticsList>
                {grop.map(({ id, label, percentage }) => {
                    return (
                        <li key={id}>
                            <span>{label}</span>
                            <span>{percentage}%</span>
                        </li>
                    );
                })}
            </StatisticsList>
        </section>
    );
};
Statistics.propTypes = {
    title: PropTypes.string,
    grop: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};
