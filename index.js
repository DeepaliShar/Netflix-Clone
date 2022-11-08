//Consts
const apikey = "";
const apiEndpoint = "";

const apiPaths={
    fetchAllCategories: '${apiEndpoint}'/genre/movie/list?api_key=${apikey}
    fetchMoviesList: (id) => '${baseUrl}/dis
}
//boots up the app
function init(){
    fetchAndBuildAllSections();
}
function fetchAndBuildAllSections(){
    fetch(apiPaths.fetchAllCategories)
    .then(res => res.json())
    .then(res => {
        const categories=res.genres;
        if(Array.isArray(categories) && categories.length){
            categories.forEach(category => {
                fetchAndBuildMovieSection(category);uki
            });
        }

        //console.table(movies);
    })
    .catch(err=>console.error(err));
}
function fetchAndBuildMovieSection(category){
    console.log(category);
}
window.addEventListener('load',function()){
    init();
}
