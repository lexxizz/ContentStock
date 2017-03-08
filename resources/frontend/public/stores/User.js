import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import EventEmitter from 'events';
import _  from 'lodash';

var __user_data = {};

function setUser(data) {
    __user_data= data;
}


var UserStore = _.merge({}, EventEmitter.prototype, {

    getUser: function() {
        return __user_data;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {

    switch(payload.actionType) {
        case 'GET_USER':
            setUser(payload.data);
            break;
        default:
            return true;
    }

    UserStore.emitChange();

    return true;
});

export default UserStore;
