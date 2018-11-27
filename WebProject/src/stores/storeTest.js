
import { createStore } from "redux";

export default class TestStore{
  render(){
    function meetuplist(state = [], action) {
      if (action.type === 'ADD_MEET') {
        return [
          ...state,
          action.payload
        ];
      }
      return state;

    }
    const store = createStore(meetuplist);
    store.subscribe(() => {
      console.log('subscribe', store.getState());
    })

    store.dispatch({ type: 'ADD_MEET', payload: 2018 });
    store.dispatch({ type: 'ADD_MEET', payload: 'Ввод поля' });

  }
}
