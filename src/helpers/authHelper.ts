export const authHelper = (msg?: string) => {
    let desc;

    if (msg == "Invalid login credentials") {
        desc = 'Please Check your credentials'
    } else if(msg=='Failed to fetch'){
       
        desc = 'Please your internet conection'
    }
    else{
        msg="Check Your Email"
        desc = 'Please confirm the invitation on your email'
    }

    return{
        desc,
        msg
    }
}