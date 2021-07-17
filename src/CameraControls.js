const CameraControls = () => {
  const controlDefs = [{ text: 'reset camera', action: () => null }];
  const controls = controlDefs.map(({ text, action }) => (
    <div as="button" className="controlItem" onClick={action}>
      {text}
    </div>
  ));

  return <div className="cameraControls">{controls}</div>;
};

export default CameraControls;
