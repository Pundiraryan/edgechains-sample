
local promptTemplate = |||
                        You are a code generator. Provide accurate and concise code responses and give only the code no additional statements for explanation for this prompt {prompt}.
                       |||;


local prompt = std.extVar("prompt");

local finalPrompt = std.strReplace(promptTemplate,'{prompt}', prompt + "\n");

local main() =
    local response = arakoo.native("groqaicall")(finalPrompt);
    response;

main()