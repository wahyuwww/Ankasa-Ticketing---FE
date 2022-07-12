import axios from 'axios'
// import { ActionTypes } from "../constants/action-types";



export const loginUser = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post(
          `https://avtur-ankasa-ticketing.herokuapp.com/v1/admin/login`,
          dataForm
        );
      const user = result.data.data
      // console.log(result.data.data.token);
      const token = result.data.data.token
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})

       dispatch({
         type: "USER_LOGIN_SUCCESS",
         token: token.data,
         payload: user,
       });
      alert("berhasil")
        navigate('/airlanes')

    } catch (error) {
        console.log(error);
    }
}

export const signUp = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/auth/register`,
      dataForm
    );
    const user = result.data.data;
    
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_PRODUCT",
    });

    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};

// export const signUp = (navigate,dataForm) => {
//     return async (dispatch) => {
      
//          try {
//         dispatch({type: 'USER_REGISTER_PENDING'})
//         const result = await axios.post(
//           "http://localhost:4000/v1/auth/register",
//           dataForm
//         );
//         const user = result.data.data
//         console.log(user);
//         dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
//         navigate('/login')

//     } catch (error) {
//         console.log(error);
//     }
//   };
// };