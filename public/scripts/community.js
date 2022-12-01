/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */


function createCommunity(fields) {
    fetch('/api/community', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}


function deleteCommunity(fields) {
    fetch(`/api/community`,  {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function addCommunityContent(fields) {
    fetch(`/api/community/content`,  {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function findCommunityContent(fields) {
    fetch(`/api/community?commId=${fields.commId}`)
        .then(showResponse)
        .catch(showResponse);
}

// add a function to handle deleting a community

//    create a function like the one above, specifying whether its delete etc
//    add the function in index.js within scripts
//    remember in formsAndHandlers in index.js, the form id in the html maps to the function you created in step 1