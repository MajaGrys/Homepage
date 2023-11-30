import { Card, CardBody } from "@chakra-ui/react";
import { FaLocationDot, FaEnvelope, FaSquarePhone, FaGithub, FaLinkedin } from "react-icons/fa6";
import '../assets/css/About.scss';
import website from '../assets/images/website.png';

export default function Home() {
    return (
        <section id='about'>
            <h2>About</h2>
            <div className='about-cards'>
                <Card>
                    <CardBody>
                        <div id="hello">Hello, I'm <span id="Maja">Maja</span> ! 👋</div>
                        <div>I'm a frontend developer specializing in React.</div>
                        <p>I love exploring and creating 🚀</p>
                        <img src={website} alt='' />
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <div className="story">I was a student of English Philology at the University of Gdańsk when I took a course on web development. We spent a year learning fundamentals and creating group projects. Ever since then coding has become my passion and I have continued to improve every day. <a href='#projects'>Check out my projects to see my progress!</a></div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <div id="about-info">
                            <div id='mail'><a href="mailto:majagrys@wp.pl"><FaEnvelope size='26px' className="btn-link" /></a> majagrys@wp.pl</div>
                            
                            <div id='phone'><FaSquarePhone size='28px' /> +48 784 250 741</div>

                            <div id='location'><a href="https://www.google.com/maps/place/Kwidzyn/@53.7204709,18.9039382,13z/data=!3m1!4b1!4m6!3m5!1s0x4702b0d59ad94955:0xec7032f22b47a281!8m2!3d53.7263529!4d18.9323043!16zL20vMDEzX3dy?entry=ttu" target="_blank" rel="noreferrer"><FaLocationDot size='28px' className="btn-link" /></a> Kwidzyn, Poland</div>
                        </div>

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