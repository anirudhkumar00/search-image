const accessKey ="lhaC0rm5ldShzLuV_AaRnmoTNkgPI3pLJzbvarPPKXg";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById('search-input');
const searchResults = document.querySelector(".search-results");
const moreButton = document.getElementById("show-more-button");

let inputData ="";
let page = 1;

async function searchImage() {
	inputData = inputE1.value;
	const url= `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12`;

	const response = await fetch(url);
	const data = await response.json();

	const results = data.results;

	results.map((result) => {
	
		const image = document.createElement("img");
		image.src = result.urls.small;
		

		const imageLink = document.createElement("a");
		imageLink.herf = result.links.html;
		imageLink.target = "_blank";

		imageLink.appendChild(image);
		searchResults.appendChild(imageLink);

	})
	moreButton.style.display = "block"
}
	formE1.addEventListener("submit",(event)=>{
		event.preventDefault();
		page=1;
		searchImage();
})
	moreButton.addEventListener("click",()=>{
		
		page++;
		searchImage();
})
