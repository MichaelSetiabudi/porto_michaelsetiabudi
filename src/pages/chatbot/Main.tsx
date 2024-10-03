import { useState, ChangeEvent, KeyboardEvent } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput("");

    // Panggil fungsi untuk menghasilkan respons bot
    const botMessageText = await generateResponse(input);
    const botMessage: Message = { sender: "bot", text: botMessageText };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    const API_KEY = "AIzaSyBRE9Tee59umxJhBujdnufLpT_z8R40ZR8"; // Ganti dengan kunci API yang valid
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }],
      }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      console.log("Gemini API Response:", data); // Menampilkan respons lengkap di console

      if (data.candidates && data.candidates.length > 0) {
        // Ambil teks dari `content.parts[0].text`
        const botResponse = data.candidates[0]?.content?.parts?.[0]?.text;
        return botResponse || "No response text found."; // Mengembalikan respons yang ditemukan
      } else {
        throw new Error("No candidates found in response");
      }
    } catch (error) {
      console.error("Error fetching data from Gemini API:", error);
      return "Sorry, I could not process your request."; // Respons default jika gagal
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.sender === "bot" ? (
              // Gunakan ReactMarkdown untuk menampilkan teks markdown dengan rapi
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        className="chatbot-input"
      />
      <button onClick={handleSend} className="chatbot-send">
        Send
      </button>
      <style jsx>{`
        .chatbot-container {
          background-color: #1a1a1a;
          border-radius: 10px;
          padding: 20px;
          width: 400px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .chatbot-header {
          font-size: 24px;
          color: #fff;
          margin-bottom: 15px;
          text-align: center;
        }
        .chatbot-messages {
          max-height: 300px;
          overflow-y: auto;
          margin-bottom: 15px;
        }
        .message {
          padding: 10px;
          border-radius: 5px;
          margin: 5px 0;
        }
        .user {
          background-color: #007bff;
          color: #fff;
          align-self: flex-end;
          text-align: right;
        }
        .bot {
          background-color: #ccc;
          color: #333;
          align-self: flex-start;
        }
        .chatbot-input {
          width: calc(100% - 60px);
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #aaa;
        }
        .chatbot-send {
          padding: 10px;
          border-radius: 5px;
          background-color: #007bff;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
