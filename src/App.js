import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [date,setDate]=useState("");
  const [amount,setAmount]=useState("");
  const [payment,setPayment]=useState("");
  const [remark,setRemark]=useState("");
  const[list,setList]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(date,amount,payment,remark);
    const data={date,amount,payment,remark}
    if(date&&amount&&payment&&remark){
      setList((ls)=>[...ls,data])
      setDate("")
      setAmount("")
      setPayment("")
      setRemark("")
    }

  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Receipt Name</h1>
     <div className="container">
      Date:<input type="text" name="date" value={date} onChange={(e)=>setDate(e.target.value)} id="date"  placeholder='Enter Date'/><br />
      Amount: <input type="text" name="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} id="amount"  placeholder='Enter Amount(in INR)'/><br />
      Payment Mode: <input type="text" name="payment" value={payment} onChange={(e)=>setPayment(e.target.value)} id="payment"  placeholder='Cash, Debit card , Credit card'/><br />
      Remark: <input type="text" name="remark" value={remark} onChange={(e)=>setRemark(e.target.value)} id="remark"  placeholder='Enter remark'/><br />
      <button id='cancel'>CANCEL</button>
      <button id='submit'>SUBMIT</button>
     </div>
    </form>


    {
      list.map((a)=><div className='finallist'>
        <li>{a.date}</li>
        <li>{a.amount}</li>
        <li>{a.payment}</li>
        <li>{a.remark}</li>
      </div>

      )
    }
    </>
  );
}

export default App;
