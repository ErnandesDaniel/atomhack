
import { axios } from '@/common/axios.js'


async function getAuthorizationLink(email){

		//Пытаемся отправить запрос на сервер
		let response=await axios.get('users/getAuthorizationLink',{

			params:{email:email,}
					
		});
			
		console.log(response);

		return response;

}

export { getAuthorizationLink };