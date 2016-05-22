export default function rootReducer(state = 0, action) {
  console.log('state:'+JSON.stringify(state))
  return {debug: state.debug, counter: state.counter +1}
}
