const CameraControls = ({ cameraDefaultPosition, setCameraPosition }) => {
  const [x, y, z] = cameraDefaultPosition;
  const controlDefs = [
    {
      text: 'reset',
      action: () => {
        setCameraPosition(cameraDefaultPosition);
      },
    },
    // {
    //   text: 'invert',
    //   action: () => {
    //     const { x, y, z } = camera.position;
    //     setCameraPosition([x, y, z]);
    //   },
    // },
  ];
  const controls = controlDefs.map(({ text, action }) => (
    <div as="button" className="controlItem" onClick={action} key={text}>
      {text}
    </div>
  ));

  return (
    <div className="cameraControls">
      <b>camera:</b>
      {controls}
    </div>
  );
};

export default CameraControls;
