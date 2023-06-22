function getItems() {
    return(
        fetch('http://tes.mediasolutions.uz/api.php?action=items')
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getItems;