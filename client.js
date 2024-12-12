function addpost(event) {
    event.preventDefault();

    const request = {
        author: document.querySelector('#author').value,
        text: document.querySelector('#text').value,
        url: document.querySelector('#url').value
    };

    fetch('http://localhost:3000/addpost', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({data: request})
    })
    .then(res => res.json())  
    .then(data => {
        console.log('Success:', data);
    })
    .catch(err => console.log('Error:', err));
}

document.querySelector('#postForm').addEventListener('submit', addpost);