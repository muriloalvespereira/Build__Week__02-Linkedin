import { ListGroup } from "react-bootstrap";
import { ChevronCompactDown, Dot, InfoSquareFill, ThreeDots } from "react-bootstrap-icons";

const SideHome = () => {

    return (
    
        <aside>

            <div className="pt-2 text-left" >
                <section>                    
                    <ListGroup style={{ borderRadius: "7px"}}>
                        <ListGroup.Item style={{ color: "#61605F", border: "none" }}>
                        <h5>LinkedIn News<InfoSquareFill className="float-right" size={16} /></h5>
                        
                        </ListGroup.Item>

                        <ListGroup.Item                         
                        style={{ color: "#61605F", border: "none" }}>
                            <strong><Dot size={20} />My salary? Shhh, it´s a secret</strong>
                            <p><small className="ml-3">1d ago <Dot size={16} />6,791 readers</small></p>
                        </ListGroup.Item>                    

                        <ListGroup.Item style={{ color: "#61605F", border: "none" }}>
                        <h5 className="text-left">Show more
                        <span className="ml-2"><ChevronCompactDown size={16} /></span></h5>
                        
                        </ListGroup.Item>  

                    </ListGroup>
                </section>
            </div>

            <div className="pt-4 text-left"  >
                <section >
                    
                    <ListGroup style={{ borderRadius: "7px"}}>
                        <ListGroup.Item style={{ color: "#61605F", border: "none" }}>
                        <h5 className="text-left" 
                        >Today´s top courses<InfoSquareFill className="float-right" size={16} /></h5>
                        
                        </ListGroup.Item>

                        <ListGroup.Item 
                        style={{ color: "#61605F", border: "none", type: "1" }}>
                            <strong>1. Leadership foundations</strong>
                            <p><small className="ml-3">Dr. Shirley Davis</small></p>
                        </ListGroup.Item>                    
                    </ListGroup>

                </section>
            </div>


            <div className="pt-4 text-left" >
                <section >
                    
                    <ListGroup style={{ borderRadius: "7px"}}>
                        <ListGroup.Item style={{ color: "#61605F", border: "none" }}>
                        <h5 className="text-left" 
                        >Promoted<ThreeDots className="float-right" size={16} /></h5>
                        
                        </ListGroup.Item>

                        <ListGroup.Item 
                        style={{ color: "#61605F", border: "none" }}>
                           
                        </ListGroup.Item>                    
                    </ListGroup>

                </section>
            </div>
           
            <footer >
            <ListGroup className="pt-5 d-flex flex-wrap justify-content-center align-items-center" >

                <ListGroup.Item className="pb-0"
                style={{ background: "#F3F2EF", border: "none" }}
                >
                <a href="#" style={{color: "#61605F",
                textDecorationLine: "none"}}>About</a>
                </ListGroup.Item>
                <ListGroup.Item  className="pb-0" style={{ background: "#F3F2EF", border: "none" }}>
                <a href="#" style={{color: "#61605F", textDecorationLine: "none"}}>
                    Accessibility</a>
                </ListGroup.Item>
                <ListGroup.Item className="pb-0" style={{ background: "#F3F2EF", border: "none" }}>
                <a href="#" style={{color: "#61605F", textDecorationLine: "none"}}>Help Center</a>
                </ListGroup.Item>
           

            
            <a  href="#" style={{color: "#61605F", textDecorationLine: "none"}}>Privacy & Terms</a>
            <span >
                <a href="#" style={{color: "#61605F", textDecorationLine: "none"}}>Ad Choices</a>
                </span>
                <span>
            <a href="#" style={{color: "#61605F", textDecorationLine: "none"}}>Advertising</a>
            </span>
           

           
            <a  href="#" style={{color: "#61605F", textDecorationLine: "none"}}>Business Services</a>
            <span >
                <a href="#" style={{color: "#61605F", textDecorationLine: "none"}}>Get the LinkedIn app</a>
                </span>
                <span >
            <a href="#" style={{color: "#61605F", textDecorationLine: "none"}}>More</a>
            </span>
            </ListGroup>
 

            <div className="pt-4"><img src="LI-Logo.png" style={{width: "5rem"}} alt="" /> <span>LinkedIn Corporation © 2021</span>

            </div>
            </footer>

        </aside>   

    )
}

export default SideHome;