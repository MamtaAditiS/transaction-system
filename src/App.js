import React, { useState } from 'react';
import './App.css';
import Modal from './Modal'

const transData = [
  {
    date:'02/20/2020',  
    desc:'Misc.Expenses', 
    credit: 0,
    debit: 3000, 
    running: 1215
  }, 
  {
    date:'02/20/2020',  
    desc:'Misc.Expenses', 
    credit: 3000,
    debit: 0, 
    running: 1215
  },

]

function App() {
  const [ modalState, setModalState] = useState(false) 
  const [ newTrans, onChangeNew] = useState({})
  
  const save = () => {
    console.log( newTrans, "save")
  }

  return (
    <div className="App">
      <div className="title-container col-sm-12"> 
        <div className="col-sm-4 block-display"> 
          <h2>Office Transactions</h2>
        </div>
        <div className="col-sm-8 block-display"> 
          <button  onClick={() => setModalState(true)} type="button"> + Add Transaction</button>
        </div>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Running Balance</th>
          </tr>
        </thead>
        <tbody>
          {transData.map((data, index) => {
            return <tr key={index}>
                <td>{data.date}</td>
                <td>{data.desc}</td>
                <td>{data.credit > 0 ? data.credit : '' }</td>
                <td>{data.debit > 0 ? data.debit : '' }</td>
                <td>{data.running}</td>
              </tr>  
          })}
        </tbody>
      </table>
      <Modal 
        show={modalState}
        data={newTrans}
        onHide={() => setModalState(false)}
        onChange={onChangeNew}
        title={'New Transaction'} 
        onSave={save}/>
    </div>
  );
}

export default App;
