const Box = ({ width, height, bgclr, remove, id }) => {
  return (
    <>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: bgclr,
        }}
        className='Box'
      ></div>
      <div className='Remove-Box' onClick={() => remove(id)}>
        X
      </div>
    </>
  );
};

export default Box;
