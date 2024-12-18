
local promptTemplate = |||
                        You are a code documentation generator.Provide a crisp and well structured documentation like a github readme for this code {codefordoc}.
                       |||;


local codefordoc = std.extVar("codefordoc");

local finalPrompt = std.strReplace(promptTemplate,'{codefordoc}', codefordoc + "\n");

local main() =
    local response = arakoo.native("groqaicalldocument")(finalPrompt);
    response;

main()