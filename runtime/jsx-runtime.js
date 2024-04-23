const jsxFragment = 'jsx.Fragment';
const jsxTextNode = 'jsx.Text';
function jsx(type, config) {
    if (typeof type === 'function') {
        if (type.prototype !== undefined) {
            return new type(config);
        }
        return type(config);
    }
    const { children = [], ...props } = config;
    const childrenProps = Array().concat(children);
    return {
        type,
        key: null,
        props: {
            ...props,
            children: childrenProps.map((child) => {
                return typeof child == 'object' ? child : {
                    type: jsxTextNode,
                    key: null,
                    props: {
                        text: child,
                        children: []
                    }
                };
            })
        }
    };
}
jsx.Fragment = jsxFragment;
jsx.TextNode = jsxTextNode;
jsx.customAttributes = ['children', 'key', 'props'];
const isStandardAttribute = (key) => !jsx.customAttributes.includes(key);
class Component {
    constructor(props) {
        this.element = null;
        this.props = props;
    }
    render() {
        return null;
    }
}
if (typeof window !== 'undefined') {
    jsx._globalThis = window;
}
jsx.setGlobalThis = (newThis) => {
    jsx._globalThis = newThis;
};
jsx.renderDOM = (renderable, container = null, component = null) => {
    const isComponent = (renderable instanceof Component);
    // @ts-ignore
    let node = isComponent ? renderable.render() : renderable;
    if (isComponent) {
        // @ts-ignore
        component = renderable;
    }
    const doc = (container === null) ? jsx._globalThis.document : container.ownerDocument;
    if (node.type === jsx.TextNode) {
        if (node.props.text === undefined) {
            node.props.text = '';
        }
        const textElem = doc.createTextNode(node.props.text);
        if (container !== null) {
            container.appendChild(textElem);
        }
        return textElem;
    }
    const elem = (node.type === jsx.Fragment)
        ? doc.createDocumentFragment()
        : doc.createElement(node.type);
    // @ts-ignore
    elem.jsxComponent = component;
    const props = node.props;
    const propKeys = Object.keys(props);
    if ((props['className'] !== undefined) && Array.isArray(props['className'])) {
        props['className'] = props['className'].join(' ');
    }
    // assign attributes
    propKeys
        .filter(isStandardAttribute)
        .forEach((name) => {
            let attrVal = props[name];
            if (component !== null && (attrVal instanceof Function)) {
                attrVal = attrVal.bind(component);
                if (attrVal instanceof Function) {
                    attrVal(null);
                }
            }
            console.log("www",name)
            // @ts-ignore
            elem[name] = attrVal;

            if (name!=="className") elem.setAttribute(name,attrVal)

            // @ts-ignore
            elem[name.toLowerCase()] = attrVal;
        });
    if (Array.isArray(node.props.children)) {
        node.props.children.forEach((child) => jsx.renderDOM(child, elem, component));
    }
    let prevElement = null;
    if (isComponent && component !== null) {
        prevElement = component.element;
        component.element = elem;
    }
    if (isComponent && component !== null && component.onWillMount !== undefined) {
        component.onWillMount(prevElement);
    }
    if (container !== null) {
        container.appendChild(elem);
    }
    if (isComponent && component !== null && component.onDidMount !== undefined) {
        component.onDidMount(prevElement);
    }
    return elem;
};
const render = jsx.renderDOM;
export { jsx, jsx as jsxs, jsxFragment as Fragment, render, Component };
