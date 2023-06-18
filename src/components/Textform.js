import React, { useState } from 'react'
import copy from "copy-to-clipboard";
export default function Textform(prop) {

    const Uppercaseclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const Lowercaseclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const Clearonclick = () => {
        let newtext = "";
        setText(newtext)
    }
    const Copyonclick = () => {
        copy(text);
    }
    const Titlecaseonclick = () => {
        let sentence = text.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        setText(sentence.join(" "))
    }
    const Inversecaseonclick=()=>{
        var s = '';
        var i = 0;
        while (i < text.length) {
            var n = text.charAt(i);
                if (n === n.toUpperCase()) {
                    n = n.toLowerCase();
                }
                else {
                    n = n.toUpperCase();
                }
        
         i +=1; 
         s += n;
        }
        setText(s)
    }
    const Alternateonclick=()=>{
        var s = '';
        var i = 0;
        while (i < text.length) {
            var n = text.charAt(i);
            if(i%2===0){
                n=n.toUpperCase();
            }
            else{
                n=n.toLowerCase();
            }
         i +=1; 
         s += n;
        }
        setText(s)
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" >
                <h2 style={{color: prop.mode==='dark'?'white':'black'}}>{prop.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows="7" style={{backgroundColor:prop.mode==='dark'?'black':'white ' ,color: prop.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary my-3" onClick={Clearonclick}>Clear my text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={Uppercaseclick}>UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary " onClick={Lowercaseclick}>lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={Copyonclick}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary " onClick={Titlecaseonclick}>Title Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={Inversecaseonclick}>Inverse Case</button>
                <button disabled={text.length===0} className="btn btn-primary my-3" onClick={Alternateonclick}>aLtErNaTiNg cAsE</button>

            </div>
            <div className="container my-3" style={{color: prop.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                
                <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters are there in your text</p>
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minues to read this </p>
                <h2>Preview</h2>
                <p className='container'>{text}</p>

            </div>
        </>

    )
}
