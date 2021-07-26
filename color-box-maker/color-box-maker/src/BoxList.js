import { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';

const BoxList = () => {
  const INITAL_STATE = [];
  const [boxList, setBox] = useState(INITAL_STATE);
  const addBox = (newBox) => {
    setBox((boxList) => [...boxList, { ...newBox, id: uuidv4() }]);
  };
  const RemoveItem = (id) => {
    const updatedBoxList = boxList.filter((box) => box.id !== id);
    setBox(updatedBoxList);
  };

  return (
    <>
      <NewBoxForm addBox={addBox} />
      <div className='Boxlist'>
        {boxList.map((box) => (
          <Box
            remove={RemoveItem}
            height={box.height}
            width={box.width}
            bgclr={box.bgclr}
            key={box.id}
            id={box.id}
          />
        ))}
      </div>
    </>
  );
};

export default BoxList;
