import Layout from "../components/layaout";
import { experencies, skills, projects } from "../profile";
import Link from "next/link";



const Index = () => (
    <Layout>
        {/**EL HEAD */}
    <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
                <div className="row">
                    <div className="col-md-4">
                       <img src="Alexis-Gomez.jpeg" alt="" className="img-fluid" ></img> 
                    </div>
                    <div className="col-md-8">
                        <h1>Alexis Gabriel Gomez</h1>
                        <h3>FullStack Developer</h3>
                        <p>lorem30 gnwfinwdwoifbninfwohfakfwufwufbwjbhfwubfjkwhvgjbkfhgvwfjbkwhfgvjk
                            vwhjfwvfhjwbfhvwfhjvwhfvjwhvhwvfwvjwhwkb</p>
                            <a href="/hireme">Contratame</a>                
                    </div>
                </div>
            </div> 

        </div>
    </header>

    {/** Segundo section */}
    <div className="row py-2">
        <div className="col-md-4">
            <div className="card bg-light">
                <div className="card-body">
                    <h1>Habilidades</h1>

                   {
                       skills.map(({skill, percentage}, i) => (
                           <div className="py-3" key={i}>
                               <h5>{skill}</h5>
                               <div className="progress">
                                    <div 
                                    className="progress-bar" 
                                    role="progressbar" 
                                    style={{width: `${percentage}%`}} 
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100" >
                                    </div>
                                </div>
                           </div>
                       ))
                   }
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card bg-light">
                <div className="card-body">
                    <h1>Experiencia</h1>
                    <ul>
                        {
                            experencies.map(({title, description,from, to}, index) => (
                                <li key={index}>
                                    <h3>{title}</h3>
                                    <h5>{from}-{to}</h5>
                                    <p> {description}</p>
                                </li>
                             ))
                        }
                    </ul>

                    <Link href="/experiences">
                        <a className="btn btn-light">
                            know more 
                        </a>
                    </Link>





                </div>
            </div>
        </div>
    </div>
    
    {/**PORTFOLIO */}
    <div className="row">
        <div className="col-md-12">
            <div className="card card-body bg-dark">
                <div className="row">
                    <div className="col-md-12">
                            <h1 className="text-center text-light">PORTFOLIO</h1>
                    </div>

                    {
                        projects.map(({name, description, image}, i) =>(
                        <div className="col-md-4 p-2" key={i}>
                           <div className="card">
                                <div className="overflow h-100 img-fluid">
                                <img src={`/${image}`} alt="" className="card-img-top"/>
                                </div>
                              
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <a href="https://proyecto-integrador-flame.vercel.app/">Know more</a>    
                           </div>
                        </div>
                        ))
                    }

                </div>

                <div className="text-center mt-4">
                    <Link href="/portfolio">
                            <a className="btn btn-outline-light">MAS PROYECTOS</a>
                    </Link>
                </div>    

            </div>

        </div>
    </div>
            
    
    </Layout>
)

export default Index

