

import './Homestyle.css'
import {FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter,FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import 'animate.css';

const Home = () => {
    return (
        <>
        {% load static %} 

        <script type="text/javascript" charset="{% static 'Home.js' %}">
hello()
</script>
      
        <nav className=" newnav w-full inline-flex"></nav>
            
        {/* <span class="text-blue-400  text-sm font-bold">
            <i class="inline-block mr-3 text-blue-400 fas fa-envelope" aria-hidden="true">
                </i><FaEnvelope/>info@idatech.rw</span> */}
        <nav className='background inline-flex text-blue-400 font-bold pb-2'>
         <p><FaEnvelope/></p> 
         <p className='phone'><FaPhoneAlt/></p>
         </nav>
            <p className='ida text-blue-400 font-bold '>info@idatech</p>
            <p className='phoneid text-blue-400 font-bold'>+250 784 981 685 </p>

            <div className='package inline-flex text-blue-400 font-bold'>
            <i className='facebook'><FaFacebook/></i>
            <i className='twitter'><FaTwitter/></i>
            <i className='instagram'><FaInstagram/></i>
            <i className='linkedin'><FaLinkedinIn/></i>
            </div>

            <nav className='image mr-14 pb-10'>
                <img src='./Images/idalog.jpg' alt='idalog'/>

                <div className='info text-blue-400 font-bold'>

                    <a href='/' className='home pl-64 pb-64 hover:text-red-900'>Home</a>

                    <div className='services hover:text-red-900'>
                      
                     <select> 
                        <option value={'0'}>IT Services</option>
                        <option value={'1'}>Software Development</option>
                        <option value={'2'}>Hires Trainees</option>
                        <option value={'3'}>Contact Sales</option>
                    </select>
                    </div>

                    <div className='programs hover:text-red-900'>

                    <select> 
                        <option value={'0'}>iDa programs</option>
                        <option value={'1'}>Software Development</option>
                        <option value={'2'}>Hires Trainees</option>
                        <option value={'3'}>Contact Sales</option>
                    </select>
                    </div> 

                    <a href='/team' className='team pl-64 pb-64 hover:text-red-900'>Team</a>
                    <a href='/project' className='project pl-64 pb-64 hover:text-red-900'>Projects</a>
                    <button className='ml-18 bg-blue-900 rounded-lg py-3 mb-12 '>
                    <span class="text-gray-100 font-bold">Join Now</span></button>

                </div>
            </nav>
            
         
        <nav className='container w-full h-full'>
            <h1 className='ml-10 text-blue-900 text-5xl pt-32 font-bold'>WELCOME TO IDA TECHNOLOGY</h1>
            <p className='ml-5 text-gray-900 text-2xl pt-7'>We are a Rwandan Social Enterprise, Founded in 2016</p>
            <button className=' butto mr-32 bg-blue-900 rounded-lg px-12 py-3 mb-12 md:mb-32'>
                    <span class="text-gray-100 font-bold">Donate</span></button>
        </nav>

        <div className='none'>
        <div className='choose bg-blue-400 text-gray-100 shadow-lg rounded-md w-40 pb-4 pr-4 mt-10'>
        <p className='text-gray-100 p-8 font-bold text-xl pb-8'>Why choose us?</p>
        <p className='px-8 mt-4 text-md text-center text-gray-100 font-bold mb-4'>
        We dedicate our effort in
        providing affordable ICT services and ICT informal education to public and private companies as well as primary and secondary schools...
        </p>
        <center>
            <a href='/'><button className='learn bg-blue-900 text-gray-100 font-bold px-2 py-2 w-60 rounded-lg mb-2 pr-10'>
                Learn more about us &gt;&gt; </button>
            </a>
        </center>
        </div>

        <div className='platform bg-white text-gray-100 shadow-lg rounded-xl pb-52 ml-80 animate__animated animate__fadeInUp'>
        <p className='text-gray-600 p-8 font-bold text-3xl pb-6'>IamTheCode Platform</p>
        <p className='px-8 mt-4 text-md text-center text-gray-600 '>
        Get a 12 weeks of blended 
      learning with iamThecode by 
      accessing iamThecode digital 
      Platform for free. 
               </p>
               
        </div>


        <div className='plat bg-blue-300 text-gray-100 shadow-lg rounded-xl pb-52 ml-80 animate__animated animate__fadeInUp'>
        <p className='text-gray-600 p-8 font-bold text-3xl pb-8'>#iDa Mission</p>
        <p className='px-8 mt-4 text-md text-white '>
        By 2030, We have a mission to
      create 10 000 jobs and make 
      500 000 youths, women
      refugees, and girls from lower
      families
               </p>
               
        </div>

        <div className='form bg-white text-gray-100 shadow-lg rounded-xl pb-52 ml-80 animate__animated animate__fadeInUp'>
        <p className='text-gray-600 p-8 font-bold text-3xl pb-8'>Hire our trainees</p>
        <p className='px-8 mt-4 text-md text-gray-600 '>
        To contribute to our mission 
      of job creation, Hire our  
      trainees  
               </p>       
        </div>
        </div>

        <div className='work text-center'>
        <h2 className='text-blue-600 p-4 font-bold text-2xl'>Our ICT Informal Education Programs</h2>
        <p className='text-gray-600 font-medium  px-7'>Our ICT Education Programs aim to support Rwandan youth and girls from local low-<br></br>income communities accessing an<br></br>
             affordable learning focusing on general computer literacy, coding, data science and <br></br>internet of thing.  </p>
 
             <div className='main inline-flex'>
             <div className='row bg-white shadow-lg rounded-xl mt-14 w-82 ml-20 animate__animated animate__slideInUp'>
              <center>
                <img src='./Images/aipe.png' alt='aipe' className='w-24 h-24' />
              </center>
              <h4 class="text-blue-600 p-2 text-center font-bold">AIPE </h4>
              <p class="text-center mt-4 pr-10">
              All for inforamtion and <br></br>programming
              Educations a <br></br>program designed to
              teach <br></br>youths from low income family <br></br> and  refugee camps aged between<br></br> 8 to 16 years how to code 

            <a href="/aipe/">
                <span class="text-blue-600">Find <br></br>More&gt;&gt;</span></a> 
            </p>

             </div>

             <div className='row bg-white shadow-lg rounded-xl mt-14 w-72 ml-8  animate__animated animate__fadeInUp'>
              <center>
                <img src='./Images/preview.png' alt='person' className='w-24 h-24' />
              </center>
              <h4 class="text-blue-600 p-2 text-center font-bold uppercase">GIRLS IN CODE </h4>
              <p class="text-center mt-4 pr-10">
           A program  initiated to close the<br></br>
             gender gap in technology  by <br></br>focusing on girls and women <br></br>between 18 -24 years old from <br></br>low income families and refugees <br></br>camps
            <a href="/girlsincode/">
                <span class="text-blue-600">Find More&gt;&gt;</span></a>
            </p> 
            </div>

             </div>

             <div className='menu inline-flex'>
             <div className='row bg-white shadow-lg rounded-xl mt-14 w-72 ml-24 pr-10 animate__animated animate__fadeInUp'>
              <center>
                <img src='./Images/code.png' alt='code' className='w-24 h-24' />
              </center>
              <h4 className='text-blue-600 p-2 text-center font-bold uppercase'>Junior Programmers</h4>
              <p className='text-center mt-4'>
              Exposing Children who come from <br></br>Primaries 
              and secondary schools <br></br>to software development at their <br></br>early age has cotributed much<br></br>
              <span className='text-blue-600'>Find More&gt;&gt;</span>
            </p>
             </div>

             <div className='lower bg-white shadow-lg rounded-xl mt-14 w-72 ml-8 pr-10 animate__animated animate__fadeInUp'>
              <center>
                <img src='./Images/sustainability.png' alt='sustainability' className='w-24 h-24' />
              </center>
              <h4 className='text-blue-600 p-2 text-center uppercase font-bold'>SCPIoT</h4>
              <p className='mt-4'>
              Sustainable Career in <br></br>programming and IoT 
              Program <br></br>was initiated in 2019 to equipe<br></br>
              TVET and University graduates <br></br>with ICT and<br></br>
            </p>
            <span className='text-blue-600'>Find More&gt;&gt;</span>
 
            </div>

             </div>
             </div>

             <div className='benefic'>
   <h2 class="text-blue-50 uppercase p-8 font-bold text-lg text-center">Beneficiaries' Projects</h2>
    </div>
    
    <div className='ngobyi mt-10 animate__animated animate__fadeInUp'>
    <h3 className="text-blue-900 font-bold pl-24">NGOBYI Project</h3>
    <p className="pt-4 text-base pl-16 mt-4">My names are Niyitanga Joseph, After completing my university attendeed SCPIOT program in 2019<br></br>at Ida Technology Head office in kigali,6months I spent at Ida tech.
    I developed a software which today is facilitating <br></br>my farmer's community in collecting harvest,deal with sales and harvests
  wast management</p>
  <button className='more bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 mt-28 mr-44 rounded'>
    Find More &gt;&gt;
    </button>
    </div>
    
    <div className='smart mt-4 w-full md:w-2/6 ml-48 mt-10 animate__animated animate__fadeInUp'>
      <img src='./Images/kigega.jpg' alt='smart kigega'/>
     <h3 className='kigega text-blue-900 font-bold text-center mt-10'>SMART IKIGEGA</h3>
    <p className='kajojo mt-2'>My names are Kajojo Joselyne, After completing my university attendeed SCPIOT program in 2019 at Ida Technology Head office in kigali,6months I spent at Ida tech.
      I developed a software which today is facilitating my farmer's community in collecting harvest,deal with sales and harvests
    wast management</p>
    <button className='findbuto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 mt-28 rounded'>
    Find More &gt;&gt;
    </button>
    
    </div>
    


        

        
        </>
    )
}
export default Home;