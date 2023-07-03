import "./Mainpage.css";
import MyForm from "./Form";

function MainPage() {
  return (
    <div className="MainPageContainer">
      <div className="MainPageContent">
        <div className="MainPageParagraphs">
          <p>
            <h1>Heading One</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            convallis nunc non nisi pellentesque, eget tempor nisi aliquam. Nam
            eu sapien nisi. Proin volutpat nisl sit amet faucibus convallis.
            Curabitur semper, justo ut mollis laoreet, ligula ligula lobortis
            ex, sit amet auctor ligula urna non nisl. Nam tristique, odio vitae
            pretium feugiat, leo est scelerisque odio, vitae scelerisque nulla
            erat et leo. Phasellus malesuada ipsum vel felis tempus, et bibendum
            enim cursus. Fusce tincidunt, ligula at lobortis rhoncus, enim
            lectus efficitur est, vel convallis dolor leo ac velit. Nam laoreet
            eleifend diam,<h1>Heading 2</h1>eu rutrum lorem. Morbi aliquam massa quis dolor
            feugiat, ut condimentum tortor sollicitudin. Vestibulum laoreet sem
            at nisi interdum,, in gravida ante efficitur. Nam facilisis lorem
            eget sagittis fringilla. Suspendisse semper enim vitae commodo
            auctor. Proin et diam nec massa consectetur ullamcorper. Sed
            sollicitudin lectus non cursus pellentesque. Nulla quis fermentum
            velit. Sed ut odio id justo luctus ullamcorper<span className="MainPageImage">
            <img src="https://picsum.photos/200/300.jpg" alt="Logo" />
        </span> sed elementum nisi pretium. Phasellus commodo nisi
            quis erat laoreet, in gravida ante efficitur. Nam facilisis lorem
            eget sagittis fringilla. Suspendisse semper enim vitae commodo
            auctor. Proin et diam nec massa consectetur ullamcorper. Sed
            sollicitudin lectus non cursus pellentesque. Nulla quis fermentum
            velit. Sed ut odio id justo luctus ullamcorper. Phasellus lacinia
            urna quis mauris bibendum iaculis. <h1>Random Heading</h1> <br></br>Quisque nec felis enim. Curabitur
            non purus fringilla, posuere est vitae, tristique purus. Suspendisse
            aliquet rutrum dolor vel tempor. Phasellus et nisl vel ex suscipit
            congue eu in lorem.<span className="MainPageImage">
            <img src="https://picsum.photos/id/237/200/300" alt="Logo" />
        </span> Aliquam ut urna non mauris sagittis venenatis
            vitae id nulla. Pellentesque non consequat lorem, id rhoncus leo.
            Fusce iaculis, mi sit amet viverra consequat, metus est pulvinar
            est, a pellentesque enim erat et dui. Sed auctor tincidunt dui, eu
            sagittis odio euismod non. Etiam mollis justo vel neque aliquet, nec
            fermentum quam cursus. Aliquam auctor nunc in purus fringilla, eget
            dictum libero tristique. Nullam sit amet faucibus lectus. Donec in
            cursus metus, at lacinia orci. Pellentesque ac finibus elit. Fusce
            hendrerit tortor vitae vestibulum congue. Phasellus gravida metus ac
            arcu dignissim tempus.<span className="MainPageImage">
            <img src="https://picsum.photos/200/300" alt="Logo" />
        </span> Nullam viverra, nisl at dictum egestas,
            lectus nibh lobortis ipsum, et congue lectus elit eget lacus. Morbi
            fringilla erat at tortor placerat viverra. Nullam vitae nunc quis
            arcu commodo tincidunt. Nullam a fermentum odio, sed bibendum quam.
            Ut ac diam at risus faucibus finibus vitae id mauris. Etiam eu justo
            auctor, elementum enim eget, luctus quam. Pellentesque non nunc
            vitae odio pretium sollicitudin nec sed lorem.<span className="MainPageImage">
            <img src="https://picsum.photos/200" alt="Logo" />
        </span> Nulla sit amet mauris
            eleifend, condimentum risus in, vehicula odio. In quis tincidunt
            metus, sed aliquam odio. Proin hendrerit convallis nulla, a
            malesuada odio porta at. Vestibulum et commodo purus. Vestibulum
            vitae malesuada orci. Nulla sem lectus, var
          </p>
        </div>
        
      </div>
      <div className="MainPageForm">
        <MyForm />

      </div>
      <div className="MainPageFooter">
      <footer>
  <div className="footerContainer">
    <div className="footerLinks">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    <div className="footerSocialMedia">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </div>
  <p className="footerText">© 2023 Your Website. All rights reserved.</p>
</footer>

      </div>
    </div>
  );
}
export default MainPage;
