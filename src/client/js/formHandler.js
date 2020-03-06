import {websiteCheck} from "./websiteCheck";
/*Function that takes the form information and either provides information about the website from the api or shows
an alert that the URL is invalid*/
function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    let myForm = document.getElementById('form')
    if (websiteCheck(formText)) {
    const getData = async (url = 'http://localhost:8000/test', data = {}) => {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        });
        let newData = await response.json();
        try {
            console.log(newData)
            document.getElementById('results').innerHTML = 
            `<div class="website"><strong>Website Results: <br> <br>
            Website polarity is:    ${newData.polarity} <br>
            Website subjectivity is:    ${newData.subjectivity} <br>
            Website polarity confidence is:    ${newData.polarity_confidence} <br>
            Website subjectivity confidence is:    ${newData.subjectivity_confidence} </div>` 
            return newData
        } catch(error) {
            console.log('error',error);
        }
    }
    getData(undefined, {url: formText});
    document.getElementById('name').value = "";
}
    document.getElementById('name').value = "";
}
export { handleSubmit }