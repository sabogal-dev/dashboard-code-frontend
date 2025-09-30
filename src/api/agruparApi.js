export const agruparApi = async (body) => {
    let respuesta = await fetch(`https://servicios.codeoptikal.com/apiOdoo/Agrupar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(body),
    })
        .then(response => response.json())

    return { respuesta }
    // return { data };
}
