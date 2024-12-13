import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  try {
    // 'gpt-3.5-turbo' 모델을 사용하여 텍스트 생성 요청
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',  // 모델명
      messages: [{ role: 'user', content: prompt }],  // 사용자 메시지 전달
      max_tokens: 100,  // 최대 토큰 수
    });

    res.status(200).json({ result: response.choices[0].message.content });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to connect to OpenAI' });
  }
}
