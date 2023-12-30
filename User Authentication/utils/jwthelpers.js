import jwt from "jsonwebtoken"

const jwtToken = ({id, user_name, user_email}) => {

    const user = { id, user_name, user_email };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '20s' })
    const refereshToken = jwt.sign(user, process.env.REFRESH_TOKEN, { expiresIn: '5m' })
    
    return {accessToken, refereshToken}
}

export { jwtToken };