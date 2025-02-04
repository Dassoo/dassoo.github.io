// Contenuti pinnati
document.addEventListener("DOMContentLoaded", function() {
    fetch("pinned.json")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("pinned-list");
            data.pinned.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a> - ${item.comment}`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error loading pinned items:", error));
});
