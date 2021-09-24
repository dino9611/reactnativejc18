import {axiosInstance} from '../../helpers/axiosInstance';

export const AddToCartAction = (data, userId) => {
  // coding dari ecommerce
  // data object
  return dispatch => {
    //get data user cart
    dispatch({type: 'LoadingCarts'});
    axiosInstance.get(`/users/${userId}`).then(res => {
      let carts = res.data.carts; //array
      // add cart
      // cek ada atau tidak product didalam cart yang ada
      let indexfind = carts.findIndex(val => val.id === data.id);
      //   kalo -1 artinya tidak ada
      if (indexfind < 0) {
        carts.push(data);
      } else {
        carts[indexfind].qty += data.qty;
      }
      //   edit isi cart
      axiosInstance
        .patch(`/users/${userId}`, {carts: carts})
        .then(() => {
          // refresh userdata
          axiosInstance
            .get(`/users/${userId}`)
            .then(res1 => {
              dispatch({type: 'CART', carts: res1.data.carts});
              alert('berhasil');
              dispatch({type: 'AFTERPROCESS'});
            })
            .catch(err => {
              console.log(err);
              dispatch({type: 'AFTERPROCESS'});
            });
        })
        .catch(err => {
          console.log(err);
          dispatch({type: 'AFTERPROCESS'});
        });
    });

    // add cart
  };
};
