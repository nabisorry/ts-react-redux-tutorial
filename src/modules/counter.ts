const INCREASE = "counter/INCREASE" as const; //as const 는 타입추론을 보다 명확히 하기 위해
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCERASE_BY" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// 액션타입
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
