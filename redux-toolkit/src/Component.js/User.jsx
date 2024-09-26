import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./Store";

const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.user);
  const status=useSelector((state)=>state.userData.Status);
  const error=useSelector((state)=>state.userData.error);

  console.log("userData", userData);
  console.log("error", error);
  console.log("status", status);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className="container">
          <h2 className="text-primary">User Details </h2>
          <table className="table w-50">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
            {userData?.map((res,index)=>{
                    return (
                      <>
                        <tr key={index}>
                          <td>{res?.name}</td>
                          <td>{res?.email}</td>
                          <td>{res?.phone}</td>
                          <td>{res?.website}</td>
                        </tr>
                      </>
                    );
                })}
            </tbody>
          </table>
        </div>
  );
};

export default User;