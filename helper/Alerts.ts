import { Alert } from 'react-native'
interface AlertTypes {
    title: string,
    message: string
}
const showAlertPopup = (title: string, message: string) => {
    return Alert.alert(
        title,
        message
    )
}

export {
    showAlertPopup
}