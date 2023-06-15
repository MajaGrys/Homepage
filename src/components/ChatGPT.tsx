import React from "react";
import Provider, {chatGPTResponse} from '../provider/mainDataProvider';
import { createRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Button, CloseButton } from "@chakra-ui/react";

export default function ChatGPT() {
    const [data, setData] = useState<chatGPTResponse[]>([])
    const [inputData, setInputData] = useState('')
    const inputRef = createRef<HTMLInputElement>()
    
    let debounceTimeout = 0;

    const handleChange = (event: any) => {// todo 
        if (event.target.value.length < 3) {
            return
        }

        if (debounceTimeout) {
            window.clearTimeout(debounceTimeout);
            debounceTimeout = 0;
        }

        debounceTimeout = window.setTimeout(() => {
            setInputData(event.target.value)

            Provider.getOpenAIData(event.target.value)
            .then(res => res.json())
            .then(res => {
                if (res?.choices?.length) {
                    setData([
                        ...data,
                        res
                    ])
                }
            })
        }, 1000)
    }

    const hasData = !!data.length

    return (
        <>
        <section id="chat" className="two">
        <div className="container">
          <header>
            <Slide duration={2000} triggerOnce>
            <h2>Chat with AI</h2>
            </Slide>
          </header>
          <p>Below you can have a conversation with a chatbot implemented with OpenAI API. <br />
            Your message should be longer than 3 characters.</p>

        <input id='chatInput' placeholder="Type your message" onChange={handleChange} ref={inputRef}></input>
        
        {inputData && <button id='clearInput' onClick={() => {
             if (inputRef.current) {
                inputRef.current.value = ''
                setInputData('')
            }
        }}>X</button>}

        {hasData && data.map(item => (
            <p key={item.id}>{item?.choices ? item.choices[0]?.message?.content : ''}</p>
        ))}
        
        {hasData && <Button bg='purple.300' _hover={{bg: 'purple.200'}}  onClick={() => {
            setData([])
        }}>
         Clear results
         </Button>
        }
        
        </div>
        </section>
        </>
    )
}