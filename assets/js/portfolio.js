const portInfo =[ {
  "swastha": {
    "Name": "Swastha",
    "Domain": "Web",
    "Project URL": "GIT url",
    "img": {
      1: "assets/img/Portfolio thumbnails/Swastha-home.png",
      2: "assets/img/Portfolio thumbnails/Swastha-dashboard.png",
      3: "assets/img/Portfolio thumbnails/Swastha-map.png",
      4: "assets/img/Portfolio thumbnails/Swastha-news.png",
      5: "assets/img/Portfolio thumbnails/Swastha-abtus.png"
    },
    "Description": "An application which keeps track of user's health history, which helps both doctors and patients to keep track of it. The other features like Notification , News, NearBy hospitals provides all the bsic health-needs in a single application."
  },
  "BH": {
    "Name": "Book Hub",
    "Domain": "Android",
    "Project URL": "GIT url",
    "img": [
      "assets/img/Portfolio thumbnails/bookhub-ui.jpg",
      "assets/img/Portfolio thumbnails/bookhub-home.jpg",
      "assets/img/Portfolio thumbnails/bookhub-des.jpg",
      "assets/img/Portfolio thumbnails/bookhub-fav.jpg"
    ],
    "Description": "An android application which has a list of books. Where user can read the book description add them to fav if they want."
  },
  "NN": {
    "Name": "NewsNode",
    "Domain": "Web",
    "Project URL": "GIT url",
    "img": [
      "assets/img/Portfolio thumbnails/newsNode-home.jpg",
      "assets/img/Portfolio thumbnails/newsNode-404.jpg"
    ],
    "Description": "An news application which  lists the recent news updates based on the user's 'Category' and  'Specification' input."
  },
  "GE": {
    "Name": "Giffy Engine",
    "Domain": "Web",
    "Project URL": "GIT url",
    "img": [
      "assets/img/Portfolio thumbnails/giffyEngine-home.jpg",
      "assets/img/Portfolio thumbnails/giffyEngine-gif.jpg",
    ],
    "Description": "A simple application which displays giffs based on the user provided category"
  },
}
];

function portfolioHandler(folio) {

  var rend = portInfo.map((i)=>{
    console.log(i);
    console.log(i[folio]["Name"]);

    return `
    <div class="col-lg-4 portfolio-info">
            <h3>${i[folio]["Name"]}</h3>
            <ul id="project-info">
              <li><strong>Domain</strong>: Web design</li>
              <li><strong>Tech </strong>: Html/Css/Js</li>
              <li><strong>Project URL</strong>: <a href="#">GIT</a></li>
            </ul>
            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </div>`;
   });

  document.querySelector(".row").append(rend);
}