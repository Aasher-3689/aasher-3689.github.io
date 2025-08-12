/* 
    UPDATE
    Article cards in main page is not loading from this file now. (adding manually)
    Commenting the template here still
*/









// script to add in html
/*
<script src="./a/articles.js"></script>
<script>
    allArticles.forEach((article) => {showArticleSelfDiv(article)});
    function showArticleSelfDiv(ar) {
    const newArticleSelfDiv = document.createElement("div");
    newArticleSelfDiv.classList.add("article-self-div");
    newArticleSelfDiv.innerHTML = `
                                    <div class="article-self-div-top">
                                        <div class="article-self-div-tags"></div>

                                        <div class="article-self-div-date">
                                        <img src="./assets/images/calendar-icon.svg"><div>${ar.date}</div>
                                        </div>
                                    </div>

                                    <div class="article-self-div-bottom">
                                        <h2 class="article-self-div-title">${ar.title}</h2>

                                        <p class="article-self-div-desc">${ar.desc}</p>

                                        <a href="./a/${ar.fileName}">Read Article</a>
                                    </div>
                                    `;

    document.querySelector(".articles-outer-div").appendChild(newArticleSelfDiv);
    ar.tags.forEach((tag) => {
            const articleSelfDivTag = document.createElement("div");
            articleSelfDivTag.innerHTML = tag;
            newArticleSelfDiv.querySelector(".article-self-div-tags").appendChild(articleSelfDivTag);
    })
    }
</script>
*/










// articles stored. code to keep in this file
/*
const allArticles = [

    {
        id: 2,
        date: "15 Dec 2027",
        tags: ["philosophy"],
        fileName: "testing2",
        title: "Philosopy testing title place. Will goes here",
        desc: "G Testing desc: A small portion of post will appear in this place of some words. It will not be a complete post. For complete",
        a: ""
    },

    {
        id: 1,
        date: "09 Sept 2025",
        tags: ["computing", "python", "frontend"],
        fileName: "testing",
        title: "The Testing title place",
        desc: "The Testing description. A small portion of post will appear in this place of some words. It will not be a complete post. For complete post, you have to click button below. A small portion of post will appear in this place of some words. It will not be a complete post. For complete post, you have to click button below...",
        a: ""
    }
];
*/