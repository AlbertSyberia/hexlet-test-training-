export default (object, key, value) => {
if (!object.hasOwnProperty(key)) {
    object[key] = value
}

return object
}
