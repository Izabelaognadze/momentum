import "./App.css";
import { Header } from "./header/header";
import { TaskPage } from "./task-page/task-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<TaskPage />
		</QueryClientProvider>
	);
}

export default App;
