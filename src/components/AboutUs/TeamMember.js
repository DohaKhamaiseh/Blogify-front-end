import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './TeamMember.css';

function TeamMember(props) {
  return (

    <section className='section-white' >
      <div className='container'>
        <div className='row'>
          <div >
            {/* <h2 className='section-title'>
              Our Team
            </h2> */}
          </div>
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src={props.member.img} className='team-img' alt={props.member.img} />
              <div className='team-info'>
                <h3>{props.member.name}</h3>
                <p>{props.member.bio}</p>
                <Card.Text className="social-follow">
                  <a href={props.member.FaceLink}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href={props.member.InstLink}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  <a href={props.member.InLink}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>

                </Card.Text>

              </div>
              {/*               
              <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src={props.member.img} className='team-img' alt={props.member.img} />
              <div className='team-info'>
                <h3>{props.member.name}</h3>
                <p>{props.member.bio}</p>
                <Card.Text className="social-follow">
                  <a href={props.member.FaceLink}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  <a href={props.member.InstLink}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>

                  <a href={props.member.InLink}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Card.Text>

              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default TeamMember;

