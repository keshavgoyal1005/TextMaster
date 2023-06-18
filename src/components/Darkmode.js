import React from 'react'

export default function Darkmode(prop) {

    // const [mystyle, setmystyle] = useState({
    //     backgroundColor:'white',
    //     color:'black'
    // })
    // // const [btntext, setbtntext] = useState("Enable Dark Mode")
    // const [eystyle, seteystyle] = useState({
    //     color:'blue'
    // })

    // let changetheme=()=>{

    //     if(mystyle.color=='white'){
    //         setmystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtntext("Enable Dark Mode")
    //         seteystyle({
    //             color:'blue'
    //         })
    //     }
    //     else{
    //         setmystyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtntext("Enable white Mode")
    //         seteystyle({
    //             color:'cyan'
    //         })
    //     }

    // }

    const mystyle ={
        color: prop.mode==='dark'?'white':'black',
        backgroundColor: prop.mode==='dark'?'rgb(14 11 74)':'white',
        // border: '0.2px solid',
        // borderColor: prop.mode==='light'?'black':'rgb(14 11 74)'
    }
    const eystyle ={
        color: prop.mode==='dark'?'cyan':'blue',
    }

    
    
    
    
    return (
        
        
        <div className='container' >

            <h2 style={{color: prop.mode==='dark'?'white':'black'}}>About this App</h2>
            <div className="container my-4" >
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button style={mystyle} className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Clear my text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={eystyle}>By using this button we can Clear all the text in our box.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <strong>UPPERCASE</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={eystyle}>By using this button we can make all the character of our text in capital letters.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <strong>lowercase</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={eystyle}>By using this button we can make all the character of our text in lower case.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                        <strong>copy</strong>
                        </button>
                    </h2>
                    <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={eystyle}>This button will copt all the text in our textarea.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                        <strong>Title Case</strong>
                        </button>
                    </h2>
                    <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={eystyle}>This button will convert our first letter of each word in Uppercase and other character in lowercase.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                        <strong>Inverse Case</strong>
                        </button>
                    </h2>
                    <div id="flush-collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={eystyle}>This button will convert all the character in inverse case like make uppercase in lowercase and vice-versa.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseven" aria-expanded="false" aria-controls="flush-collapseseven">
                        <strong>aLtErNaTiNg CaSe</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseseven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={eystyle}> This button will make one character in uppercase and one character in lowercase alternatevely.</div>
                    </div>
                </div>
            </div>

            </div> 
            {/* <div className="container">
                <button onClick={changetheme} className="btn btn-primary mb-3 my-3" style={mystyle}>{btntext}</button>
            </div> */}
        </div>
    )
}
