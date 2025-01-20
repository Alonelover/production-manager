import React from 'react';

const ProcessSteps = ({ currentProcess }) => {
  const processes = [
    { id: 'A', status: '未开始', label: 'A#P - 未开始' },
    { id: 'B', status: '出炉', label: 'B#P - 出炉' },
    { id: 'C', status: '出炉', label: 'C#P - 出炉' },
    { id: 'D', status: '浇注', label: 'D#P - 浇注' },
    { id: 'E', status: '浇注', label: 'E#P - 浇注' },
    { id: 'F', status: '浇注', label: 'F#P - 浇注' },
    { id: 'G', status: '未开始', label: 'G#P - 未开始' },
    { id: 'H', status: '未开始', label: 'H#P - 未开始' },
  ];

  return (
    <div className="process-steps">
      {processes.map((process) => (
        <div 
          key={process.id}
          className={`process-step ${currentProcess === process.id ? 'active' : ''}`}
        >
          {process.label}
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps; 