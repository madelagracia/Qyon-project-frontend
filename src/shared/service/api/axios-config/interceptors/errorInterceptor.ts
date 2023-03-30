import { AxiosError } from "axios";

export const errorInterceptor = (error:AxiosError) => {
   if(error.message ==='Network Error'){
    return Promise.reject(new Error('Error network connection'))
   }

   if(error.response?.status === 401){
    //TODO
   }

   return Promise.reject(error);
}