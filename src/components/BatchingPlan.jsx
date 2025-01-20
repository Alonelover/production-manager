import React, { useState } from 'react';
import '../styles/BatchingPlan.css';

/**
 * 配料方案组件
 * 用于输入目标重量和元素占比，生成最优配料方案
 */
const BatchingPlan = () => {
  // 状态管理
  const [targetWeight, setTargetWeight] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showErrorMessages, setShowErrorMessages] = useState(false); // 控制错误消息显示
  
  // 元素目标范围状态
  const [elementRanges, setElementRanges] = useState([
    { element: 'C', upper: '', lower: '', target: '', hasError: false, errorMessage: '' },
    { element: 'Mn', upper: '', lower: '', target: '', hasError: false, errorMessage: '' },
    { element: 'P', upper: '', lower: '', target: '', hasError: false, errorMessage: '' },
    { element: 'Cr', upper: '', lower: '', target: '', hasError: false, errorMessage: '' },
    { element: 'Ni', upper: '', lower: '', target: '', hasError: false, errorMessage: '' },
    { element: 'Mo', upper: '', lower: '', target: '', hasError: false, errorMessage: '' },
    { element: 'Si', upper: '', lower: '', target: '', hasError: false, errorMessage: '' },
  ]);

  // 添加新的状态
  const [editingWeights, setEditingWeights] = useState({}); // 存储正在编辑的重量
  const [showConfirmButton, setShowConfirmButton] = useState(false); // 控制确认修改按钮显示
  const [batchingData, setBatchingData] = useState([
    { name: '高锰铬铁', code: 'HA231142', weight: 30, price: 13, total: 390 },
    { name: '高铬铁钢', code: 'HA240091', weight: 20, price: 13, total: 260 },
    { name: '金属铬', code: 'H2022073388', weight: 14, price: 60, total: 840 },
    { name: 'WCB 钢料', code: 'G2023087756', weight: 230, price: 2.6, total: 598 },
    { name: 'S-80 料头', code: 'L20240719KL', weight: 930, price: 10, total: 9300 },
    { name: '955 料头', code: 'L20203912', weight: 25, price: 4, total: 100 },
    { name: '10 料头', code: 'L202208DHC', weight: 1095, price: 2.2, total: 2409 },
    { name: '11 钢锭', code: 'G2024018424', weight: 220, price: 2.2, total: 484 },
    { name: '1T', code: '240413F03', weight: 1225, price: 2.89, total: 3540.25 },
    { name: '金属铬', code: 'Y2024798125', weight: 241, price: 60, total: 14460 },
    { name: '铁钢', code: 'B20242222564', weight: 10, price: 2.8, total: 28 },
    { name: '66 钢锭', code: 'G20240798HG', weight: 60, price: 9.5, total: 570 },
  ]);

  // 修改处理元素范围输入变化的函数
  const handleElementChange = (index, field, value) => {
    const newRanges = [...elementRanges];
    newRanges[index] = {
      ...newRanges[index],
      [field]: value,
      hasError: false,
      errorMessage: ''
    };
    setElementRanges(newRanges);
    // 当修改上下限时，隐藏结果区域，等待用户点击确定按钮
    setShowResult(false);
  };

  // 验证所有输入
  const validateInputs = () => {
    let isValid = true;
    let newRanges = [...elementRanges];
    setShowErrorMessages(true);

    // 验证目标重量
    if (!targetWeight || targetWeight <= 0) {
      setHasError(true);
      isValid = false;
    }

    // 验证元素范围
    newRanges = newRanges.map(range => {
      let errorMessage = '';
      
      if (!range.upper && !range.lower) {
        errorMessage = '请输入上下限值';
      } else if (!range.upper) {
        errorMessage = '请输入上限值';
      } else if (!range.lower) {
        errorMessage = '请输入下限值';
      } else if (Number(range.upper) < Number(range.lower)) {
        errorMessage = '上限应大于下限';
      }

      const isRangeValid = !errorMessage;

      return {
        ...range,
        hasError: !isRangeValid,
        errorMessage
      };
    });

    setElementRanges(newRanges);
    return isValid && !newRanges.some(range => range.hasError);
  };

  // 修改确定按钮处理函数
  const handleConfirm = () => {
    if (validateInputs()) {
      // 重新生成配料方案
      const newBatchingData = generateNewBatchingPlan();
      setBatchingData(newBatchingData);
      
      // 更新目标值
      const newElementRanges = elementRanges.map(range => ({
        ...range,
        target: ((Number(range.upper) + Number(range.lower)) / 2).toFixed(4)
      }));
      setElementRanges(newElementRanges);
      
      // 重置编辑状态
      setEditingWeights({});
      setShowConfirmButton(false);
      
      // 显示结果
      setShowResult(true);
      setHasError(false);
    }
  };

  // 添加生成新配料方案的函数
  const generateNewBatchingPlan = () => {
    // 这里可以根据实际需求计算新的配料方案
    // 目前使用模拟数据，你可以替换为实际的计算逻辑
    return [
      { 
        name: '高锰铬铁', 
        code: 'HA231142', 
        weight: Math.floor(Math.random() * 50) + 20, 
        price: 13, 
        get total() { return (this.weight * this.price).toFixed(2) }
      },
      { 
        name: '高铬铁钢', 
        code: 'HA240091', 
        weight: Math.floor(Math.random() * 40) + 15, 
        price: 13, 
        get total() { return (this.weight * this.price).toFixed(2) }
      },
      // ... 其他物料数据，可以根据需要动态生成
    ].map(item => ({
      ...item,
      total: (item.weight * item.price).toFixed(2)
    }));
  };

  // 处理重量编辑
  const handleWeightChange = (index, value) => {
    const newEditingWeights = {
      ...editingWeights,
      [index]: value
    };
    setEditingWeights(newEditingWeights);
    setShowConfirmButton(true);
  };

  // 确认修改重量
  const handleWeightConfirm = () => {
    // 更新配料数据
    const newBatchingData = batchingData.map((item, index) => {
      if (editingWeights[index]) {
        const newWeight = Number(editingWeights[index]);
        return {
          ...item,
          weight: newWeight,
          total: (newWeight * item.price).toFixed(2)
        };
      }
      return item;
    });

    setBatchingData(newBatchingData);
    
    // 重新计算目标值
    const newElementRanges = elementRanges.map(range => {
      // 这里可以根据实际需求调整计算逻辑
      const newTarget = ((Number(range.upper) + Number(range.lower)) / 2 * 1.1).toFixed(4);
      return {
        ...range,
        target: newTarget
      };
    });

    setElementRanges(newElementRanges);
    setEditingWeights({});
    setShowConfirmButton(false);
  };

  return (
    <div className="batching-plan">
      {/* 目标重量输入区域 */}
      <div className={`target-weight-section ${hasError ? 'has-error' : ''}`}>
        <label>目标重量</label>
        <input 
          type="number" 
          value={targetWeight} 
          onChange={(e) => {
            setTargetWeight(e.target.value);
            setHasError(false);
          }}
          placeholder="请输入目标重量"
        /> kg
        {hasError && showErrorMessages && 
          <span className="error-message">请输入有效的目标重量</span>
        }
      </div>

      {/* 元素目标范围表格 */}
      <div className="element-ranges-section">
        <h3>目标元素范围</h3>
        <table>
          <thead>
            <tr>
              <th>项目</th>
              {elementRanges.map(range => (
                <th key={range.element}>{range.element}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>上限值 (%)</td>
              {elementRanges.map((range, index) => (
                <td key={`${range.element}-upper`} className={range.hasError ? 'has-error' : ''}>
                  <input
                    type="number"
                    value={range.upper}
                    onChange={(e) => handleElementChange(index, 'upper', e.target.value)}
                    placeholder="上限值"
                  />
                  {range.hasError && showErrorMessages && 
                    <div className="error-tooltip">{range.errorMessage}</div>
                  }
                </td>
              ))}
            </tr>
            <tr>
              <td>下限值 (%)</td>
              {elementRanges.map((range, index) => (
                <td key={`${range.element}-lower`} className={range.hasError ? 'has-error' : ''}>
                  <input
                    type="number"
                    value={range.lower}
                    onChange={(e) => handleElementChange(index, 'lower', e.target.value)}
                    placeholder="下限值"
                  />
                </td>
              ))}
            </tr>
            {/* 目标值行只在验证通过且显示结果时显示 */}
            {showResult && (
              <tr>
                <td>目标值 (%)</td>
                {elementRanges.map((range, index) => (
                  <td key={`${range.element}-target`}>
                    {range.target}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
        <div className="confirm-button-container">
          <button className="btn-confirm" onClick={handleConfirm}>确定</button>
        </div>
      </div>

      {/* 配料方案结果区域 */}
      {showResult && (
        <div className="batching-result-section show">
          <div className="result-header">
            <h3>配料方案信息</h3>
            <div className="result-actions">
              {showConfirmButton && (
                <button 
                  className="btn-confirm-weight"
                  onClick={handleWeightConfirm}
                >
                  确认修改
                </button>
              )}
              <span className="total-price">
                配料合计：{batchingData.reduce((sum, item) => sum + Number(item.total), 0).toFixed(2)}元
              </span>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>物料名称</th>
                  <th>物料批次号</th>
                  <th>重量 (kg)</th>
                  <th>单价 (元/kg)</th>
                  <th>小计 (元)</th>
                </tr>
              </thead>
              <tbody>
                {batchingData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td className="weight-cell">
                      <input
                        type="number"
                        value={editingWeights[index] ?? item.weight}
                        onChange={(e) => handleWeightChange(index, e.target.value)}
                        className="weight-input"
                      />
                    </td>
                    <td>{item.price}</td>
                    <td>{editingWeights[index] 
                      ? (Number(editingWeights[index]) * item.price).toFixed(2) 
                      : item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BatchingPlan; 