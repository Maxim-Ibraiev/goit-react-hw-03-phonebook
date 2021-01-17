import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {
  return (
    <div>
      <label>
        Find contacts by name
        <br />
        <input
          name="filter"
          autoComplete="off"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
