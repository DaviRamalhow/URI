const fileInput = document.getElementById("fileInput");
const imageList = document.getElementById("imageList");
let imageBase64List = [];

fileInput.addEventListener("change", e => {
    const files = fileInput.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.addEventListener("load", ()=>{
            const result = reader.result;
            const img = document.createElement("img");
            img.src = result;
            imageList.appendChild(img);

            // Armazenar o resultado na lista de base64
            imageBase64List.push(result);

            // Você pode fazer o que quiser com a lista de base64 resultante
            // Por exemplo, enviar para um servidor
            console.log(imageBase64List);
        });

        reader.readAsDataURL(file);
    }
});