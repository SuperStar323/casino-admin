import { 
    SESSION
} from "../../constants"
  
const Auth = (state = {
    session : {}
}, action) => {
    switch (action.type) {
        case SESSION: {
            return { ...state, isSession: true, session: action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
export default Auth;