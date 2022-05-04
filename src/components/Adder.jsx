import React, {useState} from 'react';

const Adder = () => {
  const [sum, setSum] = useState(0);
  const [increase, setIncrease] = useState('1');

  const add = () => {
    const parsed = parseInt(increase);
    if (isNaN(parsed)) {
      alert('増加量には数字を入力してください');
    } else if (parsed < 0) {
      alert('増加量には0以上の値を入力してください');
    } else {
      setSum(sum + parsed);
    }
  };

  const reset = () => {
    setSum(0);
  };

  const changeIncrease = (e) => {
    const value = e.target.value;
    const parsed = parseInt(value);
    // 空文字か0以上の数字のみ入力可
    if (value === '' || (!isNaN(parsed) && parsed >= 0)) {
      setIncrease(value);
    } else {
      alert('0以上の数字を入力してください');
    }
  };

  return (
    <div className="adder">
      <h2>合計：{sum}</h2>
      <p>増加量：<input type="number" value={increase} onChange={changeIncrease}/></p>
      <button onClick={add}>足す</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default Adder;