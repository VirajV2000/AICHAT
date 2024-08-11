import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import {  IKImage } from "imagekitio-react";
import model  from "../../lib/gemini";
import MarkDown from 'react-markdown';


const NewPrompt = () => {
  const [ques,setQues]=useState("");
  const [ans,setAns]=useState("");

  const endRef = useRef(null);
  const [img,setImg]=useState({
    isLoading:false,
    error:"",
    dbData:{},
    aiData:{}
  })
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [ans,ques]);
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });
  const add=async(text)=>{
    setQues(text);

    const result = await chat.sendMessageStream(Object.entries(img.aiData).length ? [img.aiData,text]:[text]);
    // const response = await result.response;
    // const responseText = await response.text(); // Await response.text()
    let accumulatedText="";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      // process.stdout.write(chunkText);
      accumulatedText += chunkText;
      setAns(accumulatedText);
    }
    setImg({isLoading:false,
      error:"",
      dbData:{},
      aiData:{}});
    // console.log(response);
  }
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const text=e.target.text.value;
      if(!text) return;
      // console.log(text);
      add(text);
  }
  return (
    <>
      {img.isLoading && <div>Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_ENDPOINT}
        path= {img.dbData?.filePath}
        width="250"
        transformation={{width:380}}
      />
      )}

      {ques && <div className='message user'>{ques}</div>}
      {ans && <div className="message"><MarkDown>{ans}</MarkDown></div>}
      <div className="endChat" ref={endRef}></div>
      <div className="newForm">
        <form  className="newForm" onSubmit={handleSubmit}>
          {/* <label htmlFor="file">
            <img src="/attachment.png" alt="" />
          </label> */}
          <Upload setImg={setImg}/>
          <input type="file" id="file" multiple={false} hidden />
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPrompt;
