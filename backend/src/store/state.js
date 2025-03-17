const store = {
    user: {
            // token: localStorage.getItem('TOKEN'),
            token: sessionStorage.getItem("TOKEN"),
            data: {},
        },
        products:{
            loading:false,
            data:[],
            links:[],
            from:null,
            to:null,
            page:1 ,
            limit:null,
            total:null
        }
}

export default store;