/**
 * Fetch the state from HTML5 LocalStorage
 * @return {Object} - Fetched state object.
 */
export const fetch = (key) => {
    let state;
    if (key) {
        if (localStorage[key]) {
            state = JSON.parse(localStorage[key]);
        }
    } else if (localStorage.state) {
        state = JSON.parse(localStorage.state);
    } else {
        state = {};
    }

    return state;
};

/**
 * Fetch the state from HTML5 LocalStorage
 * @param {Object} state - State to be pushed.
 */
export const push = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
};
