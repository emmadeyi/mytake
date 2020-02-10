import { GET_TAKES, GET_TAKE, DELETE_TAKE, ADD_TAKE } from './type';
import axios from 'axios';

//Configure CSRF Token for React axios
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export const getTake = (id) => (dispatch) => {
    axios.get(`http://127.0.0.1:8000/api/takes/${id}`)
        .then(res => {
            dispatch({
                type: GET_TAKE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getTakes = () => (dispatch) => {
    axios.get('http://127.0.0.1:8000/api/takes/')
        .then(res => {
            dispatch({
                type: GET_TAKES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addTake = (take) => (dispatch) => {
    axios({
        method: 'post',
        url: `http://127.0.0.1:8000/api/takes/`,
        params: {
            title: take.title,
            body: take.body,
            access: take.access,
            _method: "POST"
        }
    }).then(res => {
        dispatch({
            type: ADD_TAKE,
            payload: res.data,
        })
    })
}

export const deleteTake = (id) => (dispatch) => {
    axios({
        method: 'post',
        url: `http://127.0.0.1:8000/api/takes/${id}`,
        params: {
            _method: "DELETE"
        }
    }).then(res => {
        dispatch({
            type: DELETE_TAKE,
            payload: res.data
        })
    })
}