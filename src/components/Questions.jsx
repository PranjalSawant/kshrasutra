const Questions = ({ id, text, type, options, value, onChange, onBlur, error }) => {
  return (
    <div className='row mb-3'>
      <label htmlFor={id} className='form-label text-green fw-bold'>{text}</label>

      {type === 'text' && (
        <input
          type="text"
          className={`form-control bg-transparent text-green fw-bold ${error ? 'is-invalid' : ''}`}
          id={id}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          onBlur={() => onBlur(id)}
        />
      )}

      {type === 'radio' && (
        <div>
          {options.map((option) => (
            <div className='form-check text-green fw-bold' key={option}>
              <input
                type="radio"
                className='form-check-input text-green fw-semibold'
                name={id}
                id={`${id}-${option}`}
                value={option}
                checked={value === option}
                onChange={(e) => onChange(id, e.target.value)}
              />
              <label htmlFor={`${id}-${option}`} className='form-check-label'>{option}</label>
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  );
};

export default Questions;
