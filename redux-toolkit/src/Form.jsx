import { useState } from "react"
import {UpdateMoblie,UpdatefullName,WithDraw,Deposit, addTransition} from './Store';
import { useDispatch, useSelector } from "react-redux";


export const Form=()=>{
    const [amount,setAmount]=useState('');
    const [name,setName]=useState('');
    const [phonNo,setPhoneNo]=useState('');
    const username=useSelector((state)=>state?.user.fullName)
    const dispatch=useDispatch();
    const handleWithdraw=()=>{
        dispatch(WithDraw(amount))
        dispatch(addTransition({
            Type:'debit',
            Date:new Date().toISOString(),
            FullName:username,
            Amount:amount
        }))
        setAmount(null)
    }
    const handleDeposit=()=>{
        dispatch(Deposit(amount))
        dispatch(addTransition({
            Type:'credit',
            Date:new Date().toISOString(),
            FullName:username,
            Amount:amount
        }))
        setAmount('')
        
    }
    const handleName=()=>{
        dispatch(UpdatefullName(name))
        setName('')
        
    }
    const handlePhoneNo=()=>{
        dispatch(UpdateMoblie(phonNo))
        setPhoneNo('')
    }
    return (
        <>
        <div className="container">

            <h2>Account Form</h2>
            <div className="d-flex mb-2">
                <input type="text" value={amount} className="form-control w-25 me-2" placeholder="Enter Amount" onChange={(e)=>setAmount(e?.target.value)}/>
                <button type="button" className="btn btn-danger btn-sm me-2" onClick={()=>{handleWithdraw()}}>WithDraw</button>
                <button type="button" className="btn btn-info btn-sm" onClick={()=>{handleDeposit()}}>Deposit</button>
            </div>
            <div className="d-flex mb-2">
                <input type="text" value={name} className="form-control  w-25 me-2" placeholder="Enter Full Name" onChange={(e)=>setName(e?.target.value)}/>
                <button type="button" className="btn btn-info btn-sm" onClick={()=>{handleName()}}>Add Name</button>

            </div>
            <div className="d-flex mb-2">
                <input type="number"  value={phonNo}className="form-control  w-25 me-2" placeholder="Enter Moblie no" onChange={(e)=>setPhoneNo(e?.target.value)}/>
                <button type="button" className="btn btn-info btn-sm" onClick={()=>{handlePhoneNo()}}>Add Pho No</button>
            </div>
        </div>
        </>
    )
}