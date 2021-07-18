const CameraControls = ({ cameraDefaultPosition, setCameraPosition }) => {
  const [x, y, z] = cameraDefaultPosition;
  const controlDefs = [
    {
      text: 'reset camera',
      action: () => {
        setCameraPosition([x, y, z]);
      },
    },
  ];
  const controls = controlDefs.map(({ text, action }) => (
    <div as="button" className="controlItem" onClick={action}>
      {text}
    </div>
  ));

  return <div className="cameraControls">{controls}</div>;
};

export default CameraControls;
