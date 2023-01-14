import { showAlertPopup } from "../helper/Alerts"

const onAuth = (email: string, password: string) =>{
        if(email === "" || password === ""){
            showAlertPopup("Authentication", "All fields are required")
        }else{

        }
}
