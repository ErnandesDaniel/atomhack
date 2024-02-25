
import { defineStore } from 'pinia'

import { useAutorizationStore } from '@/modules/auth'

export const useMainDataStore = defineStore('mainData',{

	state:()=>{
		
		return{
			
			errorMessageText:'',

		}
		
	},

	getters:{


    	statusOfAuthorization(){

    		const autorizationStore = useAutorizationStore();

			return autorizationStore.statusOfAuthorization;

    	},

    	authorizationToken(){

    		const autorizationStore = useAutorizationStore();

			return autorizationStore.authorizationToken;


    	},

  	},

	actions:{
		
		
		setErrorMessageText(errorMessageText){

			this.errorMessageText=errorMessageText;
			
		},
		
	},

})