const CameraControls = ({ cameraDefaultPosition, camera }) => {
  const [x, y, z] = cameraDefaultPosition;
  const controlDefs = [
    {
      text: 'reset camera',
      action: () => {
        camera.position.set(x, y, z);
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
