import PropTypes from 'prop-types';
import classNames from 'classnames';

const TitleWithStroke = ({ backText, category, title, color = 'dark', align = 'center', offset="20" }) => {
  return (
    <div className={classNames('relative titleWithStroke py-5', `theme-${color}`, `text-${align}`)}>
      <h4 className={classNames('font-bold text-xl', `theme-${color}`, 'uppercase', 'category')}>
        {category}
      </h4>
      <h2 className={classNames('font-bold text-2xl lg:text-5xl', `theme-${color}`)}>
        {title}
      </h2>
      <div className={classNames('backTextStroke font-bold', `theme-${color}`, `mt-${offset}`)}>
        {backText}
      </div>
    </div>
  );
};

TitleWithStroke.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backText: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  offset: PropTypes.number,
};


export default TitleWithStroke;