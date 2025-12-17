import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adapt';

@Injectable({
  providedIn: 'root',
})
export class authApiAdaptorService implements Adaptor {

  constructor(){}
  adapt(data?:any){
    return{
      message:data?.message,
      token:data?.token,
      email:data?.user?.email

    }
  }
  
} 
