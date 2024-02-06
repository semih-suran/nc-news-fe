import Header from "./Header";
import NavBar from "./NavBar";
import Users from "./Users";
import AllArticles from "./Articles";

function Body() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      {/* <div className="topic-photos">
        <button>Cooking Articles
          <img
            className="cooking-photo"
            src="https://img.jakpost.net/c/2018/06/27/2018_06_27_48298_1530062479._large.jpg"
            alt="a chopping board with some ingredients around it"
          />
        </button>
        <button>Coding Articles
          <img
            className="coding-photo"
            src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
            alt="some complicated code on a screen"
          />
        </button>
        <button>Football Articles
          <img
            className="football-photo"
            src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg"
            alt="a football touching the net"
          />
        </button>
      </div> */}
      <AllArticles></AllArticles>
      {/* <Users></Users>  */}
    </>
  );
}

export default Body;
