const contenedor = document.querySelector('#container-proyects');

console.log(contenedor);
const getRepository = async () => {
    console.log('hols');
    const repositorios = await(await fetch('https://api.github.com/users/AdriannaVarela/repos')).json();

    contenedor.innerHTML = '';

    repositorios.forEach(repositorio => {
        console.log(repositorio.name);
        console.log(repositorio.description);
        console.log(repositorio.html_url);
        const li = document.createElement('li');
        li.classList.add('repositorio');
        li.innerHTML = `
                    <h3 class="titulo-repositorio">${repositorio.name.replace(/-/g, ' ')}</h3>
                    <div class="segundo-repositorio">
                        <p class="descripcion">${repositorio.description}</p> 
                        <a href="${repositorio.html_url}"><img src="carpeta.png" alt="carpeta" class="imagen"></a>
                    </div>
                `;
        
                contenedor.appendChild(li);

    });
}
getRepository();
