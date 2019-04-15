export default (el) => {
    let height = 0;

    Array.prototype.slice.call(el.children).forEach((child) => {
        height += child.offsetHeight
            + parseInt(getComputedStyle(child).marginBottom, 10)
            + parseInt(getComputedStyle(child).marginTop, 10);
    });

    return height;
};
