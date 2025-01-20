import React from 'react';

const ProductionTable = () => {
  const productionData = [
    {
      id: 1,
      orderNo: '091418162',
      productCode: 'BYJSD4',
      productName: 'BYM-1',
      material: 'HP-1S',
      spec: 'S02',
      weight: 22.2,
      productionLine: '浇铸线',
      planQuantity: 25,
      completedQuantity: 15,
    },
    // ... 更多数据
  ];

  return (
    <div className="production-table">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>订单号</th>
            <th>产品编号</th>
            <th>产品名称</th>
            <th>材质</th>
            <th>规格</th>
            <th>产品重量</th>
            <th>生产线</th>
            <th>计划数量</th>
            <th>完成数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {productionData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.orderNo}</td>
              <td>{item.productCode}</td>
              <td>{item.productName}</td>
              <td>{item.material}</td>
              <td>{item.spec}</td>
              <td>{item.weight}</td>
              <td>{item.productionLine}</td>
              <td>{item.planQuantity}</td>
              <td>{item.completedQuantity}</td>
              <td>
                <button className="btn-operation">一键完工</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductionTable; 