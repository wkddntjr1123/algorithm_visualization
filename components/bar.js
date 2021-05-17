//Bar컴포넌트
const Bar = (props) => {
  const { value, index } = props;
  const style = { height: `${value * 0.69}vh`, left: `${index}%` };
  return (
    <div className="bar" style={style}>
      <span className="value">{value}</span>
      <style jsx>
        {`
          .bar {
            position: absolute;
            width: 0.9%;
            background-color: #d08181;
            text-align: center;
          }
          .value {
            display: inline-block;
            transform: rotateX(180deg);
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default Bar;
