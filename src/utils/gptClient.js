import Groq from "groq-sdk";
import { GROQ_API_KEY } from './constants';

// const client = new OpenAI({
// //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
//     apiKey: OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true
// });
const client = new Groq({ apiKey: GROQ_API_KEY,dangerouslyAllowBrowser: true  });

export default client;