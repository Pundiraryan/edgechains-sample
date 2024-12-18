
local promptTemplate = |||
                        You are a unit test case generator. Generate 5 strong test cases along with their expected output for this code {code}.
                       |||;


local code = std.extVar("code");

local finalPrompt = std.strReplace(promptTemplate,'{code}', code + "\n");

local main() =
    local response = arakoo.native("groqaicalltest")(finalPrompt);
    response;

main()