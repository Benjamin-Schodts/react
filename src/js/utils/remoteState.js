/**
 * Fetch the state from HTML5 LocalStorage
 * @return {Object} - Fetched state object.
 */
export const fetch = (key) => (key ? JSON.parse(localStorage[key]) : JSON.parse(localStorage.state));

/**
 * Fetch the state from HTML5 LocalStorage
 * @param {Object} state - State to be pushed.
 */
export const push = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
};
