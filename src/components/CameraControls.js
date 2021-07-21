import './CameraControls.css';

const CameraControls = ({ cameraDefaultPosition }) => {
  const [x, y, z] = cameraDefaultPosition;
  const controlDefs = [
    {
      text: 'reset',
      action: () => {},
    },
  ];
  const controls = controlDefs.map(({ text, action }) => (
    <button disabled className="controlItem" onClick={action} key={text}>
      {text}
    </button>
  ));

  return (
    <div className="cameraControls">
      <b>camera:</b>
      {controls}
    </div>
  );
};

export default CameraControls;
