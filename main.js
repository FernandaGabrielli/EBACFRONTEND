document.addEventListener('DOMContentLoaded', function() { 
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    try {
        fetch('https://api.github.com/users/FernandaGabrielli')
            .then(function(res) {
                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.status}`);
                }
                return res.json();
            })
            .then(function(json) {
                nameElement.innerText = json.name;
                usernameElement.innerText = json.login;
                avatarElement.src = json.avatar_url;
                followingElement.innerText = json.following;
                followersElement.innerText = json.followers;
                reposElement.innerText = json.public_repos;
                linkElement.href = json.html_url;
            })
            .catch(function(error) {
                console.error('Erro na solicitação da API:', error);
            });
    } catch (error) {
        console.error('Ocorreu um erro na solicitação da API:', error);
    }
});
