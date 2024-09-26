import { useDispatch, useSelector } from "react-redux";
import { reset } from "./Store";


const Account=()=>{
    const dispatch=useDispatch();
   let data= useSelector((state)=>{
        return state?.user
    })
    let Transcationdata= useSelector((state)=>{
        return state?.transaction
    })


    const handleReset=()=>{
        dispatch(reset())
    }

    return (
      <>
        <div className="container">
          <h2 className="text-primary">Account Details </h2>
          <table className="table w-50">
            <thead>
              <tr>
                <th scope="col">Balance</th>
                <th scope="col">Full Name</th>
                <th scope="col">Pho No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data?.balance}</td>
                <td>{data?.fullName}</td>
                <td>{data?.moblie}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex mb-2">
            <button type="button" className="btn btn-secondary btn-sm" onClick={()=>{handleReset()}}>reset</button>
            </div>
        </div>
        <div className="container">
          <h2 className="text-primary">Transcation  Details </h2>
          <table className="table w-50">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Full Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
                {Transcationdata?.map((res,index)=>{
                    return (
                      <>
                        <tr key={index}>
                          <td>{res?.Type}</td>
                          <td>{res?.FullName}</td>
                          <td>{res?.Amount}</td>
                          <td>{res?.Date}</td>
                        </tr>
                      </>
                    );
                })}
            </tbody>
          </table>
          <div className="d-flex mb-2">
            <button type="button" className="btn btn-secondary btn-sm" onClick={()=>{handleReset()}}>reset</button>
            </div>
        </div>
      </>
    );

}
export default Account;