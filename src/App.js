import './App.css';

function App() {
  return (
    <>
      <div id='chat_container'></div>
      <form>
        <textarea name="prompt" rows="1" placeholder="Ask Codex..."></textarea>
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" width="25px" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </form>
    </>
  );
}

export default App;
