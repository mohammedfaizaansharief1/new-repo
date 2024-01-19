export const Validate = (email,password)=>{
    // eslint-disable-next-line no-useless-escape
    let emailVal = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    let passwordVal = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)

    if(!emailVal) return "Email not valid"
    if(!passwordVal) return "Password not match"
    return null
}