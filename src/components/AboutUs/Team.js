import Row from 'react-bootstrap/Row';
import TeamMember from '../AboutUs/TeamMember';
import rami from '../images/rami.jpg';
import abdullah from '../images/abdullah.jpg';
import doha from '../images/doha.png';
import jana from '../images/jana.jpg';
import mohammad from '../images/mohammad.jpg';


function Team(){

    const obj1={id:1,img:rami,name:"RAMI GHANEM",bio:"Leader",FaceLink:"https://www.",InstLink:"https://www.",InLink:"https://www."};
    const obj2={id:2,img:abdullah,name:"ABDULLA ABU HAMAD",bio:"",FaceLink:"https://www.",InstLink:"https://www.",InLink:"https://www."};
    const obj3={id:3,img:doha,name:"DOHA KHAMAISEH",bio:"A computer engineer looking for knowledge and experience in Full Stack field.",FaceLink:"https://www.",InstLink:"https://www.",InLink:": https://www.linkedin.com/in/%D8%B6%D8%AD%D9%89-%D8%AE%D9%85%D8%A7%D9%8A%D8%B3%D9%87-05a728254"};
    const obj4={id:4,img:jana,name:"JANA ALMOMANI",bio:"fresh graduate from yarmouk University\n computer science\n Full Stack developer",FaceLink:"https://www.facebook.com/jana.almomani.7771?mibextid=LQQJ4d",InstLink:"https://instagram.com/jana.almomani1?igshid=YmMyMTA2M2Y=",InLink:"https://www.linkedin.com/in/jana-almomani-4a9232254"};
    const obj5={id:5,img:mohammad,name:"MOHAMMAD ALGHANIM",bio:"",FaceLink:"https://www.",InstLink:"https://www.",InLink:"https://www."};
    const obj6={id:6,img:doha,name:"HUSAM ZABIAN",bio:"",FaceLink:"https://www.",InstLink:"https://www.",InLink:"https://www."};

    const Arr=[obj1,obj2,obj3,obj4,obj5,obj6];
return(
    <>
   
     {/* <Row xs={1} md={2} className="g-4"> */}
     {/* <h3 style={{"background-color":'#0d0327' ," padding": "0px","margin":'0px',"color":'white',"text-align":"center"}}>Our Team:</h3> */}
     {Arr.map((item)=>{
    return(
      <TeamMember member={item} key={item.id}/>
    ) })}
    {/* </Row> */}
    </>
)
}
export default Team;