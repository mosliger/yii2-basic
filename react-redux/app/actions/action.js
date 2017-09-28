import middleware from './middleware'

export const login = () => {
  return (dispatch, getState) => {
    middleware('demo/yii2-app/basic/login', {
      method: 'POST',
      body: {
        'username': 'mosliger1',
        'password': '123456'
      }
    })
    .then((res) => {
      console.log('login >>>', res)
    })
  }
}

export const logOut = () => {
  return (dispatch, getState) => {
    middleware('demo/yii2-app/basic/logout', {
      method: 'POST',
      body: {}
    })
    .then((res) => {
      console.log('logOut >>>', res)
    })
  }
}

export const signup = () => {
  return (dispatch, getState) => {
    middleware('demo/yii2-app/basic/signup', {
      method: 'POST',
      body: {
        'username': 'mosl23iger',
        'password': '123456',
        'email': 'moslig32ere31ei@gmail.com',
        'firstname': 'm',
        'lastname': 'e'
      }
    })
    .then((res) => {
      console.log('signup >>>', res)
    })
  }
}
