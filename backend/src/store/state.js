const store = {
    user: {
            // token: localStorage.getItem('TOKEN'),
            token: sessionStorage.getItem("TOKEN"),
            data: {},
        },
        products:{
            loading:false,
            data:[]
        }
}

export default store;