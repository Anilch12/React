import {createSlice, configureStore, createAsyncThunk } from  '@reduxjs/toolkit'


const transactionData=[];
const data={
    balance:0,
    fullName:"",
    moblie:""
}
const FeatchApiState={
    Status:"",
    user:[],
    error:""
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
const Transcation=createSlice({
    name: 'transcation',
    initialState:transactionData,
    reducers:{
        addTransition:(state,action)=>{
            state.push(action.payload)
        }
    }
})

const userDataSlice = createSlice({
  name: "featchApi",
  initialState: FeatchApiState,
  extraReducers: (res) => {
    res
      .addCase(fetchUserData?.pending, (state) => {
        state.Status = "pending";
      })
      .addCase(fetchUserData?.fulfilled, (state, action) => {
        state.Status = "Completed";
        state.user = action.payload;
      })
      .addCase(fetchUserData?.rejected, (state, action) => {
        state.Status = "Rejected";
        state.error = action.error;
        state.user = [];
      });
  },
});

export let fetchUserData = createAsyncThunk('User/fetch', async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      throw error; 
    }
  });
export const {WithDraw,Deposit,UpdatefullName,UpdateMoblie,reset}=userSlice.actions
export const {addTransition}=Transcation.actions
const Store=configureStore({
    reducer:{
        user:userSlice?.reducer,
        transaction:Transcation.reducer,
        userData:userDataSlice?.reducer,
    }
})

export default Store;