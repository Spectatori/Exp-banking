import React, { useEffect } from 'react';
const AIChat = () => {
    useEffect(() => {
        window.embeddedChatbotConfig = {
          chatbotId: "cvXz2R1AlLhF7WUMQn_bN",
          domain: "www.chatbase.co",
        };
    
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.setAttribute('chatbotId', "cvXz2R1AlLhF7WUMQn_bN");
        script.setAttribute('domain', "www.chatbase.co");
        script.defer = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return null;
}

export default AIChat
