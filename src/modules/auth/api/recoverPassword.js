
import { axios } from '@/common/axios.js'

import router from '@/router'

import { useAutorizationStore } from '../stores/autorization.js';

async function recoverPassword(email){
	
		let setAutorizationData=useAutorizationStore().setAutorizationData;

		//Пытаемся отправить запрос на сервер
		let response=await axios.post('users/recoverPassword', {email:email});
		
		if(response.data.errorExist==false && response.data.actionMessage=='checkEmail'){
	
			router.push({path: '/autorization/needForChangePassword'});
			
        }
				
		return response;

}

export { recoverPassword };