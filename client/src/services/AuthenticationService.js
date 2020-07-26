import Api from '@/services/Api';

//What does the @ do

export default {
    register (credentials){
        return Api().post('register', credentials);
    }
}

//Suppose to be able to access as AuthenticationService.register({
//     email: sam@SpeechGrammarList,
//     password: secret
// })