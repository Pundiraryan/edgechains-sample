
import { ArakooServer } from "@arakoodev/edgechains.js/arakooserver";
import Home from "./pages/Home.js";
import Jsonnet from "@arakoodev/jsonnet";
const rpc=require('sync-rpc')
import path from 'path'

const server = new ArakooServer();
const app = server.createApp();
server.useCors();

const jsonnet = new Jsonnet();
const groqaicall = rpc(path.join(__dirname, "/lib/generateResponse.cjs"));
const groqaicalltest = rpc(path.join(__dirname, "/lib/generateTestCases.cjs"));
const groqaicalldocument = rpc(path.join(__dirname, "/lib/generateDocumentation.cjs"));


app.get("/", (c) => {
  return c.html((<Home />) as string);
});

app.post("/generateCode",async (c)=>{
  const { prompt } = await c.req.parseBody();
  try {

    jsonnet.extString("prompt", String(prompt));
    jsonnet.javascriptCallback("groqaicall", groqaicall);

    const rescode = await 
        JSON.parse(jsonnet.evaluateFile(path.join(__dirname, "../jsonnet/main.jsonnet")));

    return c.html(rescode);
  } catch (error) {
    return c.json({error:error.message});
  }
})
    
  // Endpoint for code debugging
  app.post("/generateTests", async (c) => {
    const { code } = await c.req.parseBody();
    try {
      jsonnet.extString("code", String(code));
      jsonnet.javascriptCallback("groqaicalltest", groqaicalltest);
  
      const rescode = await 
          JSON.parse(jsonnet.evaluateFile(path.join(__dirname, "../jsonnet/test.jsonnet")));
  
      return c.html(rescode);
    } catch (error) {
      return c.json({error:error.message});
    }
  });
  
// Endpoint for documentation
  app.post("/generateDocumentation", async (c) => {
    const { codefordoc } = await c.req.parseBody();
    try {
      jsonnet.extString("codefordoc", String(codefordoc));
      jsonnet.javascriptCallback("groqaicalldocument", groqaicalldocument);
  
      const rescode = await 
          JSON.parse(jsonnet.evaluateFile(path.join(__dirname, "../jsonnet/documentation.jsonnet")));
  
      return c.html(rescode);
    } catch (error) {
      return c.json({error:error.message});
    }
  });


  server.listen(3000)