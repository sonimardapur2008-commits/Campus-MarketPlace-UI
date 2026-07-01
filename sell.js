
function openform(category) {
    window.open('../Sell/form.html?category=' + encodeURIComponent(category), '_blank');
}



window.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    if(category) {
        document.getElementById('category').value = category;

        document.getElementById('selectedCategory').innerText = "Selected Category: " + category;
    }

});
      
