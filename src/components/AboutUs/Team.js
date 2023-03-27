import Row from 'react-bootstrap/Row';
import TeamMember from '../AboutUs/TeamMember';
import rami from '../images/rami.jpg';
import abdullah from '../images/abdullah.jpg';
import doha from '../images/doha.png';
import jana from '../images/jana.jpg';
import mohammad from '../images/mohammad.jpg';


function Team() {

  const obj1 = { id: 1, img: rami, name: "RAMI GHANEM", FaceLink: "https://www.facebook.com/", GhLink: "https://github.com/ramighanem1", InLink: "https://www.linkedin.com/in/rami-ghanem-786760196" };
  const obj2 = { id: 2, img: abdullah, name: "ABDULLA ABU HAMAD", FaceLink: "https://www.facebook.com/", GhLink: " https://github.com/Viltho", InLink: "https://linkedin.com/in/a-a-h" };
  const obj3 = { id: 5, img: mohammad, name: "MOHAMMAD ALGHANIM", FaceLink: "https://www.facebook.com/", GhLink: " https://github.com/mohammadAlghanim", InLink: " linkedin.com/in/mohammad-alghanim-923101204" };
  const obj4 = { id: 4, img: jana, name: "JANA ALMOMANI", FaceLink: "https://www.facebook.com", GhLink: "", InLink: "https://www.linkedin.com/in/jana-almomani-4a9232254" };
  const obj5 = { id: 3, img: doha, name: "DOHA KHAMAISEH", FaceLink: "https://www.facebook.com/", GhLink: " https://github.com/DohaKhamaiseh", InLink: ": https://www.linkedin.com/in/%D8%B6%D8%AD%D9%89-%D8%AE%D9%85%D8%A7%D9%8A%D8%B3%D9%87-05a728254" };
  const obj6 = { id: 6, img: doha, name: "HUSAM ZABIAN", FaceLink: "https://www.facebook.com/", GhLink: "https://github.com/Husam-Zabian", InLink: "https://www.linkedin.com/in/husam-zabian-486069261" };

  const Arr = [obj1, obj2, obj3, obj4, obj5, obj6];
  return (
    <>

      {/* <Row xs={1} md={} className="g-4"> */}
      {/* <h3 style={{"background-color":'#0d0327' ," padding": "0px","margin":'0px',"color":'white',"text-align":"center"}}>Our Team:</h3> */}
      <section className='section-white' >
        <div className='container'>
        <div className='row'>
          <h3>Our Team:</h3>
          {Arr.map((item) => {
            return (
              <TeamMember member={item} key={item.id} />
            )
          })}
          {/* </Row> */}
        </div>
        </div>
      </section>
    </>
  )
}
export default Team;