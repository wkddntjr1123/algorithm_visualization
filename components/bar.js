//Bar컴포넌트
const Bar = (props) => {
  const { value, index } = props;
  const style = { height: `${value * 0.69}vh`, left: `${index}%` };
  return (
    <div className="bar" style={style}>
      <style jsx>
        {`
          .bar {
            position: absolute;
            width: 0.9%;
            background-color: #d08181;
          }
        `}
      </style>
    </div>
  );
};

export default Bar;
