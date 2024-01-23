import React, { useState, useEffect } from 'react';

const RoundProgressBar = ({ progress, strokeWidth, circleRadius, padding }) => {
  const [circumference, setCircumference] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const newCircumference = 2 * Math.PI * circleRadius;
    setCircumference(newCircumference);
    const progressOffset = newCircumference - (progress / 100) * newCircumference;
    setOffset(progressOffset);
  }, [progress, circleRadius]);

  const percentage = `${progress}%`;

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <svg
        width="auto"
        height="auto"
        viewBox={`0 0 ${circleRadius * 2 + padding * 2} ${circleRadius * 2 + padding * 2}`}
        style={{
          maxWidth: '275px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="rgba(215, 98, 219, 1)" />
            <stop offset="100%" stopColor="rgba(255, 114, 93, 1)" />
          </linearGradient>
        </defs>
        <circle
          stroke="#ccc"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={circleRadius}
          cx={circleRadius + padding}
          cy={circleRadius + padding}
        />
        <circle
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          r={circleRadius}
          cx={circleRadius + padding}
          cy={circleRadius + padding}
          transform={`rotate(-90 ${circleRadius + padding} ${circleRadius + padding})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={circleRadius / 2}
          fill="#000"
        >
          {percentage}
        </text>
      </svg>
    </div>
  );
};

export default RoundProgressBar;
