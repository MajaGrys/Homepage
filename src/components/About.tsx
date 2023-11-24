import { Card, CardBody } from "@chakra-ui/react";
import { FaLocationDot, FaEnvelope, FaSquarePhone, FaGithub, FaLinkedin } from "react-icons/fa6";
import '../assets/css/About.scss';
import avatar from '../assets/images/IMG_20230724_175635.jpg';

export default function Home() {
    return (
        <section id='about'>
            <h2>About</h2>
            <div id='about-cards'>
                <Card width='md'>
                    <CardBody>
                        <img src={avatar} id='about-avatar' alt='' />
                        <p>Hello, I'm Maja! 👋</p>
                        <p>I'm a frontend developer specializing in React.</p>
                        <p>I love exploring and creating 🚀</p>
                    </CardBody>
                </Card>

               <Card width='md'>
                    <CardBody>
                        <div id='location'><a href="https://www.google.com/maps/place/Kwidzyn/@53.7204709,18.9039382,13z/data=!3m1!4b1!4m6!3m5!1s0x4702b0d59ad94955:0xec7032f22b47a281!8m2!3d53.7263529!4d18.9323043!16zL20vMDEzX3dy?entry=ttu" target="_blank" rel="noreferrer"><FaLocationDot size='28px' className="btn-link" /></a> Kwidzyn, Poland</div>

                        <div id='mail'><a href="mailto:majagrys@wp.pl"><FaEnvelope size='26px' className="btn-link" /></a> majagrys@wp.pl</div>

                        <div id='phone'><FaSquarePhone size='28px' /> +48 784 250 741</div>

                        <div id="about-links">
                            <a href="https://github.com/MajaGrys" target="_blank" rel="noreferrer"><FaGithub size='50px' className="btn-link" /></a>
                            <a href="https://www.linkedin.com/in/maja-grys-2b3694294/" target="_blank" rel="noreferrer"><FaLinkedin size='50px' className="btn-link" /></a>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}