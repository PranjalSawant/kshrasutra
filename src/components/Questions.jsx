import React from 'react';

const Questions = ({ id, text, type, options, value, onChange, onBlur, error }) => {
  return (
    <div className='row mb-3'>
      <div className="row rows-col-2">
      <div className='col-6'>
        <label htmlFor={id} className='form-label'>{text}</label>
      
      {type === 'text' && (
        <div className=''>
          <input
            type="text"
            className='form-control'
            id={id}
            value={value}
            onChange={(e) => onChange(id, e.target.value)}
            onBlur={() => onBlur(id)}
          />
        </div>
      )}
      </div>
      </div>
      {type === 'radio' && (
        <div className='col-12'>
          {options.map((option) => (
            <div className='form-check' key={option}>
              <input
                type="radio"
                className='form-check-input'
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
      {type === 'checkbox' && (
        <div className='col-12'>
          {options.map((option) => (
            <div className='form-check' key={option}>
              <input
                type="checkbox"
                className='form-check-input'
                name={id}
                id={`${id}-${option}`}
                value={option}
                checked={value.includes(option)}
                onChange={(e) => {
                  if (e.target.checked) {
                    onChange(id, [...value, option]);
                  } else {
                    onChange(id, value.filter((v) => v !== option));
                  }
                }}
              />
              <label htmlFor={`${id}-${option}`} className='form-check-label'>{option}</label>
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className='col-12'>
          <div className="text-danger">{error}</div>
        </div>
      )}
    </div>
  );
};

export default Questions;
