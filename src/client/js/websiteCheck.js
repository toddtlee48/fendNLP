function websiteCheck(inputText) {
    let Rgex = RegExp('^(http|https):\/\/')
    if(Rgex.test(inputText)) {
        return true
    } else {
        alert("Please provide a valid url. The URL should begin with http(s)://");
        return false
    }
}
export { websiteCheck }