const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    DialogPersons: [
        {id: 1, name: "Петя"},
        {id: 2, name: 'Катя'},
        {id: 3, name: "Вася"},
        {id: 4, name: "Оля"},
        {id: 5, name: "Джанибег"},
        {id: 6, name: "Пердыгуль"},],
    MessageData: [
        {id: 1, dataText: "Привки!"},
        {id: 2, dataText: "Как дела!"},
        {id: 3, dataText: "Превед медвед!"},
    ]
}


const MessagePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;

            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.MessageData.push({dataText: body});

            return state;

        default:
            return state;

    }
}


export const sendMessageCreater = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreater = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default MessagePageReducer;