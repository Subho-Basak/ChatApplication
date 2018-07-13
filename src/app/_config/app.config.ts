import {IAppConfig} from './iapp.config';
export const AppConfig:IAppConfig = {
    endpoints:{
        
    },
    modalProperties:{
     width:"400px",
    },
    snackBarProperties:{
        snackBarMessage:{
            CONTACT_BLOCKED:"Contact has been blocked",
            CONTACT_UPDATED:"Contact number has been updated",
            PROFILE_UPDATED:"Profile has been updated successfully",
            NOTIFICATION_TURNED_ON:"Notification turned on",
            NOTIFICATION_TURNED_OFF:"Notification turned off",
        },
        snackBarDuration:80000
    }
}