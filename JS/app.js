function getElement(param) {
    const element = document.getElementById(param);
    const elementData = parseInt(element.value);
    element.value = elementData;
    element.value = ''
    return elementData;
}