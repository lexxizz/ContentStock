import asyncDispatch from 'napishem-frontend-utils/modules/AsyncDispatch';
import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import Request from 'napishem-frontend-utils/modules/Request';

var UserActions = {

    getUser() {
        asyncDispatch('GET_USER', '/ajax/user/get');
    }

};

export default UserActions;