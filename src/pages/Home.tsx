import Layout from "../layout/index";

export default function Home() {
    return (
        <Layout>
          <div style="display: flex; height: 100%;">
        {/* <!-- Left Pane --> */}
        <div style="width: 40%; display: flex; flex-direction: column; background-color: #24283b; border-right: 2px solid #3c3f51;">
            <header style="padding: 16px; text-align: center; background: linear-gradient(to right, #7aa2f7, #9ece6a); color: #000; font-weight: bold; font-size: 24px;">
                Code and Test Cases Generator
            </header>
            <div style="flex-grow: 1; padding: 24px; overflow-y: auto;">
                {/* <!-- Generate Code Section --> */}
                <div style="margin-bottom: 32px;">
                    <h3 style="font-size: 18px; color: #bb9af7; margin-bottom: 8px;">Get Code in a few Seconds !!</h3>
                    <textarea
                        id="promptInput"
                        name="prompt"
                        placeholder="Enter your code prompt..."
                        style="width: 100%; height: 120px; padding: 12px; border: 1px solid #414868; border-radius: 8px; background-color: #292e42; color: #c0caf5; font-family: monospace; resize: none;"
                        _="on input
                            if my.value is not ''
                                then remove @disabled from #generateCodeBtn
                            else add @disabled to #generateCodeBtn"
                    ></textarea>
                    <button
                        id="generateCodeBtn"
                        disabled
                        hx-post="/generateCode"
                        hx-target="#generatedCode"
                        hx-include="#promptInput"
                        style="display: block; margin-top: 16px; padding: 10px 16px; background: linear-gradient(to right, #7aa2f7, #bb9af7); color: #000; font-weight: bold; border: none; border-radius: 8px; cursor: pointer;"
                        onmouseover="this.style.transform = 'scale(1.05)'; this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)'"
                        onmouseout="this.style.transform = 'scale(1)'; this.style.boxShadow = 'none'"
                    >
                        Generate Code
                    </button>
                    <pre
                        id="generatedCode"
                        style="margin-top: 16px; height: 120px; padding: 12px; border: 1px solid #414868; border-radius: 8px; background-color: #1e202a; color: #9ece6a; overflow: auto; font-family: monospace;"
                    ></pre>
                </div>
                <div>
                    <h3 style="font-size: 18px; color: #bb9af7; margin-bottom: 8px;">Know the edge cases here !!</h3>
                    <textarea
                        id="code"
                        name="code"
                        placeholder="Enter your code for unit testing..."
                        style="width: 100%; height: 120px; padding: 12px; border: 1px solid #414868; border-radius: 8px; background-color: #292e42; color: #c0caf5; font-family: monospace; resize: none;"
                        _="on input
                            if my.value is not ''
                                then remove @disabled from #generateTestsBtn
                            else add @disabled to #generateTestsBtn"
                    ></textarea>
                    <button
                        id="generateTestsBtn"
                        disabled
                        hx-post="/generateTests"
                        hx-target="#debugResult"
                        hx-include="#code"
                        style="display: block; margin-top: 16px; padding: 10px 16px; background: linear-gradient(to right, #bb9af7, #9ece6a); color: #000; font-weight: bold; border: none; border-radius: 8px; cursor: pointer;"
                        onmouseover="this.style.transform = 'scale(1.05)'; this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)'"
                        onmouseout="this.style.transform = 'scale(1)'; this.style.boxShadow = 'none'"
                    >
                        Generate Test Cases
                    </button>
                    <pre
                        id="debugResult"
                        style="margin-top: 16px; height: 120px; padding: 12px; border: 1px solid #414868; border-radius: 8px; background-color: #1e202a; color: #ff9e64; overflow: auto; font-family: monospace;"
                    ></pre>
                </div>
            </div>
        </div>

        {/* <!-- Right Pane --> */}
        <div style="width: 60%; display: flex; flex-direction: column; background-color: #1e1e2e;">
            <header style="padding: 16px; text-align: center; background: linear-gradient(to right, #bb9af7, #9ece6a); color: #000; font-weight: bold; font-size: 24px;">
              Documentation Generator
            </header>
            <div style="flex-grow: 1; padding: 24px; display: flex; flex-direction: column;">

            <div style="margin-bottom: 32px;">
                    <h3 style="font-size: 18px; color: #bb9af7; margin-bottom: 8px;">Get Your Code Documented !!</h3>
                    <textarea
                        id="codefordoc"
                        name="codefordoc"
                        placeholder="Enter your code to document..."
                        style="width: 100%; height: 120px; padding: 12px; border: 1px solid #414868; border-radius: 8px; background-color: #292e42; color: #c0caf5; font-family: monospace; resize: none;"
                        _="on input
                            if my.value is not ''
                                then remove @disabled from #generateDocBtn
                            else add @disabled to #generateDocBtn"
                    ></textarea>
                    <button
                        id="generateDocBtn"
                        disabled
                        hx-post="/generateDocumentation"
                        hx-target="#codefordocoutput"
                        hx-include="#codefordoc"
                        style="display: block; 
                        margin-top: 16px; 
                        padding: 10px 16px; 
                        background: linear-gradient(to right, #f7768e, #9ece6a); 
                        color: #fff;
                        font-weight: bold; 
                        border: none; 
                        border-radius: 8px; 
                        cursor: pointer;"
                        onmouseover="this.style.transform = 'scale(1.05)'; this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)'"
                        onmouseout="this.style.transform = 'scale(1)'; this.style.boxShadow = 'none'"
                    >
                        Start Documentation
                    </button>
                    <pre
                        id="codefordocoutput"
                        style="margin-top: 16px; height: 210px; padding: 12px; border: 1px solid #414868; border-radius: 8px; background-color: #1e202a; color: #7aa2f7; overflow: auto; font-family: monospace;"
                    ></pre>
                </div> 
                          
            </div>
        </div>
    </div>
        </Layout>
    );
}
