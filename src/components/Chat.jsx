import React from 'react'
import ChatStripe from './ChatStripe'
import ChatTextInput from './ChatTextInput'

const Chat = () => {

    const loader = (element) => {
        element.textContent = ""
        let loadInterval = setInterval (()=>{
            element.textContent += "."

            if(element.textContent === "..."){
                element.textContent = ""
            }
        },300)
    }

    const typeText = (element, text) => {
        let index = 0
        let interval = setInterval(() => {
            if(index < text.length){
                element.innerHTML += text.chartAt(index)
                index++
            }else {
                clearInterval(interval)
            }
        },20)
    }

    const generateUniqueId = () => {
        const timestamp = Date.now()
        const randomNumber = Math.random()
        const hexadecimalString = randomNumber.toString(16)

        return `id-${timestamp}-${hexadecimalString}`
    }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
        <div id='chat_container'>
            <ChatStripe isAi={true} />
        </div>
        <ChatTextInput />
    </div>
  )
}

export default Chat