import Groq from "groq-sdk";
import Jsonnet from "@arakoodev/jsonnet";
import path from 'path'

const jsonnet = new Jsonnet();
const secretsPath = path.join(__dirname, "../../jsonnet/secrets.jsonnet");
const groqapikey = JSON.parse(jsonnet.evaluateFile(secretsPath)).groq_api_key;
const groqllmmodel = JSON.parse(jsonnet.evaluateFile(secretsPath)).groq_llm_model;

const groq = new Groq({ apiKey: groqapikey });

const groqObj={
    llm:groq,
    llmmodel:groqllmmodel
}

export {groqObj}