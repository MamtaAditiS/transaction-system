import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from 'react-select'

const transOptions = [
    {
        label: 'Credit',
        value: 'Credit'
    }, 
    {
        label: 'Debit', 
        value: 'Debit'
    }
]

function TransModal (props) {

    return(
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header>{props.title}</Modal.Header>
            <Modal.Body>
                <div>
                    <div className="form-group row">
                        <div className="col-sm-4">Transaction Type </div>
                        <div className="col-sm-8"> 
                            <Select options={transOptions} onChange={(data) => props.onChange({ ...props.data, 'transType': data.value })}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4"> Amount</div>
                        <div className="col-sm-8"> 
                            <input className="full-width" onChange={(e) => props.onChange({ ...props.data, 'amount': e.target.value > 0 ? e.target.value : 0  })}/> </div>
                    </div>
                    <div className="form-group row"> 
                        <div className="col-sm-4">Description</div>
                        <div className="col-sm-8"> <input className="full-width" onChange={(e) => props.onChange({ ...props.data, 'desc': e.target.value > 0 ? e.target.value : 0  })}/> </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer> 
                <button onClick={props.onHide}>Cancel</button>
                <button onClick={props.onSave}>Save</button>
            </Modal.Footer>
        </Modal>
    )
}

export default TransModal