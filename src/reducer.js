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