import Provider, {chatGPTResponse} from '../provider/mainDataProvider';
import { createRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import '../assets/css/ChatGPT.scss';

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
        <section id="chat">
            <h2>Chat with AI</h2>
            <s>Below you can have a conversation with a chatbot implemented using OpenAI API.</s>
            <p>The chatbot no longer responds due to the end of the OpenAI API's free period. Sorry!</p>

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
        
        </section>
    )
}