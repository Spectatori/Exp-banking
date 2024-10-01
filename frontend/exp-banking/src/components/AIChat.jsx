import React, { useEffect } from 'react';
const AIChat = () => {
    useEffect(() => {
      const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "tOVEnzW64c-jO1s8e3MM0");
    script.setAttribute("domain", "www.chatbase.co");
    
    document.body.appendChild(script);

    window.embeddedChatbotConfig = {
      chatbotId: "tOVEnzW64c-jO1s8e3MM0",
      domain: "www.chatbase.co"
    };
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
    
      return null;
}

export default AIChat
