import { groqObj } from "../common/header.cjs";

function groqaicalldocument(){
    return async function(prompt:String){
        try {
            // Send the prompt to the Groq API
            const resp=await groqObj.llm.chat.completions.create({
                messages: [
                    {
                      role: "user",
                      content: String(prompt),
                    },
                  ],
                  model: groqObj.llmmodel,
    
            })
            return resp.choices[0]?.message?.content || "";
        } catch (error: any) {
            return error.message;
        }
    }
    
}

module.exports=groqaicalldocument