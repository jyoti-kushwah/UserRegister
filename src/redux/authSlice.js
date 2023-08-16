// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

// const initialState={
//     msg:"",
//     user:'',
//     token:'',
//     loading:'false',
//     error:'',
// }
//  export const signupUser=createAsyncThunk('signupuser',async()=>{
//     const res=await fetch("dddddddddd ",{
//         method:'post',
//         headers:{
//             'content-Type':"application/json"
//         },
//         // body:JSON.stringify(body)
//     })
//     return await res.json()
// })
// const authSlice=createSlice({
//     name:'user',
//     initialState,
//     reducers:{

//     },
//     extraReducers:{
//      [signupUser.pending]:(state,action)=>{
//         state.loading=true
//      },
//      [signupUser.fulfilled]:(state,{payload:{error,msg}})=>{
//         state.loading=false;
//         if(error){
//             state.error=error
//         }else{
//             state.msg=msg
//         }
//      },
//      [signupUser.pending]:(state,action)=>{
//         state.loading=true
//      }

//     }
// })

// export default authSlice.reducer
