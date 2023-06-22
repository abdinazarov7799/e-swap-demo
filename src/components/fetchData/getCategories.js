function getCategories() {
    return(
        fetch('http://tes.mediasolutions.uz/api.php?action=categories')
            .then(response => response.json())
    )
}
export default getCategories;