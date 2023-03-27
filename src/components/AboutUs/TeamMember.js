
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './About.css';

function TeamMember(props) {
  return (
    <>
      <div className='teamcard my-4 mx-4'>
        <img src={props.member.img} className='imageinaboutus' alt={props.member.img} />

        <h3>{props.member.name}</h3>
        <p>{props.member.bio}</p>

        <div>
          <a href={props.member.FaceLink}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href={props.member.InstLink}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={props.member.InLink}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  )
}
export default TeamMember;

