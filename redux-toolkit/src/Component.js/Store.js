import {createSlice, configureStore } from  '@reduxjs/toolkit'


const data={
    balance:0,
    fullName:"",
    moblie:""
}
const userSlice=createSlice({
    name:"User",
    initialState:data,
    reducers:{
        WithDraw:(state,action)=>{
            state.balance-=action.payload
        },
        Deposit:(state,action)=>{
            state.balance+=+action.payload
        },
        UpdatefullName:(state,action)=>{
            state.fullName=action.payload
        },
        UpdateMoblie:(state,action)=>{
            state.moblie=action.payload
        },
        reset:(state)=>{
            state.balance='',
            state.fullName='',
            state.moblie=''
        }

    }
})
const transactionData=[];;
const Transcation=createSlice({
    name: 'transcation',
    initialState:transactionData,
    reducers:{
        addTransition:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {WithDraw,Deposit,UpdatefullName,UpdateMoblie,reset}=userSlice.actions
export const {addTransition}=Transcation.actions
const Store=configureStore({
    reducer:{
        user:userSlice?.reducer,
        transaction:Transcation.reducer
    }
})

export default Store;