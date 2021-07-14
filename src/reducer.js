let state;

function counterReducer(state = { count: 0 }, action) {
    console.log("reducer")
    switch(action.type) {
        case "counter/increment":
            return { count: state.count + 1 }
        default: 
            return state;
    };
};

function dispatch(action) {
    console.log("dispatch")
    state = counterReducer(state, action);
    render();
}

function render() {
    if (state !== undefined) { container.innerText = state.count; }
    console.log("render")
}