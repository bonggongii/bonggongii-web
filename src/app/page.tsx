'use client';  // 클라이언트 컴포넌트로 지정

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">AI Chatbot</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Ask something..."
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-white border rounded shadow">
          <p className="font-medium">Response:</p>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
