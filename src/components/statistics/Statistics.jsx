import PropTypes from 'prop-types';
import { StatisticsList } from './statistics.styled';

export const Statistics = ({ stats, title }) => {
    return (
        <section>
            {title && <h2>{title}</h2>}
            <StatisticsList>
                {stats.map(({ id, label, percentage }) => {
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
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};
