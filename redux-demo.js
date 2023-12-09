// 기본 노드 import 구문
const redux = require('redux');

// Reducer 함수
                    // 현재 상태, 액션
const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment') {
        // 새로운 상태 return
        return {
            counter: state.counter + 1
        };
    }

    if(action.type === 'decrement') {
        // 새로운 상태 return
        return {
            counter: state.counter - 1
        };
    }
    // action이 increment가 아니라면 변하지 않은 상태(state) 반환.
    return state;
};

// 저장소 생성
const store = redux.createStore(counterReducer);

// 구독
const counterSubscriber = () => {
    // getState(): createStore()로 생성된 저장소에서 사용할 수 있는 메소드.
    // 업데이트된 후 최신 상태의 스냅샷 제공.
    const latestState = store.getState();
    console.log(latestState);
};

// 개발자가 실행하는 것이 아닌 리덕스가 실행해줌.
store.subscribe(counterSubscriber);

// action(자바스크립트 객체) 발송
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });