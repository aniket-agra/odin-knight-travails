function createNode(parentNode = null, val = null, child = []) {
    let parent = parentNode;
    let value = val;
    let children = child;
    
    const addChild = function (graphNode) {
        this.children.push(graphNode);
    }

    const getChildren = function () {
        return this.children;
    }

    const setParent = function (graphNode) {
        this.parent = graphNode;
    }

    const getParent = function () {
        return this.parent;
    }

    const setValue = function (coords) {
        this.value = coords;
    }

    const getValue = function () {
        return this.value;
    }

    return {getValue, setValue, getParent, setParent, getChildren, addChild};
}

export {createNode};