import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import { GlobalStyle } from "./globalStyle.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<RecoilRoot>
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</RecoilRoot>,
);
