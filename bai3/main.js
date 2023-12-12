function loadResource(resource) {
    document.querySelector("#type").innerHTML = `Type: ${resource}`;
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active');
    });

    if (event) {
        event.target.classList.add('active');
    }

    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(data => {
            const resourceList = document.getElementById('resourceList');
            resourceList.innerHTML = '';
            data.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${index + 1}. ${item.title}`;
                resourceList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

window.onload = function () {
    document.querySelector("#type").innerHTML = `Type: posts`;
    document.querySelector("button.btn.btn-primary").classList.add('active');
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
            const resourceList = document.getElementById('resourceList');
            resourceList.innerHTML = '';
            data.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${index + 1}. ${item.title}`;
                resourceList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};
