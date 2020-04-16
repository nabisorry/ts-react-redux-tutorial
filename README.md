TypeScript 로 간단한 redux 작성 하기

### let,const 선언의 타입 추론

```js
let hello: string = "world";

// 굳이 타입을 지정하지 않아도 ts 에서 변수 hello 타입을 string 로 정해준다.
let hello = "world";
```

변수 대신 상수로 선언하면 타입이 상수값 그 자체이다.

```js
// hello type은 'world' 이다.
const hello = "world";
```

### const assertion

const assertion 을 사용해서 let 처럼 가변적인 타입에도 추론 범위를 좁혀줄수 있다.

```js
let hello = "world" as const;

const obj = {
    hello : "world"
} as const;
```
