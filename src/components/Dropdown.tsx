import Select from 'react-select';

type ExerciseFormProps = {
    complexity: string;
    setComplexity: React.Dispatch<React.SetStateAction<string>>
    
  }

const Dropdown = ({ complexity,  setComplexity }: ExerciseFormProps) => {

    const options = [
        { value: 'Easy', label: 'EASY', color: 'custom-green' },
        { value: 'Medium', label: 'MEDIUM', color: 'custom-yelow' },
        { value: 'Hard', label: 'HARD', color: 'custom-red' },
      ];
    
      const getColorBasedOnValueText = (value: string) => {
        switch (value) {
          case 'Easy':
            return 'green';
          case 'Medium':
            return 'yellow';
          case 'Hard':
            return 'red';
    
        }
      };
  return (
    <Select
                options={options}
                value={options.find((option) => option.value === complexity)}
                onChange={(selectedOption) => setComplexity(selectedOption?.value || '')}
                styles={{
                  control: (provided) => ({
                    ...provided,
                     fontSize: '.9rem',
                     height: '2.65rem',
                     border: '.09rem solid #0099FF',
                     boxShadow: '0 .4rem 1rem rgba(0, 0, 0, 0.37), 0 0 .1rem rgba(0, 0, 0, 0.37)',
                     borderRadius: '7px',
                     borderColor: 'custom-blue',
                     //backgroundColor:'green',
                    ':hover': {
                        borderColor: '#0099FF',
                       },

                  }),
                  option: (provided, state) => ({
                    ...provided,
                    color: state.isSelected || state.isFocused ? getColorBasedOnValueText(state.data.value) : getColorBasedOnValueText(state.data.value),
                                     
                  }),
                }}
              />
  )
}

export default Dropdown