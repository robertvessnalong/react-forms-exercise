import { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const INITAL_STATE = {
    height: '',
    width: '',
    bgclr: '',
  };

  const [formData, setFormData] = useState(INITAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='height'>Height:</label>
      <input
        id='height'
        type='text'
        name='height'
        placeholder='Height of Box'
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor='width'>Width:</label>
      <input
        id='width'
        type='text'
        name='width'
        placeholder='Width of Box'
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor='bgclr'>Background Color:</label>
      <input
        id='bgclr'
        type='text'
        name='bgclr'
        placeholder='Background Color of Box'
        value={formData.bgclr}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
